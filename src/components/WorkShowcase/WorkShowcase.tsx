import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import React, { createRef, useEffect, useRef, useState } from 'react';
import { DefaultColors } from '../../config/DefaultColors';
import { DefaultText14 } from '../../config/DefaulTextSizes';
import {
  RoundedRectangle,
  SubTitle,
  Title,
  Content,
  ContentBounds,
  ImageContainer,
} from './styles';

const ParentVariants = {
  start: {
    y: 200,
    x: 200,
    height: 220,
    width: 580,
    transition: { duration: 0.5, staggerChildren: 0.5 },
  },
  end: {
    x: 0,
    y: 0,
    height: 375,
    width: 700,
    transition: { duration: 0.5, staggerChildren: 0.5 },
  },
};

const RectangleVariants = {
  start: {
    width: 350,
    borderRadius: '13px',
    transition: { duration: 0.5 },
  },
  end: {
    width: 465,
    borderRadius: '0 13px 13px 0',
    transition: { duration: 0.5 },
  },
};

const ImageVariants = {
  start: {
    flexGrow: 0,
    borderRadius: '13px',
    borderShadow: 'none',
    transition: { duration: 0.5 },
  },
  end: {
    flexGrow: 1,
    backgroundColor: DefaultColors.Button,
    borderRadius: '13px 0 0 13px',
    boxShadow: '0px 7px 50px 2px #0000001a',
    transition: { duration: 0.5 },
  },
};

export const WorkShowcase = ({
  title,
  shortText,
  longText,
  onClick,
}: {
  title: string;
  shortText: string;
  longText: string;
  onClick: (input: string) => void;
}) => {
  const [expand, setExpand] = useState<0 | 1 | 2>(0);
  const controls = useAnimation();

  useEffect(() => {
    if (expand === 1) controls.start('start');
    if (expand === 2) controls.start('end');
  }, [expand]);

  return (
    <Content
      layout
      variants={ParentVariants}
      initial="start"
      animate={controls}
      onClick={() => {
        if (expand === 2 || expand === 0) setExpand(1);
        else setExpand(2);
      }}
    >
      <ImageContainer
        variants={ImageVariants}
        initial="start"
        animate={controls}
      >
        <StaticImage
          src="../../images/PNG/TSL.png"
          alt="The Sugar Look screenshots"
          style={{
            width: '190px',
            height: '220px',
            borderRadius: '13px',
            overflow: 'hidden',
          }}
        />
      </ImageContainer>
      <RoundedRectangle variants={RectangleVariants} animate={controls}>
        <Title>{title}</Title>
        <DefaultText14>{shortText}</DefaultText14>
        <SubTitle>Team Rockstar IT</SubTitle>
      </RoundedRectangle>
    </Content>
  );
};
