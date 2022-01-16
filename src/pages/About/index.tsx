import { useAnimation } from 'framer-motion';
import React from 'react';
import {
  Header,
  Text36,
  Background,
  Occupation,
  Grid,
  Coding,
  Personal,
  YellowStairsContainerRight,
  Border,
  YellowStairsContainerLeft,
  PurplePolkaContainer,
  PurpleCircleContainer,
  HamburgerMenuContainer,
  MoonContainer,
  YellowPolkaContainer,
  WavesContainer,
  MainContainer,
  CodingBorder,
  CodingText,
  PersonalText,
} from './styles';
import PurpleCircle from '../../images/SVG/PurpleCircle.svg';
import YellowWaves from '../../images/SVG/YellowWaves.svg';
import PurplePolka from '../../images/SVG/PurplePolka.svg';
import HamburgerMenu from '../../images/SVG/HamburgerMenu.svg';
import DarkBlueWaves from '../../images/SVG/DarkBlueWaves.svg';
import Moon from '../../images/SVG/Moon.svg';
import YellowPolka from '../../images/SVG/YellowPolka.svg';
import { StaticImage } from 'gatsby-plugin-image';
import { DefaultText18 } from '../../config/DefaulTextSizes';
import { SpringAnimation } from '../../config/DefaultVariants';
// if (typeof window !== 'undefined') {
//   // eslint-disable-next-line global-require
//   require('smooth-scroll')('a[href*="#"]');
// }

const ParentVariants = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const BlockVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  show: {
    y: 0,
    ...SpringAnimation,
  },
};

const BorderVariants = {
  initial: {
    x: -20,
    y: -20,
  },
  hover: {
    x: -30,
    y: -30,
  },
};

const IconVariants = {
  slideInFromRight: {
    initial: {
      opacity: 0,
      x: 50,
    },
    show: {
      x: 0,
      ...SpringAnimation,
    },
  },
  slideInFromLeft: {
    initial: {
      opacity: 0,
      x: -50,
    },
    show: {
      x: 0,
      ...SpringAnimation,
    },
  },
};

export default function About({ id }: { id: string }) {
  const gridControls = useAnimation();
  const borderControls = useAnimation();

  return (
    <Background id={id}>
      <MainContainer>
        <Header>
          <Text36>about me</Text36>
        </Header>
        <Grid
          initial="initial"
          whileInView="show"
          variants={ParentVariants}
          animate={gridControls}
          viewport={{ once: true }}
        >
          <Occupation variants={BlockVariants}>
            <StaticImage
              src="../../images/PNG/RockstarIcon.png"
              alt="Rockstar IT Logo"
              style={{ width: '50%', height: 'auto' }}
            />
            <DefaultText18>
              Currently I am working as a software engineer at{' '}
              <a href="https://www.teamrockstars.nl/">Team Rockstar IT</a>.
              Where I am the main front end engineer responsible for the
              development of a testimonial website
            </DefaultText18>
            <YellowStairsContainerLeft variants={IconVariants.slideInFromLeft}>
              <YellowWaves />
            </YellowStairsContainerLeft>
            <PurpleCircleContainer variants={IconVariants.slideInFromRight}>
              <PurpleCircle />
            </PurpleCircleContainer>
            <PurplePolkaContainer variants={IconVariants.slideInFromLeft}>
              <PurplePolka />
            </PurplePolkaContainer>
            <YellowStairsContainerRight
              variants={{
                ...IconVariants.slideInFromLeft,
                initial: {
                  opacity: 0,
                  x: 50,
                  rotate: 270,
                },
              }}
            >
              <YellowWaves />
            </YellowStairsContainerRight>
          </Occupation>
          <CodingBorder
            onHoverStart={() => {
              borderControls.start(BorderVariants.hover);
            }}
            onHoverEnd={() => {
              borderControls.start(BorderVariants.initial);
            }}
            variants={BlockVariants}
          >
            <Coding>
              <StaticImage
                src="../../images/PNG/CodingMe.png"
                alt="Rockstar IT Logo"
                style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
              />
              <CodingText>
                Coding up an efficient solution to a complex problem always
                gives me a kick. I like bringing together beautiful designs with
                well thought out code for the ultimate user experience.
              </CodingText>
              <HamburgerMenuContainer variants={IconVariants.slideInFromRight}>
                <HamburgerMenu />
              </HamburgerMenuContainer>
              <MoonContainer variants={IconVariants.slideInFromLeft}>
                <Moon />
              </MoonContainer>
            </Coding>
            <Border
              initial="initial"
              variants={BorderVariants}
              animate={borderControls}
            />
          </CodingBorder>
          <Personal variants={BlockVariants}>
            <StaticImage
              src="../../images/PNG/TerschellingMarathon.png"
              alt="Terschelling marathon picture"
              style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
            />
            <PersonalText>
              My spare time is usually spend in the gym, in my running shoes,
              swimming laps at the pool or coding up some project. I like
              hanging out with friends and family just as much.
            </PersonalText>
            <YellowPolkaContainer variants={IconVariants.slideInFromLeft}>
              <YellowPolka />
            </YellowPolkaContainer>
            <WavesContainer variants={IconVariants.slideInFromRight}>
              <DarkBlueWaves />
            </WavesContainer>
          </Personal>
        </Grid>
      </MainContainer>
    </Background>
  );
}
