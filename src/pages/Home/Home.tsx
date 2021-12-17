import React from 'react';
import { forwardRef } from 'react';
import MainText from '../../components/MainText/MainText';
import Navbar from '../../components/Navbar/Navbar';
import {
  BG,
  Content,
  MainContainer,
  Profile,
  InnerContent,
  Border,
} from './styles';
import Triangle from '../../images/Triangle.svg';
import { Icons } from './components';
import { StaticImage } from 'gatsby-plugin-image';
import { useAnimation } from 'framer-motion';

const BorderVariants = {
  initial: {
    x: 20,
    y: 20,
  },
  hover: {
    x: 30,
    y: 30,
  },
};

const HomePage = forwardRef(
  ({ ref }: { ref: React.MutableRefObject<HTMLElement> }) => {
    const handControls = useAnimation();
    const itemControls = useAnimation();

    //start of the animation sequence returns a promise
    //we await the promise in the icons component to have sequenced animation
    const promise = handControls.start('hover');

    return (
      <Content className="page" ref={ref}>
        <MainContainer>
          <Navbar />
          <InnerContent>
            <MainText controls={handControls} />
            <Profile
              onHoverStart={() => {
                itemControls.start(BorderVariants.hover);
              }}
              onHoverEnd={() => {
                itemControls.start(BorderVariants.initial);
              }}
            >
              <Border
                initial="initial"
                variants={BorderVariants}
                animate={itemControls}
              />
              <StaticImage
                src="../../images/photo.png"
                alt="profile picture"
                width={300}
                height={400}
                style={{ borderRadius: '25px' }}
              />
            </Profile>
          </InnerContent>
          <Triangle style={{ display: 'flex', alignSelf: 'center' }} />
        </MainContainer>
        <Icons timeLine={promise} />
        <BG />
      </Content>
    );
  },
);

export default HomePage;
