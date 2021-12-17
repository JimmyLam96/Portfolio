import React from 'react';
import { Content, H2, EmojiContainer } from './styles';
import Button from '../Button/Button';
import WaveEmoji from '../../images/WaveEmoji.svg';
import { AnimationControls, motion } from 'framer-motion';

export default function MainText({
  controls,
}: {
  controls: AnimationControls;
}) {
  return (
    <Content>
      <EmojiContainer animate={controls}>
        <WaveEmoji />
      </EmojiContainer>
      <H2>
        <b>oh hi there!</b> my name is <b>Jimmy Lam</b> <br /> and i’m a
        software engineer
      </H2>

      <Button />
    </Content>
  );
}
