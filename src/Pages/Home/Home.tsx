import { css } from '@emotion/react';
import React from 'react';
import AnimationGrid from '~/components/animation-grid';
import chroma from 'chroma-js';

const keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const layout = keys.map((k) => ({
  key: k,
  w: Math.floor(Math.random() * 2) + 1,
  h: Math.floor(Math.random() * 2) + 1,
}));
const eles = keys.map((k) => ({ key: k, color: chroma.random().css() }));
console.log(layout);

const Home = React.memo(() => {
  return (
    <div
      css={css`
        height: 100%;
        padding: 20vh;
      `}
    >
      <AnimationGrid cols={4} rowHeight={40} layout={layout} width={400}>
        {eles.map((ele, i) => (
          <div
            key={ele.key}
            css={css`
              background: ${ele.color};
            `}
          >
            <span>{`${ele.key}${i}`}</span>
          </div>
        ))}
      </AnimationGrid>
    </div>
  );
});

export default Home;
