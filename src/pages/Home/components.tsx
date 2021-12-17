import { useAnimation, Variants } from 'framer-motion';
import React, { useEffect } from 'react';
import Moon from '../../images/Moon.svg';
import Polka from '../../images/Polka.svg';
import Waves from '../../images/Waves.svg';
import { Background, MoonDiv, WavesDiv, PolkaDiv } from './styles';

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

export const Icons = ({ timeLine }: { timeLine: Promise<any> }) => {
  const iconsControl = useAnimation();

  const temp = async () => {
    await timeLine;
    return iconsControl.start('show');
  };

  useEffect(() => {
    temp();
  }, []);

  return (
    <Background
      variants={container}
      initial="hidden"
      animate={iconsControl}
      exit="exit"
    >
      <MoonDiv variants={item}>
        <Moon />
      </MoonDiv>
      <WavesDiv variants={item}>
        <Waves />
      </WavesDiv>
      <PolkaDiv>
        <Polka />
      </PolkaDiv>
    </Background>
  );
};
