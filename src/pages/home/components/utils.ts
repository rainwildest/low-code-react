import update from "immutability-helper";
import { tagsPosition } from "./ItemTypes";
import _ from "lodash";

type DragDataHandleProps = {
  hover?: AnyProps;
  target: AnyProps;
  schema: Array<AnyProps>;

  __positionType__: string;
  __haveMoved__?: boolean;
  __positions__?: Array<string>;
};

class DragData {
  private hover: AnyProps = {};
  private schema: Array<AnyProps> = [];
  private __haveMoved__ = false;
  private displacement = 0;

  handle(data: DragDataHandleProps) {
    let $data: AnyProps = { data: null, index: null };
    this.hover = data?.hover || {};
    this.schema = data.schema;

    this.displacement = data.__positionType__ === tagsPosition.downOutside ? 1 : 0;

    this.__haveMoved__ = data?.__haveMoved__ || false;

    switch (data.__positionType__) {
      case tagsPosition.inside:
        $data = this.inside(data.target, data.schema, data.target?.__positions__ || []);
        break;
      case tagsPosition.upOutside:
      case tagsPosition.downOutside:
        {
          if (data.hover?.id === data.target.id) return ($data = { data: data.schema, index: null });

          if (data?.__haveMoved__) {
            this.schema = this.removeOriginal(data.target, this.schema);
          }

          // this.downOutside
          $data = this.outside(data.target, this.schema, data?.hover?.__positions__);

          if ($data.index !== null && $data.index !== undefined) {
            $data.data = update(this.schema, { $splice: [[$data.index, 1, $data.data[$data.index]]] });
          } else {
            $data.data;
          }
        }
        break;

      // case tagsPosition.downOutside:
      //   {
      //     if (data.hover?.id === data.target.id) return ($data = { data: data.schema, index: null });

      //     if (data?.__haveMoved__) {
      //       this.schema = this.removeOriginal(data.target, this.schema);
      //     }

      //     $data = this.downOutside(data.target, this.schema, data?.hover?.__positions__);

      //     if ($data.index !== null && $data.index !== undefined) {
      //       $data.data = update(this.schema, { $splice: [[$data.index, 1, $data.data[$data.index]]] });
      //     } else {
      //       $data.data;
      //     }
      //   }
      //   break;
    }

    return $data;
  }

  private outside(target: AnyProps, original: Array<AnyProps>, positions: Array<string>) {
    let $original = _.cloneDeep(original);
    let $index: number | null = null;

    if (this.hover?.__positions__ && !this.__haveMoved__) {
      /* 当前 hover 的对象是有父级 */
      const index = $original.findIndex(item => item.id === positions[0]);
      $index = index;

      if (!~index) return { data: null, index: null };

      const $children = $original[index].children;
      const subIndex = $children.findIndex((item: AnyProps) => item.id === this.hover.id);

      const childrenId = $children[subIndex]?.id;

      if (childrenId !== this.hover.id) {
        const { data } = this.outside(target, $children, update(positions, { $splice: [[0, 1]] }));

        $original[index] = { ...$original[index], children: data };

        return { data: $original, index };
      }

      $original[index].children = update($children, {
        $splice: [[subIndex + this.displacement, 0, { ...target, __positions__: this.hover?.__positions__ }]]
      });
    } else if (this.__haveMoved__) {
      if (!this.hover?.__positions__) {
        /* 说明是在父级 */
        const index = $original.findIndex(item => item.id === this.hover.id);

        if (~index) {
          $original = update($original, {
            $splice: [[index + this.displacement, 0, this.modifyTargetPosition(_.cloneDeep(target), null)]]
          });
        }

        return { data: $original, index: $index };
      }

      /* 当前 hover 的对象是有父级 */
      const index = $original.findIndex(item => item.id === positions[0]);
      $index = index;

      if (!~index) return { data: null, index: null };

      const $children = $original[index].children;
      const subIndex = $children.findIndex((item: AnyProps) => item.id === this.hover.id);

      if ($children[subIndex]?.id !== this.hover.id) {
        const { data } = this.outside(
          target,
          $original[index].children,
          update(positions, { $splice: [[0, 1]] })
        );

        $original[index] = { ...$original[index], children: data };

        return { data: $original, index };
      }

      // 将需要移动的数据插入到指定的位置
      $original[index].children = update($children, {
        $splice: [
          [
            subIndex + this.displacement,
            0,
            this.modifyTargetPosition(_.cloneDeep(target), this.hover?.__positions__)
          ]
        ]
      });
    } else {
      /* 当前 hover 的对象已经是顶层 */
      const index = $original.findIndex(item => item.id === this.hover.id);

      if (~index) {
        $original = update($original, {
          $splice: [[index + this.displacement, 0, { ...target, __positions__: null }]]
        });
      }
    }

    return { data: $original, index: $index };
  }

  /**
   * 将需要移动的数据从原数组删除
   * @param {AnyProps} target 需要删除的对象
   * @param {Array<AnyProps>} original 原始数组
   * @returns Array
   */
  removeOriginal(target: AnyProps, original: Array<AnyProps>) {
    const positions = target.__positions__;

    if (positions) {
      const index = original.findIndex(item => item.id === positions[0]);
      const $children = original[index].children;
      const subIndex = $children.findIndex((item: AnyProps) => item.id === target.id);

      if (!~subIndex) {
        original[index].children = this.removeOriginal(
          { ...target, __positions__: update(target.__positions__, { $splice: [[0, 1]] }) },
          $children
        );
      } else {
        original[index].children = update($children, { $splice: [[subIndex, 1]] });
      }
    } else {
      /* 没有 position 则表示已经是顶层元素*/
      const index = original.findIndex(item => item.id === target.id);
      original = update(original, { $splice: [[index, 1]] });
    }

    return original;
  }

  /**
   * 将需要移动的数据内的 children 中的 __positions__ 修改
   * @param target
   * @returns
   */
  modifyTargetPosition(target: AnyProps, positions: Array<string> | null) {
    target = { ...target, __positions__: positions };

    if (target?.children) {
      target.children = target.children.map((item: AnyProps) => {
        if (item.children) {
          item = this.modifyTargetPosition(item, [...(positions || []), target.id]);
        }

        return {
          ...item,
          __positions__: [...(positions || []), target.id]
        };
      });
    }

    return target;
  }

  private inside(data: AnyProps, original: Array<AnyProps>, positions: Array<string>) {
    const $original = _.cloneDeep(original);
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
        const { data: $data } = this.inside(
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
}

export default DragData;

export const UUID =
  (prefix = 0, i = 0) =>
  (): string => {
    const $prefix = `${prefix}`.padEnd(8, "0");
    const suffix = `${++i}`.padStart(12, "0");

    return `${$prefix}-0000-0000-0000-${suffix}`;
  };
