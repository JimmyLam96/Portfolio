import { AnimationControls } from 'framer-motion';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  Profile,
  DefaultBorder,
  Background,
  MoonDiv,
  WavesDiv,
} from './styles';
import Moon from '../../../images/SVG/Moon.svg';
import Waves from '../../../images/SVG/Waves.svg';
import { SpringAnimation } from '../../../config/DefaultVariants';

const BorderVariants = {
  initial: {
    x: 20,
    y: 20,
  },
  hover: {
    x: 30,
    y: 30,
  },
};

const container = {
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
    y: 0,
    ...SpringAnimation,
  },
};

export default function Right({
  borderControls,
  iconControls,
}: {
  borderControls: AnimationControls;
  iconControls: AnimationControls;
}) {
  return (
    <Profile
      onHoverStart={() => {
        borderControls.start(BorderVariants.hover);
      }}
      onHoverEnd={() => {
        borderControls.start(BorderVariants.initial);
      }}
    >
      <StaticImage
        src="../../../images/PNG/photo.png"
        alt="profile picture"
        style={{ borderRadius: '25px', width: '300px', height: 'auto' }}
      />
      <DefaultBorder
        initial="initial"
        variants={BorderVariants}
        animate={borderControls}
      />

      <Background
        variants={container}
        initial="hidden"
        animate={iconControls}
        exit="exit"
      >
        <MoonDiv variants={IconVariants}>
          <Moon />
        </MoonDiv>
        <WavesDiv variants={IconVariants}>
          <Waves />
        </WavesDiv>
      </Background>
    </Profile>
  );
}
