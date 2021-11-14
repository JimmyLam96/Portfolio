import * as React from 'react';
import styled from 'styled-components';
import MainText from '../components/MainText/MainText';
import Navbar from '../components/Navbar';
import GlobalStyle from '../../styles/GlobalStyles';
import { gsap } from 'gsap';

// styles
const Main = styled.main`
  padding: 0;
  margin: 0;
  height: 100vh;
  box-sizing: border-box;
  font-family: -apple-system, Roboto, sans-serif, serif;
  background-image: url(../images/Background.svg);
`;

const Container = styled.div`
  padding: 5%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
`;

// markup
const App = () => {
  return (
    <Main>
      <GlobalStyle />
      <title>Jimmy Lam</title>
      <Container>
        <Navbar />
        <MainText />
      </Container>
    </Main>
  );
};

export default App;
