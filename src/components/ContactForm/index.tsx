import React from 'react';
import { Content, Input } from './styles';
import { DefaultText22 } from '../../config/DefaulTextSizes';

export default function ContactForm({
  type,
  size,
}: {
  type: string;
  size: 'small' | 'large';
}) {
  return (
    <Content size={size}>
      <DefaultText22>{type}</DefaultText22>
      <Input />
    </Content>
  );
}
