import React from 'react';
import { Content, Input } from './styles';
import { DefaultText22 } from '../../config/DefaulTextSizes';

export default function ContactForm({
  name,
  type,
  size,
}: {
  name: string;
  type: string;
  size: 'small' | 'large';
}) {
  return (
    <Content size={size}>
      <DefaultText22>{type}</DefaultText22>
      <Input name={name} />
    </Content>
  );
}
