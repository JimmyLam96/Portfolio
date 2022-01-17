import React from 'react';
import ContactForm from '../../components/ContactForm';
import { DefaultText36, DefaultText48 } from '../../config/DefaulTextSizes';
import {
  Background,
  Left,
  Right,
  Content,
  ContactArrowContainer,
  GetInContactContainer,
} from './styles';
import ContactArrow from '../../images/SVG/ContactArrow.svg';
import { useAnimation } from 'framer-motion';
import { SpringAnimation } from '../../config/DefaultVariants';

const Variants = {
  animate: {
    x: 50,
    transition: {
      duration: 0.2,
    },
  },
};

export default function About({ id }: { id: string }) {
  const controls = useAnimation();
  return (
    <Background id={id}>
      <Content>
        {/* red color */}
        <Left>
          <DefaultText36>contact</DefaultText36>
          <GetInContactContainer animate={controls}>
            <DefaultText48>let's get in contact</DefaultText48>
            <ContactArrowContainer variants={Variants}>
              <ContactArrow />
            </ContactArrowContainer>
          </GetInContactContainer>
        </Left>
        {/* blue color */}
        {/* <Right>
          <ContactForm type="name" />
        </Right> */}
      </Content>
    </Background>
  );
}
