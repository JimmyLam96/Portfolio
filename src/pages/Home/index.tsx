import React, { useCallback, useEffect } from 'react';
import Left from '../../page-components/Home/LeftContent';
import Navbar from '../../components/Navbar';
import {
  BG,
  Background,
  Content,
  InnerContent,
  Footer,
} from '../../page-components/Home/styles';
import Triangle from '../../images/SVG/Triangle.svg';
import { useAnimation } from 'framer-motion';
import Right from '../../page-components/Home/RightContent';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const HomePage = ({ id }: { id: string }) => {
  const handControls = useAnimation();
  const iconControls = useAnimation();
  const borderControls = useAnimation();

  //start of the animation sequence returns a promise
  //we await the promise in the icons component to have sequenced animation
  const runSyncAnimations = useCallback(async () => {
    await handControls.start('hover');
    return await iconControls.start('show');
  }, []);

  //as soon as we load into the page run previous animations
  useEffect(() => {
    runSyncAnimations();
  }, [runSyncAnimations]);

  const data = useStaticQuery(graphql`
    query GetBackgroundPicQuerry {
      file(relativePath: { eq: "PNG/HomeBG.png" }) {
        childrenImageSharp {
          gatsbyImageData
          fluid {
            src
            srcSet
            sizes
          }
        }
      }
    }
  `);
  //we are returning an array of possible images so we take the very first one
  const bg = getImage(data.file.childrenImageSharp[0]);

  return (
    <Background id={id}>
      <Content>
        <Navbar />
        <InnerContent>
          <Left handControls={handControls} iconControls={iconControls} />
          <Right borderControls={borderControls} iconControls={iconControls} />
        </InnerContent>
        <Footer>
          <Triangle />
        </Footer>
      </Content>
      {bg && (
        <GatsbyImage
          image={bg}
          alt="Waves background"
          style={{
            position: 'absolute',
            bottom: 0,
          }}
        />
      )}
    </Background>
  );
};

export default HomePage;
