import React from 'react';
import Github from '../../images/SVG/Github.svg';
import Linkedin from '../../images/SVG/Linkedin.svg';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Content, LinkList, ListItem, IconContainer } from './styles';
import { navigate } from 'gatsby';

export default function Navbar() {
  return (
    <Content>
      <LinkList>
        <ListItem gridColumn={1} onClick={() => scrollTo('#about')}>
          about
        </ListItem>
        <ListItem gridColumn={2} onClick={() => scrollTo('#work')}>
          work
        </ListItem>
        <ListItem gridColumn={3} onClick={() => scrollTo('#contact')}>
          contact
        </ListItem>
      </LinkList>
      <IconContainer>
        <Github
          style={{ cursor: 'pointer', gridColumn: 1 }}
          onClick={() => navigate('https://github.com/JimmyLam96')}
        />
        <Linkedin
          style={{ cursor: 'pointer', gridColumn: 2 }}
          onClick={() =>
            navigate('https://www.linkedin.com/in/jimmy-lam-130766b2/')
          }
        />
      </IconContainer>
    </Content>
  );
}
