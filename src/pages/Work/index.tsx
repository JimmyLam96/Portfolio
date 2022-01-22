import { AnimateSharedLayout, useAnimation } from 'framer-motion';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { ShowcaseCard } from '../../components/WorkShowcase';
import { DefaultText36 } from '../../config/DefaultTextSizes';
import Icons from '../../page-components/Work/icons';
import {
  Background,
  Content,
  ShowcaseContainer,
  WorkContent,
  Header,
} from '../../page-components/Work/styles';
import { TypeNode } from '../../page-components/Work/types';

const Work = ({ id }: { id: string }) => {
  const data = useStaticQuery(graphql`
    query GetProjectsInfoQuerry {
      allMarkdownRemark(
        filter: {
          frontmatter: { technologies: { ne: null }, title: { ne: null } }
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
            slug
          }
          id
        }
      }
      allFile(filter: { relativeDirectory: { eq: "PNG" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
          absolutePath
        }
      }
    }
  `);

  return (
    <Background id={id}>
      <Content>
        <Icons />
        <AnimateSharedLayout>
          <Header>
            <DefaultText36>work</DefaultText36>
          </Header>
          <WorkContent>
            <ShowcaseContainer>
              {data.allMarkdownRemark.nodes.map(
                (x: TypeNode, index: number) => {
                  const {
                    title,
                    technologies,
                    shortText,
                    longText,
                    subTitle,
                    slug,
                  } = x.frontmatter;
                  const imageSrc = data.allFile.nodes.find((x: any) =>
                    x.absolutePath.includes(slug),
                  );
                  const image = getImage(
                    imageSrc.childImageSharp.gatsbyImageData,
                  );
                  if (!image) return;
                  return (
                    <ShowcaseCard
                      key={index}
                      id={x.id}
                      title={title}
                      shortText={shortText}
                      longText={longText}
                      subTitle={subTitle}
                      technologies={technologies}
                      imageSrc={image}
                    />
                  );
                },
              )}
            </ShowcaseContainer>
          </WorkContent>
        </AnimateSharedLayout>
      </Content>
    </Background>
  );
};

export default Work;
