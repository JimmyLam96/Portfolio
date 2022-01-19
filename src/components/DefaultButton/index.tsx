import React from 'react';
import { Content, Text } from './styles';
import Arrow from '../../images/SVG/Arrow.svg';

export default function DefaultButton({
  children,
  href,
}: {
  children: any;
  href?: string;
}) {
  return (
    <Content href={href}>
      <Text>{children}</Text>
      <Arrow />
    </Content>
  );
}
