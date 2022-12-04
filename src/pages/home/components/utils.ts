import update from "immutability-helper";
import { tagsPosition } from "./ItemTypes";
import _ from "lodash";

type DragDataHandleProps = {
  hover?: AnyProps;
  target: AnyProps;
  schema: Array<AnyProps>;

  __haveMoved__?: boolean;
  __positionType__: string;
  __positions__?: Array<string>;
};

class DragData {
  hover: AnyProps = {};

  handle(data: DragDataHandleProps) {
    let $data: AnyProps = { data: null, index: null };
    this.hover = data?.hover || {};

    switch (data.__positionType__) {
      case tagsPosition.upOutside:
        $data = this.#upOutside(data.target, data.schema, data?.hover?.__positions__ || []);

        break;
      case tagsPosition.inside:
        $data = this.#inside(data.target, data.schema, data.target?.__positions__ || []);
        break;
      case tagsPosition.downOutside:
        $data = this.#downOutside(data.target, data.schema, data?.hover?.__positions__ || []);
        break;
    }

    return $data;
  }

  #upOutside(target: AnyProps, original: Array<AnyProps>, positions: Array<string>) {
    let $original = _.cloneDeep(original);
    let $index: number | null = null;

    if (this.hover?.__positions__) {
      /* 当前 hover 的对象是有父级 */
      const index = $original.findIndex(item => item.id === positions[0]);
      $index = index;

      if (!~index) return { data: null, index: null };

      const subIndex = $original[index].children.findIndex((item: AnyProps) => item.id === this.hover.id);

      const childrenId = $original[index].children[subIndex]?.id;

      if (childrenId !== this.hover.id) {
        const { data } = this.#upOutside(target, $original[index].children, update(positions, { $splice: [[0, 1]] }));

        $original[index] = { ...$original[index], children: data };
      }

      if (~subIndex) {
        const $children = $original[index].children;
        $original[index].children = update($children, {
          $splice: [[subIndex, 0, { ...target, __positions__: this.hover?.__positions__ }]]
        });
      }
    } else {
      /* 当前 hover 的对象已经是顶层 */
      const index = $original.findIndex(item => item.id === this.hover.id);

      if (~index) {
        $original = update($original, { $splice: [[index, 0, target]] });
      }
    }

    return { data: $original, index: $index };
  }

  #inside(data: AnyProps, original: Array<AnyProps>, positions: Array<string>) {
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

  #downOutside(target: AnyProps, original: Array<AnyProps>, positions: Array<string>) {
    console.log("downOutside");
    let $original = _.cloneDeep(original);
    let $index: number | null = null;

    if (this.hover?.__positions__) {
      /* 当前 hover 的对象是有父级 */
      const index = $original.findIndex(item => item.id === positions[0]);
      $index = index;

      if (!~index) return { data: null, index: null };

      const subIndex = $original[index].children.findIndex((item: AnyProps) => item.id === this.hover.id);

      const childrenId = $original[index].children[subIndex]?.id;

      // NOTE: 这里逻辑还有问题
      if (childrenId !== this.hover.id) {
        const { data } = this.#downOutside(target, $original[index].children, update(positions, { $splice: [[0, 1]] }));

        $original[index] = { ...$original[index], children: data };
      }

      if (~subIndex) {
        const $children = $original[index].children;

        $original[index].children = update($children, {
          $splice: [[subIndex + 1, 0, { ...target, __positions__: this.hover?.__positions__ }]]
        });
      }
    } else {
      /* 当前 hover 的对象已经是顶层 */
      const index = $original.findIndex(item => item.id === this.hover.id);

      if (~index) {
        $original = update($original, { $splice: [[index + 1, 0, target]] });
        console.log("kkk");
      }
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
