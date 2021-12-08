import React from 'react';
import { BigText, Content, SmallText } from './styles';
import { gsap } from 'gsap';
import Button from '../Button/Button';

export default function MainText() {
  const timeLine = gsap.timeline();
  return (
    <Content>
      <BigText timeLine={timeLine}>Hello!</BigText>
      <SmallText timeLine={timeLine}>
        <b>oh hi there!</b> my name is <b>Jimmy Lam</b> <br /> and i’m a
        software engineer
      </SmallText>
      <Button />
    </Content>
  );
}
