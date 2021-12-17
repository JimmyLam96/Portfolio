import { useAnimation, Variants } from 'framer-motion';
import React, { useEffect } from 'react';
import Moon from '../../images/Moon.svg';
import Polka from '../../images/Polka.svg';
import Waves from '../../images/Waves.svg';
import Circle from '../../images/Circle.svg';
import { Background, MoonDiv, WavesDiv, PolkaDiv, CircleDiv } from './styles';

const container: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const IconVariants = {
  hidden: { opacity: 0, y: 500 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      type: 'spring',
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

export const Icons = ({ timeLine }: { timeLine: Promise<any> }) => {
  const iconsControl = useAnimation();

  //async function that makes sure all the animtions before this page are run before this page's animations are run
  const runPreviousAnimations = async () => {
    await timeLine;
    return iconsControl.start('show');
  };

  //as soon as we load into the page run previous animations
  useEffect(() => {
    runPreviousAnimations();
  }, []);

  return (
    <Background
      variants={container}
      initial="hidden"
      animate={iconsControl}
      exit="exit"
    >
      <MoonDiv variants={IconVariants}>
        <Moon />
      </MoonDiv>
      <WavesDiv variants={IconVariants}>
        <Waves />
      </WavesDiv>
      <CircleDiv variants={IconVariants}>
        <Circle />
      </CircleDiv>
      <PolkaDiv>
        <Polka />
      </PolkaDiv>
    </Background>
  );
};
