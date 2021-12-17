import React from 'react';
import { forwardRef } from 'react';
import MainText from '../../components/MainText/MainText';
import Navbar from '../../components/Navbar/Navbar';
import { BG, Content, MainContainer, Profile } from './styles';
import Triangle from '../../images/Triangle.svg';
import { Icons } from './components';
import { StaticImage } from 'gatsby-plugin-image';

const HomePage = forwardRef(
  ({ ref }: { ref: React.MutableRefObject<HTMLElement> }) => {
    return (
      <Content className="page" ref={ref}>
        <MainContainer>
          <Navbar />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexGrow: 2,
              justifyContent: 'space-between',
            }}
          >
            <MainText />
            <Profile>
              <StaticImage
                src="../../images/photo.png"
                alt="profile picture"
                width={300}
                height={400}
              />
            </Profile>
          </div>
          <Triangle style={{ display: 'flex', alignSelf: 'center' }} />
        </MainContainer>
        <Icons />
        <BG />
      </Content>
    );
  },
);

export default HomePage;
