import { useAnimation } from 'framer-motion';
import React from 'react';
import {
  Header,
  Text36,
  Content,
  Sports,
  Grid,
  Coding,
  SmallBusiness,
} from './styles';

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
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      type: 'spring',
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

export default function About() {
  const controls = useAnimation();

  return (
    <Content>
      <Header>
        <Text36>about me</Text36>
      </Header>
      <Grid
        initial="initial"
        whileInView="show"
        variants={ParentVariants}
        animate={controls}
      >
        <Sports gridColumn={1} variants={BlockVariants}>
          test
        </Sports>
        <Coding gridColumn={2} variants={BlockVariants}>
          test
        </Coding>
        <SmallBusiness gridColumn={3} variants={BlockVariants}>
          test
        </SmallBusiness>
      </Grid>
    </Content>
  );
}
