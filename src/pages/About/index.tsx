import { useAnimation } from 'framer-motion';
import React from 'react';
import {
  Header,
  Text36,
  Background,
  Occupation,
  Grid,
  Coding,
  Personal,
  Border,
  DotsContainer,
  WorkPolkaContainer,
  Dots,
  WorkPolka,
  MoonContainer,
  YellowPolkaContainer,
  WavesContainer,
  Content,
  CodingBorder,
  CodingText,
  PersonalText,
  YellowPolka,
  Waves,
  Moon,
} from '../../page-components/About/styles';
import { DefaultText18 } from '../../config/DefaultTextSizes';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  BlockVariants,
  BorderVariants,
  IconVariants,
  ParentVariants,
} from '../../page-components/About/animations';

export default function About({ id }: { id: string }) {
  const gridControls = useAnimation();
  const borderControls = useAnimation();

  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(
        filter: { frontmatter: { featuredImg: { name: { ne: null } } } }
        sort: { fields: frontmatter___title, order: ASC }
      ) {
        nodes {
          frontmatter {
            featuredImg {
              childImageSharp {
                gatsbyImageData
              }
            }
            text
            title
          }
        }
      }
    }
  `);

  const marathonImage = getImage(
    data.allMarkdownRemark.nodes[2].frontmatter.featuredImg.childImageSharp,
  );
  const rockstarImage = getImage(
    data.allMarkdownRemark.nodes[1].frontmatter.featuredImg.childImageSharp,
  );
  const codingMe = getImage(
    data.allMarkdownRemark.nodes[0].frontmatter.featuredImg.childImageSharp,
  );

  return (
    <Background id={id}>
      <Content>
        <Header>
          <Text36>about me</Text36>
        </Header>
        <Grid
          initial="initial"
          whileInView="show"
          variants={ParentVariants}
          animate={gridControls}
          viewport={{ once: true }}
        >
          <Occupation variants={BlockVariants}>
            {rockstarImage && (
              <GatsbyImage
                image={rockstarImage}
                alt="Rockstar IT Logo"
                style={{ width: '50%', height: 'auto' }}
              />
            )}

            <DefaultText18>
              {`Currently I am working as a software engineer at `}
              <a href="https://www.teamrockstars.nl/">Team Rockstar IT</a>
              {`.
              Where I am the main front end engineer responsible for the
              development of a testimonial website`}
            </DefaultText18>
            <DotsContainer variants={IconVariants.slideInFromRight}>
              <Dots />
            </DotsContainer>
            <WorkPolkaContainer variants={IconVariants.slideInFromLeft}>
              <WorkPolka />
            </WorkPolkaContainer>
          </Occupation>
          <CodingBorder
            onHoverStart={() => {
              borderControls.start(BorderVariants.hover);
            }}
            onHoverEnd={() => {
              borderControls.start(BorderVariants.initial);
            }}
            variants={BlockVariants}
          >
            <Coding>
              {codingMe && (
                <GatsbyImage
                  image={codingMe}
                  alt="Rockstar IT Logo"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '10px',
                  }}
                />
              )}
              <CodingText>
                Coding up an efficient solution to a complex problem always
                gives me a kick. I like bringing together beautiful designs with
                well thought out code for the ultimate user experience.
              </CodingText>
              <MoonContainer variants={IconVariants.slideInFromLeft}>
                <Moon />
              </MoonContainer>
            </Coding>
            <Border
              initial="initial"
              variants={BorderVariants}
              animate={borderControls}
            />
          </CodingBorder>
          <Personal variants={BlockVariants}>
            {marathonImage && (
              <GatsbyImage
                image={marathonImage}
                alt="Terschelling marathon picture"
                style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
              />
            )}
            <PersonalText>
              My spare time is usually spend in the gym, in my running shoes,
              swimming laps at the pool or coding up some project. I like
              hanging out with friends and family just as much.
            </PersonalText>
            <YellowPolkaContainer variants={IconVariants.slideInFromLeft}>
              <YellowPolka />
            </YellowPolkaContainer>
            <WavesContainer variants={IconVariants.slideInFromRight}>
              <Waves />
            </WavesContainer>
          </Personal>
        </Grid>
      </Content>
    </Background>
  );
}
