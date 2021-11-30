import React from 'react';
import { BigText, Content, SmallText } from './styles';
import Triangle from '../../images/Triangle.svg';
import { gsap } from 'gsap';
import Button from '../Button/Button';

export default function MainText() {
  const timeLine = gsap.timeline();
  return (
    <Content>
      <BigText timeLine={timeLine}>Hello!</BigText>
      <SmallText timeLine={timeLine}>
        my name is <b>Jimmy Lam</b> and i’m a software engineer
      </SmallText>
      <Button timeLine={timeLine} />
      <Triangle></Triangle>
    </Content>
  );
}
