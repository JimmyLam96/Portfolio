import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import { gsap } from 'gsap';

const H1 = styled.h1`
  font-family: Quicksand;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;
  margin: 10px 0;
`;

export const BigText = ({
  children,
  timeLine,
}: {
  children: any;
  timeLine: gsap.core.Timeline;
}) => {
  const el = useRef(null);

  //upon load bounce up the text
  useEffect(() => {
    timeLine.fromTo(
      el.current,
      {
        y: +25,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: 'back',
      },
    );
  }, []);

  return <H1 ref={el}>{children}</H1>;
};

const H2 = styled.h2`
  font-family: Quicksand;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;
  margin: 10px 0;
`;

export const SmallText = ({
  children,
  timeLine,
}: {
  children: any;
  timeLine: gsap.core.Timeline;
}) => {
  const el = useRef(null);

  //upon load bounce down the text
  useEffect(() => {
    timeLine.fromTo(
      el.current,
      {
        y: -25,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: 'back',
      },
    );
  }, []);
  return <H2 ref={el}>{children}</H2>;
};

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
