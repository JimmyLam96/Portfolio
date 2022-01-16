import React from 'react';
import styled from 'styled-components';
import { ScreenSizes } from '../../config/ScreenSizes';
import Github from '../../images/SVG/Github.svg';
import Linkedin from '../../images/SVG/Linkedin.svg';
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 35px;
  z-index: 1;

  @media screen and (max-width: ${ScreenSizes.TABLET}) {
    margin-bottom: 50px;
  }
`;

const ListItem = styled.li<{ gridColumn: number }>`
  font-family: Quicksand;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;
  text-decoration: none;
  color: black;
  grid-column: ${(props) => props.gridColumn};
`;

const LinkList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-gap: 50px;
  /* width: 25%; */
  justify-items: center;
  align-items: center;
  @media screen and (max-width: ${ScreenSizes.PHONEL}) {
    grid-gap: 10px;
  }
`;

const IconContainer = styled.div`
  display: grid;
  align-items: center;
  /* width: 10%; */
  grid-gap: 20px;
`;

export default function Navbar() {
  return (
    <Container>
      <LinkList>
        <ListItem gridColumn={1} onClick={() => scrollTo('#work')}>
          work
        </ListItem>
        <ListItem gridColumn={2} onClick={() => scrollTo('#about')}>
          about
        </ListItem>
        <ListItem gridColumn={3} onClick={() => scrollTo('#contact')}>
          contact
        </ListItem>
      </LinkList>
      <IconContainer>
        <Github style={{ cursor: 'pointer', gridColumn: 1 }} />
        <Linkedin style={{ cursor: 'pointer', gridColumn: 2 }} />
      </IconContainer>
    </Container>
  );
}
