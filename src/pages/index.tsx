import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyles';
import About from './About';
import Work from './Work';
import { ShowcaseProvider } from '../providers/ShowcaseProvider/ShowcaseProvider';
import Home from './Home';
import scrollTo from 'gatsby-plugin-smoothscroll';

// styles
const Main = styled.div.attrs({ className: 'Main' })`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-family: -apple-system, Roboto, sans-serif, serif;
  scroll-behavior: smooth;
`;
// markup
const App = () => {
  return (
    <ShowcaseProvider>
      <Main>
        <GlobalStyle />
        <title>Jimmy Lam</title>
        <Home id="home" />
        <About id="about" />
        <Work id="work" />
      </Main>
    </ShowcaseProvider>
  );
};

export default App;
