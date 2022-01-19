import { AnimationControls } from 'framer-motion';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  Content,
  DefaultBorder,
  IconContainer,
  MoonDiv,
  WavesDiv,
  ImageContainer,
} from './styles';
import Moon from '../../../images/SVG/Moon.svg';
import Waves from '../../../images/SVG/Waves.svg';
import { SpringAnimation } from '../../../config/DefaultVariants';
import { graphql, useStaticQuery } from 'gatsby';
import { TypeFile } from './types';
import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks';

const BorderVariants = {
  initial: {
    x: 20,
    y: 20,
  },
  hover: {
    x: 30,
    y: 30,
  },
};

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const IconVariants = {
  hidden: { opacity: 0, y: 500 },
  show: {
    y: 0,
    ...SpringAnimation,
  },
};

export default function Right({
  borderControls,
  iconControls,
}: {
  borderControls: AnimationControls;
  iconControls: AnimationControls;
}) {
  //get all the files that match PNG/photo.png using gatsby image, sharp and tranformer
  const data = useStaticQuery(graphql`
    query GetProfilePicQuerry {
      file(relativePath: { eq: "PNG/photo.png" }) {
        childrenImageSharp {
          gatsbyImageData
          fluid {
            src
            srcSet
            sizes
          }
        }
      }
    }
  `);
  //we are returning an array of possible images so we take the very first one
  const profile = getImage(data.file.childrenImageSharp[0]);
  return (
    <Content>
      <ImageContainer
        onHoverStart={() => {
          borderControls.start(BorderVariants.hover);
        }}
        onHoverEnd={() => {
          borderControls.start(BorderVariants.initial);
        }}
      >
        {profile && (
          <GatsbyImage
            image={profile}
            alt="profile picture"
            style={{
              borderRadius: '25px',
              width: '100%',
              height: 'auto',
            }}
          />
        )}
        <DefaultBorder
          initial="initial"
          variants={BorderVariants}
          animate={borderControls}
        />
      </ImageContainer>

      <IconContainer
        variants={container}
        initial="hidden"
        animate={iconControls}
        exit="exit"
      >
        <MoonDiv variants={IconVariants}>
          <Moon />
        </MoonDiv>
        <WavesDiv variants={IconVariants}>
          <Waves />
        </WavesDiv>
      </IconContainer>
    </Content>
  );
}
