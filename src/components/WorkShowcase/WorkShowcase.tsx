import {
  AnimatePresence,
  AnimationControls,
  motion,
  useAnimation,
} from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useRef, useState } from 'react';
import { DefaultColors } from '../../config/DefaultColors';
import { DefaultText14 } from '../../config/DefaulTextSizes';
import { useShowcase } from '../../providers/ShowcaseProvider/ShowcaseProvider';
import { TypeExpandStates } from '../../providers/ShowcaseProvider/types';
import {
  RoundedRectangle,
  SubTitle,
  Title,
  Content,
  ImageContainer,
} from './styles';

const ParentVariants = {
  start: {
    y: 0,
    x: 0,
    height: 220,
    width: 580,
    transition: { duration: 0.5, staggerChildren: 0.5 },
  },
  end: {
    x: '-40%',
    y: '-50%',
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
  id,
}: {
  title: string;
  shortText: string;
  longText: string;
  id: TypeExpandStates;
}) => {
  const { expand, setExpand } = useShowcase();
  const controls = useAnimation();

  useEffect(() => {
    if (expand === id) controls.start('end');
    else controls.start('start');
  }, [expand]);

  return (
    <Content
      layout
      variants={ParentVariants}
      initial="start"
      animate={controls}
      onClick={() => {
        if (expand === id) setExpand(-1);
        else setExpand(id);
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
