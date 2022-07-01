import { css } from '@emotion/react';
import { Children, FC, ReactElement, useMemo } from 'react';
import GridItem from './GridItem';

interface Props {
  children: Array<ReactElement> | ReactElement;
  // 子元素布局，用key对应
  layout: Array<Layout>;
  // 每行的列数
  cols: number;
  // 每行高度
  rowHeight: number;
  // 容器宽度
  width: number;
}

const getFullLayout = (
  layout: Array<Layout>,
  children: Array<ReactElement> | ReactElement
) => {
  const childKeys = Children.map(children, (child) => child.key);
  const layoutKeyMap: { [key: string]: Layout } = layout.reduce(
    (pre, cur) => ({ ...pre, [cur.key]: cur }),
    {}
  );
  const otherKeys: Array<string | number> = childKeys.filter(
    (key) => !(key in layoutKeyMap)
  );
  otherKeys.forEach((key) => {
    layoutKeyMap[`${key}`] = { key: `${key}`, w: 1, h: 1 };
  });
  return layoutKeyMap;
};

const AnimationGrid: FC<Props> = (props) => {
  const { children, width, cols, layout, rowHeight, ...others } = props;
  const colWidth = useMemo(() => width / cols, [width, cols]);
  const fullLayout = getFullLayout(layout, children);
  return (
    <div
      css={css`
        width: ${width}px;
      `}
      {...others}
    >
      {Children.map(children, (child) => (
        <GridItem
          key={child.key}
          width={fullLayout[`${child.key}`].w * colWidth}
          height={fullLayout[`${child.key}`].h * rowHeight}
        >
          {child}
        </GridItem>
      ))}
    </div>
  );
};

export default AnimationGrid;
