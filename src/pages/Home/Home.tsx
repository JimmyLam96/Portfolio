import React from 'react';
import { forwardRef } from 'react';
import MainText from '../../components/MainText/MainText';
import Navbar from '../../components/Navbar/Navbar';
import { BG, Content, MainContainer } from './styles';
import Triangle from '../../images/Triangle.svg';
import { Icons } from './components';

const HomePage = forwardRef(
  ({ ref }: { ref: React.MutableRefObject<HTMLElement> }) => {
    return (
      <Content className="page" ref={ref}>
        <MainContainer>
          <Navbar />
          <MainText />
          <Triangle style={{ display: 'flex', alignSelf: 'center' }} />
        </MainContainer>
        <Icons />
        <BG />
      </Content>
    );
  },
);

export default HomePage;
