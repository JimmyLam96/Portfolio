import React, { MutableRefObject } from 'react';
import { forwardRef } from 'react';
import MainText from '../../components/MainText/MainText';
import Navbar from '../../components/Navbar/Navbar';
import { BG, Content, MainContainer } from './styles';
import HomePageBG from '../../images/HomePageBG.svg';

const HomePage = forwardRef(
  ({ ref, props }: { ref: React.MutableRefObject<HTMLElement>; props: {} }) => {
    return (
      <Content className="page" ref={ref}>
        <MainContainer>
          <Navbar />
          <MainText />
        </MainContainer>
        <BG />
      </Content>
    );
  },
);

export default HomePage;
