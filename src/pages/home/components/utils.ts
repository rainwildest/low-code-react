import update from "immutability-helper";
import { tagsPosition } from "./ItemTypes";

type DragDataHandleProps = {
  hover?: AnyProps;
  target: AnyProps;
  schema: Array<AnyProps>;

  __haveMoved__?: boolean;
  __positionType__: string;
  __positions__?: Array<string>;
};

class DragData {
  handle(data: DragDataHandleProps) {
    let $data: AnyProps = { data: null, index: null };

    switch (data.__positionType__) {
      case tagsPosition.upOutside:
        $data = this.#upOutside(data.target, data.schema, data?.hover);
        break;
      case tagsPosition.inside:
        $data = this.#inside(data.target, data.schema, data.target?.__positions__ || []);
        break;
      case tagsPosition.downOutside:
        this.#downOutside();
        break;
    }

    return $data;
  }

  #upOutside(target: AnyProps, original: Array<AnyProps>, hover: AnyProps = {}) {
    console.log("upOutside", target, original, hover);
    let $original = [...original];
    const $index: number | null = null;

    if (hover?.__positions__) {
      /* 当前 hover 的对象是有父级 */
      console.log("存在父级", hover.__positions__);
      const index = $original.findIndex(item => item.id === hover.__positions__[0]);

      // NOTE: 这里逻辑还有问题
      if (!~index) {
        console.log("没有找到");
        const { data } = this.#upOutside(target, $original[index].children, hover);
        console.log(data);
        $original[index] = data;
      }

      const subIndex = $original[index].children.findIndex((item: AnyProps) => item.id === hover.id);

      $original[index].children = update($original[index].children, {
        $splice: [[subIndex, 0, { ...target, __positions__: hover?.__positions__ }]]
      });
    } else {
      /* 当前 hover 的对象已经是顶层 */
      const index = $original.findIndex(item => item.id === hover.id);

      if (~index) {
        $original = update($original, { $splice: [[index, 0, target]] });
      }
    }
    return { data: $original, index: $index };
  }

  #inside(data: AnyProps, original: Array<AnyProps>, positions: Array<string>) {
    const $original = [...original];
    let $index: number | null = null;

    /* 适用于块级标签的内嵌 */
    if (positions.length) {
      const index = $original.findIndex(item => item.id === positions[0]);

      if (!~index) return { data: null, index: null };

      $index = index;

      const subIndex = $original[index].children.findIndex((item: AnyProps) => item.id === data.id);

      const childrenId = $original[index].children[subIndex]?.id;

      /* 对比子集 id 与 新增数据的 id 是否一致 不一致则继续查找 */
      if (childrenId !== data.id) {
        const { data: $data } = this.#inside(
          data,
          $original[index].children,
          update(positions, {
            $splice: [[0, 1]]
          })
        );

        $original[index] = { ...$original[index], children: $data };
      }

      /* 查找子集中与新增数据的 id 相同的数据  */
      const sub = $original[index].children.map((item: AnyProps) => {
        if (item.id !== data.id) return item;

        return data;
      });

      $original[index] = { ...$original[index], children: sub };
    }

    return { data: $original, index: $index };
  }

  #downOutside() {
    console.log("downOutside");
  }
}

export default DragData;
