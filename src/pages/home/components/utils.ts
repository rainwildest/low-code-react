import update from "immutability-helper";
import { tagsPosition } from "./ItemTypes";
import _ from "lodash";
import { UUID } from "../../../utils";
// import { v4 as uuid } from "uuid";

const uuid = UUID();

type DragDataHandleProps = {
  hover?: AnyProps;
  original?: AnyProps | null;
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
    let $data: AnyProps[] | null = null;
    this.hover = data?.hover || {};
    this.schema = data.schema;

    this.displacement = data.__positionType__ === tagsPosition.downOutside ? 1 : 0;

    this.__haveMoved__ = data?.__haveMoved__ || false;

    let $index = null;
    let $target = null;

    switch (data.__positionType__) {
      case tagsPosition.inside:
        {
          if (data.original?.id === data.hover?.id) return ($data = data.schema);

          if (data?.__haveMoved__) {
            this.schema = this.removeOriginal(data?.original || {}, this.schema);
          }

          const { data: target, index } = this.inside(
            data.target,
            this.schema,
            data.target?.__positions__ || []
          );

          $index = index;
          $target = target;
        }
        break;
      case tagsPosition.upOutside:
      case tagsPosition.downOutside:
        {
          if (data.hover?.id === data.target.id) return ($data = data.schema);

          if (data?.__haveMoved__) {
            this.schema = this.removeOriginal(data.target, this.schema);
          }

          const { data: target, index } = this.outside(data.target, this.schema, data?.hover?.__positions__);

          $index = index;
          $target = target;
        }
        break;
    }

    if ($index !== null && $index !== undefined && $target) {
      $data = update(this.schema, { $splice: [[$index, 1, $target[$index]]] });
    } else {
      $data = $target;
    }

    return $data;
  }

  addingData(item: AnyProps, schema: Array<AnyProps>) {
    const $uuid = uuid();
    let $schema = schema;

    if (item.__positions__ === null) return schema;
    if (item.__positions__) $schema = this.removeOriginal(item, schema);

    const $item = { ...item, id: item?.id ? item.id : $uuid, __positions__: null };

    const data = update($schema, {
      $push: [$item.id ? this.modifyTargetPosition($item, null) : $item]
    });

    return data;
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
  private removeOriginal(target: AnyProps, original: Array<AnyProps>) {
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
  private modifyTargetPosition(target: AnyProps, positions: Array<string> | null) {
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

  private inside(target: AnyProps, original: Array<AnyProps>, positions: Array<string>) {
    let $original = _.cloneDeep(original);
    let $index: number | null = null;

    /* 适用于块级标签的内嵌 */
    if (positions?.length) {
      const index = $original.findIndex(item => item.id === positions[0]);

      if (!~index) return { data: null, index: null };

      $index = index;

      const subIndex = $original[index].children.findIndex((item: AnyProps) => item.id === target.id);

      const childrenId = $original[index].children[subIndex]?.id;

      /* 对比子集 id 与 新增数据的 id 是否一致 不一致则继续查找 */
      if (childrenId !== target.id) {
        const { data: $data } = this.inside(
          target,
          $original[index].children,
          update(positions, {
            $splice: [[0, 1]]
          })
        );

        $original[index] = { ...$original[index], children: $data };

        return { data: $original, index };
      }

      /* 查找子集中与新增数据的 id 相同的数据  */
      const sub = $original[index].children.map((item: AnyProps) => {
        if (item.id !== target.id) return item;

        const $item = this.__haveMoved__
          ? this.modifyTargetPosition(_.cloneDeep(target), this.hover?.__positions__)
          : target;

        return $item;
      });

      $original[index] = { ...$original[index], children: sub };
    } else {
      /* 当前 hover 的对象已经是顶层 */
      const index = $original.findIndex(item => item.id === target.id);

      if (~index) {
        const $target = this.__haveMoved__
          ? this.modifyTargetPosition(_.cloneDeep(target), this.hover?.__positions__)
          : target;

        $original = update($original, { $splice: [[index, 1, $target]] });
      }
    }

    return { data: $original, index: $index };
  }
}

export default DragData;
