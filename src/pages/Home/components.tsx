import { Variants } from 'framer-motion';
import React, { useEffect } from 'react';
import Moon from '../../images/Moon.svg';
import Polka from '../../images/Polka.svg';
import Waves from '../../images/Waves.svg';
import { Background, MoonDiv, WavesDiv, PolkaDiv } from './styles';

export const Icons = () => {
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

  const item = {
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

  return (
    <Background
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <MoonDiv
        variants={item}
        drag
        dragConstraints={{ top: -5, left: -5, right: 5, bottom: 5 }}
      >
        <Moon />
      </MoonDiv>
      <WavesDiv
        variants={item}
        drag
        dragConstraints={{ top: -5, left: -5, right: 5, bottom: 5 }}
      >
        <Waves />
      </WavesDiv>
      <PolkaDiv>
        <Polka />
      </PolkaDiv>
    </Background>
  );
};
