import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyles';
import About from './About';
import Work from './Work';
import { ShowcaseProvider } from '../providers/ShowcaseProvider/ShowcaseProvider';
import Home from './Home';
import Contact from './Contact';
import Layout from '../components/Layout/Layout';

// markup
const App = () => {
  return (
    <ShowcaseProvider>
      <Layout>
        <Home id="home" />
        <About id="about" />
        <Work id="work" />
        <Contact id="contact" />
      </Layout>
    </ShowcaseProvider>
  );
};

export default App;
