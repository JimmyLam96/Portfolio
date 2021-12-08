import React, { useEffect, useRef, useState } from 'react';
import { Content, Text } from './styles';
import Arrow from '../../images/Arrow.svg';
import { gsap } from 'gsap';

export default function Button() {
  return (
    <Content>
      <Text>download resume</Text>
      <Arrow />
    </Content>
  );
}
