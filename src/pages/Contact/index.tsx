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
  Text36,
  Text48,
  NameEmailContainer,
  LeftContent,
  RightContent,
} from './styles';
import ContactArrow from '../../images/SVG/ContactArrow.svg';
import { useAnimation } from 'framer-motion';
import DefaultButton from '../../components/DefaultButton';

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
        <Left>
          <LeftContent>
            <Text36>contact</Text36>
            <GetInContactContainer animate={controls}>
              <Text48>let's get in contact</Text48>
              <ContactArrowContainer variants={Variants}>
                <ContactArrow />
              </ContactArrowContainer>
            </GetInContactContainer>
          </LeftContent>
        </Left>
        <Right>
          <RightContent>
            <NameEmailContainer>
              <ContactForm size="small" type="your name" />
              <ContactForm size="small" type="email address" />
            </NameEmailContainer>
            <ContactForm size="large" type="your message" />
            <DefaultButton>send</DefaultButton>
          </RightContent>
        </Right>
      </Content>
    </Background>
  );
}
