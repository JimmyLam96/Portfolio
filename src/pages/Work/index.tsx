import { AnimateSharedLayout, useAnimation } from 'framer-motion';
import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { ShowcaseCard } from '../../components/WorkShowcase';
import Icons from './Icons';
import {
  Background,
  Content,
  ShowcaseContainer,
  Text36,
  WorkContent,
} from './styles';
import { TypeNode, TypeProjectMarkdown } from './types';

const Work = ({ id }: { id: string }) => {
  const data: TypeProjectMarkdown = useStaticQuery(graphql`
    query GetProjectsInfoQuerry {
      allMarkdownRemark(
        filter: {
          frontmatter: { title: { ne: null }, technologies: { ne: null } }
        }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          frontmatter {
            shortText
            longText
            technologies
            title
            date
            subTitle
          }
          id
        }
      }
    }
  `);
  return (
    <Background id={id}>
      <Content>
        <Icons />
        <AnimateSharedLayout>
          <WorkContent>
            <Text36>work</Text36>
            <ShowcaseContainer>
              {data.allMarkdownRemark.nodes.map((x: TypeNode) => {
                const { title, technologies, shortText, longText, subTitle } =
                  x.frontmatter;
                return (
                  <ShowcaseCard
                    id={x.id}
                    title={title}
                    shortText={shortText}
                    longText={longText}
                    subTitle={subTitle}
                    technologies={technologies}
                  />
                );
              })}
            </ShowcaseContainer>
          </WorkContent>
        </AnimateSharedLayout>
      </Content>
    </Background>
  );
};

export default Work;