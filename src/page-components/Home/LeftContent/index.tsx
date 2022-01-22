import React from 'react';
import {
  Content,
  H2,
  EmojiContainer,
  IconContainer,
  CircleContainer,
} from './styles';
import DefaultButton from '../../../components/DefaultButton';
import { AnimationControls } from 'framer-motion';
import WaveEmoji from '../../../images/SVG/WaveEmoji.svg';
import Circle from '../../../images/SVG/Circle.svg';
import { EmojiVariants, CircleVariants } from './animations';

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
          onScroll={() => iconControls.start('scroll')}
          variants={CircleVariants}
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
      <DefaultButton href="Curriculum Vitae 2022.pdf">
        download resume
      </DefaultButton>
    </Content>
  );
}
