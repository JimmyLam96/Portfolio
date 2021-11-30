import React, { useEffect, useRef, useState } from 'react';
import { Content, Text } from './styles';
import Arrow from '../../images/Arrow.svg';
import { gsap } from 'gsap';

export default function Button({ timeLine }: { timeLine: gsap.core.Timeline }) {
  const [hover, setHover] = useState<boolean>(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    timeLine.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        // duration: 0.1,
        y: -25,
      },
      {
        opacity: 1,
        // duration: 0.1,
        y: 0,
      },
    );
  }, []);

  return (
    <Content ref={buttonRef}>
      <Text>download resume</Text>
      <Arrow />
    </Content>
  );
}
