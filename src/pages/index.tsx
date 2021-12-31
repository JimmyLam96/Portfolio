import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyles';
import Home from './Home/Home';
import About from './About/About';

// styles
const Main = styled.div.attrs({ className: 'Main' })`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-family: -apple-system, Roboto, sans-serif, serif;
  overscroll-behavior: none;
`;
// markup
const App = () => {
  return (
    <Main>
      <GlobalStyle />
      <title>Jimmy Lam</title>
      <Home />
      <About />
    </Main>
  );
};

export default App;
