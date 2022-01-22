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
import { graphql, useStaticQuery } from 'gatsby';
import {
  BorderVariants,
  IconContainerVariants,
  IconVariants,
} from './animations';

export default function Right({
  borderControls,
  iconControls,
}: {
  borderControls: AnimationControls;
  iconControls: AnimationControls;
}) {
  //get all the files that match PNG/me.png using gatsby image, sharp and tranformer
  const data = useStaticQuery(graphql`
    query GetProfilePicQuerry {
      file(relativePath: { eq: "PNG/Me.png" }) {
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
            imgStyle={{
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
        variants={IconContainerVariants}
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
