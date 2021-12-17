import React from 'react';
import styled from 'styled-components';
import Github from '../../images/Github.svg';
import Linkedin from '../../images/Linkedin.svg';
import { HR } from './styles';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 35px;
`;

const ListItem = styled.li`
  font-family: Quicksand;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;
`;

const LinkList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  width: 25%;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 10%;
  justify-content: space-between;
`;

const IconStyles = { cursor: 'pointer' };

export default function Navbar() {
  return (
    <>
      <Container>
        <LinkList>
          <ListItem>work</ListItem>
          <ListItem>about</ListItem>
          <ListItem>contact</ListItem>
        </LinkList>
        <IconContainer>
          <Github style={IconStyles} />
          <Linkedin style={IconStyles} />
        </IconContainer>
      </Container>
      {/* <HR /> */}
    </>
  );
}
