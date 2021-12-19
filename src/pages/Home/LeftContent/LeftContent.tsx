import React from 'react';
import {
  Content,
  H2,
  EmojiContainer,
  IconContainer,
  CircleContainer,
} from './styles';
import Button from '../../../components/Button/Button';
import { AnimationControls } from 'framer-motion';
import WaveEmoji from '../../../images/WaveEmoji.svg';
import Circle from '../../../images/Circle.svg';

const EmojiVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
    rotate: [0, 15, -15, 15, -15, 0],
  },
};

const circleVariants = {
  hidden: { opacity: 0, y: 500 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 1.2,
      type: 'spring',
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

export default function Left({
  handControls,
  iconControls,
}: {
  handControls: AnimationControls;
  iconControls: AnimationControls;
}) {
  return (
    <Content>
      <IconContainer>
        <EmojiContainer
          whileHover="hover"
          variants={EmojiVariants}
          animate={handControls}
        >
          <WaveEmoji />
        </EmojiContainer>
        <CircleContainer
          initial="hidden"
          variants={circleVariants}
          animate={iconControls}
          exit="exit"
        >
          <Circle style={{ position: 'absolute', left: -50, top: -30 }} />
        </CircleContainer>
      </IconContainer>
      <H2>
        <b>oh hi there!</b> my name is <b>Jimmy Lam</b> <br /> and i’m a
        software engineer
      </H2>
      <Button />
    </Content>
  );
}