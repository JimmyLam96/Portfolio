import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import React, { useState } from 'react';
import {
  RoundedRectangle,
  SubTitle,
  Title,
} from '../../components/WorkShowcase/styles';
import { WorkShowcase } from '../../components/WorkShowcase/WorkShowcase';
import { DefaultText14, DefaultText18 } from '../../config/DefaulTextSizes';
import { Content, Overlay } from './styles';

const Work = () => {
  const [expand, setExpand] = useState<string>('');
  return (
    <Content className="Content">
      <AnimateSharedLayout>
        <DefaultText18>work</DefaultText18>
        <WorkShowcase
          title="The Sugar Look"
          shortText="Responsive web application where users can read, write testimonials
          about other users and communicate with each other. Made with React,
          Typescript and CSS"
          longText="Responsive web application where users can read, write testimonials
          about other users and communicate with each other. Made with React,
          Typescript and CSS"
          onClick={(input) => setExpand(input)}
        />
        <AnimatePresence>
          {expand === 'title' && (
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              onClick={() => setExpand('')}
            >
              <RoundedRectangle style={{ width: '500px', height: '400px' }}>
                <Title>balasdsajd</Title>
                <DefaultText14>
                  "Responsive web application where users can read, write
                  testimonials about other users and communicate with each
                  other. Made with React, Typescript and CSS"
                </DefaultText14>
                <SubTitle>asjdhasjdh</SubTitle>
              </RoundedRectangle>
            </Overlay>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </Content>
  );
};

export default Work;
