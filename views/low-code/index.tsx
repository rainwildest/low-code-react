import { useState, useRef, useEffect, useMemo, memo, WheelEvent } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { emitter } from "lib/utils";

import ControlArea from "./components/ControlArea";
import DesignArea from "./components/DesignArea";
import AttributeArea from "./components/AttributeArea";
import Layout from "./components/Layout";

import { emitinfo } from "config/emitter";
import { Icon } from "components";
import DragData from "./components/utils";

import { observer } from "mobx-react";

const LowCode = observer(() => {
  const dragData = new DragData();

  const controlRef = useRef<HTMLDivElement>(null);
  const attributeRef = useRef<HTMLDivElement>(null);
  const draggableRef = useRef<HTMLDivElement>(null);
  const contextmenuRef = useRef<HTMLDivElement>(null);
  const selectorsRef = useRef({ current: null, prev: null });

  const [schema, setSchema] = useState<AnyProps[]>([]);

  const [canvasLeft, setCanvasLeft] = useState(50);
  const [canvasTop, setCanvasTop] = useState(50);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  const [currentAttribute, setCurrentAttribute] = useState<AnyProps>({});
  const [visible, setVisible] = useState(false);
  const [zoom, setZoom] = useState(0);
  const [position, setPosition] = useState({ left: 0, top: 0 });

  const onWheel = (event: WheelEvent<HTMLDivElement>) => {
    /**
     * 控制放大缩小
     */
    if (event.ctrlKey && !event.altKey) {
      let val = 0;
      const rate = 0.01;

      if (event.nativeEvent.deltaY < 0) {
        val = zoom + rate;

        val = val > 1 ? 1 : val;
      }

      if (event.nativeEvent.deltaY > 0 && zoom > 0.2) {
        val = zoom - rate;
      }

      val && setZoom(val);
    }

    /**
     * 控制左右
     */
    if (!event.ctrlKey && event.altKey) {
      let val = 50;

      if (event.nativeEvent.deltaY < 0) {
        val = canvasLeft - 1;
      }

      if (event.nativeEvent.deltaY > 0) {
        val = canvasLeft + 1;
      }
      setCanvasLeft(val);
    }

    /**
     * 控制上下
     */
    if (event.ctrlKey && event.altKey) {
      let val = 50;

      if (event.nativeEvent.deltaY < 0) {
        val = canvasTop - 1;
      }

      if (event.nativeEvent.deltaY > 0) {
        val = canvasTop + 1;
      }

      setCanvasTop(val);
    }
  };

  const onInitDraggableContainer = (width: number, height: number) => {
    const { offsetWidth: controlWidth, offsetHeight: controlHeight } = controlRef.current;
    const { offsetWidth: attributeWidth, offsetHeight: attributeHeight } = attributeRef.current;

    const { offsetWidth: draggableWidth, offsetHeight: draggableHeight } = draggableRef.current;

    let value = "0";

    if (draggableWidth < width) {
      value = ((draggableWidth - (controlWidth + attributeWidth) - 100) / width).toFixed(2);
    } else if (draggableHeight < height) {
      value = ((controlHeight + attributeHeight - draggableHeight - 100) / height).toFixed(2);
    } else {
      value = "1";
    }

    setZoom(parseFloat(value));
    setCanvasSize({ width, height });
  };

  /**
   * @brief 添加选择边框或去除选择边框
   * @param {boolean} isClear
   * @returns void
   */
  const onClassNameOperation = (isClear?: boolean) => {
    const selectors = selectorsRef.current;

    setCurrentAttribute(selectors.current);

    if (selectors.prev) {
      document.querySelector(`.target-${selectors.prev.id}`).classList.remove("before:!border-purple-600");

      if (isClear) {
        selectors.current = selectors.prev = null;
        setCurrentAttribute({});

        return;
      }
    }

    if (!selectors.current) return;

    document.querySelector(`.target-${selectors.current.id}`).classList.add("before:!border-purple-600");

    selectors.prev = selectors.current;
  };

  const onDisabledWheel = (e: MouseEvent) => {
    const event = e || (window.event as MouseEvent);

    event.ctrlKey && event.preventDefault();
  };

  const onDisabledContextmenu = (event: MouseEvent) => {
    // event.preventDefault();

    onClassNameOperation(true);
  };
  /* ******************************* */

  const onContextMenu = (value: ContextMenuProps) => {
    selectorsRef.current.current = value.data;

    onClassNameOperation();

    setVisible(true);
    setPosition({
      left: value.event.pageX + 10,
      top: value.event.pageY - 10
    });
  };

  /**
   * @brief 设置选中的拖动控件
   * @param {AnyProps} data
   */
  const onSelected = (data: AnyProps) => {
    const selectort = selectorsRef.current;
    selectort.current = data;

    onClassNameOperation();

    setVisible(false);
  };

  const onKeyDown = (value: KeyboardEvent) => {
    if (value.code === "Delete" || value.code === "Backspace") {
      onMenuDelete();
    }
  };

  const onMenuDelete = () => {
    const selectors = selectorsRef.current;

    setSchema(schema => {
      return dragData.remove(selectors.current, schema);
    });

    selectors.current = selectors.prev = null;
    setCurrentAttribute({});
  };

  const onClearSelected = () => {
    if (selectorsRef.current.current) onClassNameOperation(true);
  };

  const onAttrChange = useMemo(() => {
    return (val: AnyProps) => {
      setCurrentAttribute(val);

      setSchema(schema => dragData.modify(val, schema));
    };
  }, []);

  const onChange = (val: AnyProps[]) => {
    setSchema(val);
  };

  useEffect(() => {
    onInitDraggableContainer(960, 800);

    const events = [
      /**
       * @brief 禁止 ctr + wheel 事件放大缩小页面
       */
      {
        name: "mousewheel",
        function: onDisabledWheel,
        options: { passive: false }
      },
      /**
       * @brief 禁止右键菜单
       */
      { name: "contextmenu", function: onDisabledContextmenu, options: false },
      /**
       * @brief 监听删除按钮
       */
      { name: "keydown", function: onKeyDown, options: false, isEmit: false },
      {
        name: "click",
        function: (e: MouseEvent) => {
          e.stopPropagation();

          setVisible(false);

          // if (selectorsRef.current.current) onClassNameOperation(true);
        },
        options: false
      }
    ];

    events.forEach(item => {
      document.addEventListener(item.name, item.function, item.options);
    });

    return () => {
      events.forEach(item => {
        document.removeEventListener(item.name, item.function);
      });
    };
  }, []);

  return (
    <Layout>
      <DndProvider backend={HTML5Backend}>
        {/* <Container /> */}
        {/* <div className="h-20 relative z-10">
              {themeStore.count}
              <Button className="" onClick={() => themeStore.addCount()}>
                Default Button
              </Button>
            </div> */}

        <section className="relative flex h-full overflow-hidden">
          {/* 控件区 */}
          <ControlArea ref={controlRef} className="bg-gray-1000 pr-5 shadow-lg dark:bg-purple-1000" />

          {/* 拖拽区 */}
          <div ref={draggableRef} className="bg-container relative w-full" onWheel={onWheel} onClick={onClearSelected}>
            <DesignArea
              schema={schema}
              style={{
                width: `${canvasSize.width}px`,
                height: `${canvasSize.height}px`,
                left: `${canvasLeft}%`,
                top: `${canvasTop}%`,
                transform: `scale(${zoom}) translate(-50%, -50%)`,
                transformOrigin: "0 0"
              }}
              className="absolute bg-white p-5 transition-all duration-150 ease-linear"
              onContextMenu={onContextMenu}
              onSelected={onSelected}
              onClicked={onClearSelected}
              onChanged={onChange}
            />

            {visible && (
              <section
                ref={contextmenuRef}
                className="fixed z-50 w-36 overflow-hidden rounded-md shadow-md"
                style={{ left: `${position.left}px`, top: `${position.top}px` }}
              >
                {/* <Menu className="w-32" selectable={false} items={items} /> */}
                <div
                  className="flex h-10 cursor-pointer items-center bg-gray-1000 px-3 transition ease-linear hover:bg-red-50 dark:bg-purple-1000 dark:hover:bg-purple-1300"
                  onClick={onMenuDelete}
                >
                  <Icon name="trash" className="h-5 w-5 text-gray-1200 dark:text-purple-1200" />
                  <span className="inline-block w-full rounded px-2 py-1 text-sm font-semibold tracking-widest text-red-600 dark:text-purple-1200">删除</span>
                </div>
                {/* <div className="cursor-pointer flex items-center px-4 h-10 bg-gray-1000">
                <span className="text-red-600  text-sm font-semibold tracking-widest">
                  删 除
                </span>
              </div> */}
              </section>
            )}
          </div>

          <AttributeArea ref={attributeRef} attrs={currentAttribute} callback={onAttrChange} className="bg-gray-1000 shadow-lg dark:bg-purple-1000" />
        </section>
      </DndProvider>
    </Layout>
  );
});

export default memo(LowCode);
