import { css } from '@emotion/react';
import { FC, ReactElement } from 'react';

interface Props {
  children: ReactElement;
  width: number;
  height: number;
}

const GridItem: FC<Props> = (props) => {
  const { children, width, height } = props;
  return (
    <div
      style={{ width, height }}
      css={css`
        display: flex;
        > * {
          flex: 1;
        }
      `}
    >
      {children}
    </div>
  );
};

export default GridItem;
