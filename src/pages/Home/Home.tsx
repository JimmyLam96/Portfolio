import React, { useEffect } from 'react';
import { forwardRef } from 'react';
import Left from './LeftContent/LeftContent';
import Navbar from '../../components/Navbar/Navbar';
import { BG, Content, MainContainer, InnerContent } from './styles';
import Triangle from '../../images/Triangle.svg';
import { useAnimation, useMotionValue } from 'framer-motion';
import Right from './RightContent/RightContent';

const HomePage = forwardRef(
  ({ ref }: { ref: React.MutableRefObject<HTMLElement> }) => {
    const handControls = useAnimation();
    const iconControls = useAnimation();
    const borderControls = useAnimation();

    //start of the animation sequence returns a promise
    //we await the promise in the icons component to have sequenced animation

    const runSyncAnimations = async () => {
      await handControls.start('hover');
      return await iconControls.start('show');
    };

    //as soon as we load into the page run previous animations
    useEffect(() => {
      runSyncAnimations();
    }, []);

    return (
      <Content className="page" ref={ref}>
        <MainContainer>
          <Navbar />
          <InnerContent>
            <Left handControls={handControls} iconControls={iconControls} />
            <Right
              borderControls={borderControls}
              iconControls={iconControls}
            />
          </InnerContent>
          <Triangle style={{ display: 'flex', alignSelf: 'center' }} />
        </MainContainer>
        <BG />
      </Content>
    );
  },
);

export default HomePage;
