import { AnimateSharedLayout, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { WorkShowcase } from '../../components/WorkShowcase/WorkShowcase';
import { DefaultText18 } from '../../config/DefaulTextSizes';
import { Content, ShowCaseContainer } from './styles';

const Work = () => {
  return (
    <Content className="Content">
      <AnimateSharedLayout>
        <DefaultText18>work</DefaultText18>
        <ShowCaseContainer>
          <WorkShowcase
            title="The Sugar Look"
            shortText="Responsive web application where users can read, write testimonials
          about other users and communicate with each other. Made with React,
          Typescript and CSS"
            longText="Responsive web application where users can read, write testimonials
          about other users and communicate with each other. Made with React,
          Typescript and CSS"
            id={0}
          />
          <WorkShowcase
            title="The Sugar Look"
            shortText="Responsive web application where users can read, write testimonials
          about other users and communicate with each other. Made with React,
          Typescript and CSS"
            longText="Responsive web application where users can read, write testimonials
          about other users and communicate with each other. Made with React,
          Typescript and CSS"
            id={1}
          />
          <WorkShowcase
            title="The Sugar Look"
            shortText="Responsive web application where users can read, write testimonials
          about other users and communicate with each other. Made with React,
          Typescript and CSS"
            longText="Responsive web application where users can read, write testimonials
          about other users and communicate with each other. Made with React,
          Typescript and CSS"
            id={2}
          />
          <WorkShowcase
            title="The Sugar Look"
            shortText="Responsive web application where users can read, write testimonials
          about other users and communicate with each other. Made with React,
          Typescript and CSS"
            longText="Responsive web application where users can read, write testimonials
          about other users and communicate with each other. Made with React,
          Typescript and CSS"
            id={3}
          />
        </ShowCaseContainer>
      </AnimateSharedLayout>
    </Content>
  );
};

export default Work;
