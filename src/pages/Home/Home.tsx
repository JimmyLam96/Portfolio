import React, { useEffect } from 'react';
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
    const iconControls = useAnimation();
    const borderControls = useAnimation();

    //start of the animation sequence returns a promise
    //we await the promise in the icons component to have sequenced animation

    const runSyncAnimations = async () => {
      await handControls.start('hover');
      return await iconControls.start('show');
    };

    //as soon as we load into the page run previous animations
    useEffect(() => {
      runSyncAnimations();
    }, []);

    return (
      <Content className="page" ref={ref}>
        <MainContainer>
          <Navbar />
          <InnerContent>
            <MainText handControls={handControls} iconControls={iconControls} />
            <Profile
              onHoverStart={() => {
                handControls.start(BorderVariants.hover);
              }}
              onHoverEnd={() => {
                handControls.start(BorderVariants.initial);
              }}
            >
              <Border
                initial="initial"
                variants={BorderVariants}
                animate={borderControls}
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
        <Icons iconControls={iconControls} />
        <BG />
      </Content>
    );
  },
);

export default HomePage;
