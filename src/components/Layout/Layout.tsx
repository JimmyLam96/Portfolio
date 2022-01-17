import React from 'react';
import GlobalStyle from '../../../styles/GlobalStyles';
import { Content } from './styles';

//simple component that houses all the default styles for *, html, body
export default function Layout({ children }: { children: any }) {
  return (
    <>
      <GlobalStyle />
      <Content>{children}</Content>
    </>
  );
}
