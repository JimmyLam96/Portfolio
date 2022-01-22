import { useAnimation } from 'framer-motion';
import {
  StaticImage,
  GatsbyImage,
  IGatsbyImageData,
} from 'gatsby-plugin-image';
import React, { useEffect } from 'react';
import { DefaultColors } from '../../config/DefaultColors';
import { DefaultText14 } from '../../config/DefaultTextSizes';
import { useShowcase } from '../../providers/ShowcaseProvider/ShowcaseProvider';
import ExpandedFooter from './expandedfooter';
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
    transition: { duration: 0.5 },
  },
  end: {
    transition: { duration: 0.5 },
  },
};

const ImageVariants = {
  start: {
    backgroundColor: DefaultColors.Secondary,
    borderShadow: 'none',
    transition: { duration: 0.1 },
  },
  end: {
    backgroundColor: DefaultColors.Button,
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
  imageSrc,
}: {
  title: string;
  shortText: string;
  longText: string;
  id: string;
  subTitle: string;
  technologies: string[];
  imageSrc: IGatsbyImageData | undefined;
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
        $isSelected={expand === id}
      >
        <CardContent
          $isSelected={expand === id}
          layout
          transition={{ transition: { duration: 0.5 } }}
        >
          <ImageBackground
            $isSelected={expand === id}
            variants={ImageVariants}
            initial="start"
            animate={controls}
            layout
            transition={{ transition: { duration: 0.5 } }}
          >
            <ImageContainer $isSelected={expand === id}>
              {imageSrc && (
                <GatsbyImage
                  image={imageSrc}
                  alt="test"
                  style={{
                    width: '100%',
                    height: '220px',
                    borderRadius: '13px',
                    overflow: 'hidden',
                  }}
                />
              )}
            </ImageContainer>
          </ImageBackground>
          <RoundedRectangle
            variants={RectangleVariants}
            animate={controls}
            $isSelected={expand === id}
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
