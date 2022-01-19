import React from 'react';
import { Content, Text } from './styles';
import Arrow from '../../images/SVG/Arrow.svg';

export default function Button({ children }: { children: any }) {
  return (
    <Content>
      <Text>{children}</Text>
      <Arrow />
    </Content>
  );
}
