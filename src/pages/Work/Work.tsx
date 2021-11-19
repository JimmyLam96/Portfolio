import React, { forwardRef } from 'react';
import { Content } from './styles';

const Work = forwardRef(
  ({ ref, props }: { ref: React.MutableRefObject<HTMLElement>; props: {} }) => {
    return (
      <Content className="page" ref={ref}>
        <span>test</span>
      </Content>
    );
  },
);

export default Work;
