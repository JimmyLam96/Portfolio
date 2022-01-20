import React, { useRef, useState } from 'react';
import ContactForm from '../../components/ContactForm';
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
  Form,
  Signal,
  ContactContainer,
} from './styles';
import ContactArrow from '../../images/SVG/ContactArrow.svg';
import { useAnimation } from 'framer-motion';
import DefaultButton from '../../components/DefaultButton';
import emailjs from 'emailjs-com';
import Icons from './icons';

export default function About({ id }: { id: string }) {
  const controls = useAnimation();
  const form = useRef<HTMLFormElement>(null);
  const [buttonText, setButtonText] = useState<string>('send');

  const sendEmail = async () => {
    if (form.current) {
      const response = await emailjs.sendForm(
        'service_086dksv',
        'template_e1laaf7',
        form.current,
        'user_N6W189R2wFvUyD4fUtHUj',
      );
      if (response.status === 200) {
        form.current.reset();
        setButtonText('message sent!');
        controls.start('animate');
      }
    }
  };

  return (
    <Background id={id}>
      <Content>
        <Left>
          <LeftContent>
            <ContactContainer>
              <Text36>contact</Text36>
              <Signal />
            </ContactContainer>
            <GetInContactContainer>
              <Text48>let's get in contact</Text48>
              <ContactArrowContainer>
                <ContactArrow />
              </ContactArrowContainer>
            </GetInContactContainer>
          </LeftContent>
        </Left>
        <Right>
          <RightContent>
            <Icons />
            <Form ref={form} onSubmit={sendEmail}>
              <NameEmailContainer>
                <ContactForm size="small" type="your name" name="name" />
                <ContactForm size="small" type="email address" name="email" />
              </NameEmailContainer>
              <ContactForm size="large" type="your message" name="message" />
              <DefaultButton controls={controls} onClick={() => sendEmail()}>
                {buttonText}
              </DefaultButton>
            </Form>
          </RightContent>
        </Right>
      </Content>
    </Background>
  );
}
