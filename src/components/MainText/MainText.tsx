import React from 'react';
import { BigText, Content, SmallText } from './styles';
import Arrow from '../../images/Arrow.svg';
import { gsap } from 'gsap';

export default function MainText() {
  const timeLine = gsap.timeline();
  return (
    <Content>
      <BigText timeLine={timeLine}>Hello!</BigText>
      <SmallText timeLine={timeLine}>
        my name is <b>Jimmy Lam</b> and i’m a software engineer
      </SmallText>
      <Arrow></Arrow>
    </Content>
  );
}
