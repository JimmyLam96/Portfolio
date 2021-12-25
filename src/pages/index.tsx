import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyles';
import Work from './Work/Work';
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
  flex-wrap: nowrap;
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
      {/* <Work props={{}} /> */}
      {/* <Section
        style={{ backgroundColor: 'red' }}
        // ref={pageRef}
        className="page"
      >
        red
      </Section>
      <Section
        style={{ backgroundColor: 'blue' }}
        // ref={pageRef}
        className="page"
      >
        blue
      </Section>
      <Section
        style={{ backgroundColor: 'green' }}
        // ref={pageRef}
        className="page"
      >
        Green
      </Section> */}
    </Main>
  );
};

export default App;
