import { useAnimation } from 'framer-motion';
import React from 'react';
import {
  Header,
  Text36,
  Background,
  Sports,
  Grid,
  Coding,
  SmallBusiness,
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
} from './styles';
import PurpleCircle from '../../images/PurpleCircle.svg';
import YellowWaves from '../../images/YellowWaves.svg';
import PurplePolka from '../../images/PurplePolka.svg';
import HamburgerMenu from '../../images/HamburgerMenu.svg';
import DarkBlueWaves from '../../images/DarkBlueWaves.svg';
import Moon from '../../images/Moon.svg';
import YellowPolka from '../../images/YellowPolka.svg';
import { SpringAnimation } from '../../DefaultVariants';

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

export default function About() {
  const gridControls = useAnimation();
  const borderControls = useAnimation();

  return (
    <Background>
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
          <Sports variants={BlockVariants}>
            test
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
          </Sports>
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
          <SmallBusiness variants={BlockVariants}>
            test
            <YellowPolkaContainer variants={IconVariants.slideInFromLeft}>
              <YellowPolka />
            </YellowPolkaContainer>
            <WavesContainer variants={IconVariants.slideInFromRight}>
              <DarkBlueWaves />
            </WavesContainer>
          </SmallBusiness>
        </Grid>
      </MainContainer>
    </Background>
  );
}
