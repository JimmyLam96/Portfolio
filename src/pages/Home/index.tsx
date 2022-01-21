import React, { useEffect } from 'react';
import Left from './LeftContent';
import Navbar from '../../components/Navbar';
import { BG, Background, Content, InnerContent, Footer } from './styles';
import Triangle from '../../images/SVG/Triangle.svg';
import { useAnimation } from 'framer-motion';
import Right from './RightContent';

const HomePage = ({ id }: { id: string }) => {
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
    <Background id={id}>
      <Content>
        <Navbar />
        <InnerContent>
          <Left handControls={handControls} iconControls={iconControls} />
          <Right borderControls={borderControls} iconControls={iconControls} />
        </InnerContent>
        <Footer>
          <Triangle />
        </Footer>
      </Content>
      {/* <BG /> */}
    </Background>
  );
};

export default HomePage;
