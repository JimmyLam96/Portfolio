import React from 'react';
import { Content, SmallText } from './styles';
import { gsap } from 'gsap';
import Button from '../Button/Button';
import WaveEmoji from '../../images/WaveEmoji.svg';

export default function MainText() {
  const timeLine = gsap.timeline();
  return (
    <Content>
      <WaveEmoji />
      <SmallText timeLine={timeLine}>
        <b>oh hi there!</b> my name is <b>Jimmy Lam</b> <br /> and i’m a
        software engineer
      </SmallText>
      <Button />
    </Content>
  );
}
