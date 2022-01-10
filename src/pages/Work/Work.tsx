import { AnimateSharedLayout, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { ShowcaseCard } from '../../components/WorkShowcase/WorkShowcase';
import { DefaultText18 } from '../../config/DefaulTextSizes';
import { Content, ShowcaseContainer } from './styles';

const Work = () => {
  return (
    <Content className="Content">
      <AnimateSharedLayout>
        <DefaultText18>work</DefaultText18>
        <ShowcaseContainer>
          <ShowcaseCard
            title="The Sugar Look"
            shortText="Responsive web application where users can read, write testimonials
          about other users and communicate with each other. Made with React,
          Typescript and CSS"
            longText="Responsive web application where users can read, write testimonials
          about other users and communicate with each other. Made with React,
          Typescript and CSS"
            id={0}
          />
          <ShowcaseCard
            title="The Sugar Look"
            shortText="Responsive web application where users can read, write testimonials
          about other users and communicate with each other. Made with React,
          Typescript and CSS"
            longText="Responsive web application where users can read, write testimonials
          about other users and communicate with each other. Made with React,
          Typescript and CSS"
            id={1}
          />
          <ShowcaseCard
            title="The Sugar Look"
            shortText="Responsive web application where users can read, write testimonials
          about other users and communicate with each other. Made with React,
          Typescript and CSS"
            longText="Responsive web application where users can read, write testimonials
          about other users and communicate with each other. Made with React,
          Typescript and CSS"
            id={2}
          />
          <ShowcaseCard
            title="The Sugar Look"
            shortText="Responsive web application where users can read, write testimonials
          about other users and communicate with each other. Made with React,
          Typescript and CSS"
            longText="Responsive web application where users can read, write testimonials
          about other users and communicate with each other. Made with React,
          Typescript and CSS"
            id={3}
          />
        </ShowcaseContainer>
      </AnimateSharedLayout>
    </Content>
  );
};

export default Work;
