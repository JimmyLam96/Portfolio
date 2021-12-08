import React, { createRef, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyles';
import { gsap } from 'gsap';
import Work from './Work/Work';
import Home from './Home/Home';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// styles
const Main = styled.main.attrs({ className: 'Main' })`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-family: -apple-system, Roboto, sans-serif, serif;
  /* display: flex; */
  flex-wrap: nowrap;
  overscroll-behavior: none;
  /* overflow: hidden; */
`;

const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.5em;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
`;

// markup
const App = () => {
  // const homeRef = useRef(document.createElement('div'));
  // const pageRef = useRef(document.createElement('section'));

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   const array = gsap.utils.toArray('.page');
  //   gsap.to(array, {
  //     xPercent: -100 * (array.length - 1),
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: homeRef.current,
  //       pin: true,
  //       scrub: 1,
  //       snap: 1 / (array.length - 1),
  //       end: () => '+=' + pageRef.current.offsetWidth,
  //     },
  //   });
  // }, []);

  return (
    <Main>
      <GlobalStyle />
      <title>Jimmy Lam</title>
      <Home />
      <Work props={{}} />
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
