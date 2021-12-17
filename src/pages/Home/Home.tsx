import React, { useEffect } from 'react';
import { forwardRef } from 'react';
import MainText from '../../components/MainText/MainText';
import Navbar from '../../components/Navbar/Navbar';
import { BG, Content, MainContainer, Profile, InnerContent } from './styles';
import Triangle from '../../images/Triangle.svg';
import { Icons } from './components';
import { StaticImage } from 'gatsby-plugin-image';
import { useAnimation } from 'framer-motion';

const HomePage = forwardRef(
  ({ ref }: { ref: React.MutableRefObject<HTMLElement> }) => {
    //start of the animation sequence returns a promise
    //we await the promise in the icons component to have sequenced animation
    const handControls = useAnimation();
    const promise = handControls.start({
      opacity: 1,
      transition: {
        duration: 0.8,
      },
      rotate: [0, 15, -15, 15, -15, 0],
    });

    return (
      <Content className="page" ref={ref}>
        <MainContainer>
          <Navbar />
          <InnerContent>
            <MainText controls={handControls} />
            <Profile>
              <StaticImage
                src="../../images/photo.png"
                alt="profile picture"
                width={300}
                height={400}
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
