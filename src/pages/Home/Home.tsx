import React, { MutableRefObject } from 'react';
import { forwardRef } from 'react';
import MainText from '../../components/MainText/MainText';
import Navbar from '../../components/Navbar';
import { Content } from './styles';

const HomePage = forwardRef(
  ({ ref, props }: { ref: React.MutableRefObject<HTMLElement>; props: {} }) => {
    return (
      <Content className="page" ref={ref}>
        <Navbar />
        <MainText />
      </Content>
    );
  },
);

export default HomePage;
