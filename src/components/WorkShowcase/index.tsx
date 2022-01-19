import { AnimatePresence, useAnimation } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect } from 'react';
import { DefaultColors } from '../../config/DefaultColors';
import { DefaultText14 } from '../../config/DefaulTextSizes';
import { useShowcase } from '../../providers/ShowcaseProvider/ShowcaseProvider';
import { TypeExpandStates } from '../../providers/ShowcaseProvider/types';
import ExpandedFooter from './ExpandedFooter';
import {
  RoundedRectangle,
  SubTitle,
  Title,
  Overlay,
  ImageBackground,
  ImageContainer,
  Card,
  CardContent,
} from './styles';
import Exit from '../../images/SVG/Exit.svg';

const RectangleVariants = {
  start: {
    // borderRadius: '13px',
    transition: { duration: 0.5 },
  },
  end: {
    // borderRadius: '0 13px 13px 0',
    transition: { duration: 0.5 },
  },
};

const ImageVariants = {
  start: {
    backgroundColor: DefaultColors.Secondary,
    // borderRadius: '13px',
    borderShadow: 'none',
    transition: { duration: 0.1 },
  },
  end: {
    backgroundColor: DefaultColors.Button,
    // borderRadius: '13px 0 0 13px',
    boxShadow: '0px 7px 50px 2px #0000001a',
    transition: { duration: 0.1 },
  },
};

export const ShowcaseCard = ({
  title,
  shortText,
  longText,
  id,
  technologies,
  subTitle,
}: {
  title: string;
  shortText: string;
  longText: string;
  id: string;
  subTitle: string;
  technologies: string[];
}) => {
  const { expand, setExpand } = useShowcase();
  const controls = useAnimation();

  useEffect(() => {
    if (expand === id) controls.start('end');
    else controls.start('start');
  }, [expand]);

  return (
    <Card
      onClick={() => {
        if (expand !== id) setExpand(id);
      }}
    >
      <Overlay
        layout
        transition={{ transition: { duration: 0.5 } }}
        isSelected={expand === id}
      >
        <CardContent
          isSelected={expand === id}
          layout
          transition={{ transition: { duration: 0.5 } }}
        >
          <ImageBackground
            isSelected={expand === id}
            variants={ImageVariants}
            initial="start"
            animate={controls}
            layout
            transition={{ transition: { duration: 0.5 } }}
          >
            <ImageContainer isSelected={expand === id}>
              <StaticImage
                src="../../images/PNG/TSL.png"
                alt="The Sugar Look screenshots"
                style={{
                  width: '100%',
                  height: '220px',
                  borderRadius: '13px',
                  overflow: 'hidden',
                }}
              />
            </ImageContainer>
          </ImageBackground>
          <RoundedRectangle
            variants={RectangleVariants}
            animate={controls}
            isSelected={expand === id}
          >
            {expand === id && (
              <Exit
                onClick={() => {
                  if (expand === id) setExpand(null);
                }}
                style={{ position: 'absolute', top: 15, right: 15 }}
              />
            )}
            <Title>{title}</Title>
            <DefaultText14>{shortText}</DefaultText14>
            {expand === id && <DefaultText14>{longText}</DefaultText14>}
            {expand !== id && <SubTitle>{subTitle}</SubTitle>}
            {expand === id && <ExpandedFooter technologies={technologies} />}
          </RoundedRectangle>
        </CardContent>
      </Overlay>
    </Card>
  );
};