import React from 'react';
import { Content } from './styles';
import { DefaultText22 } from '../../config/DefaulTextSizes';

export default function ContactForm({ type }: { type: string }) {
  return (
    <Content>
      <DefaultText22>{type}</DefaultText22>
      <input></input>
    </Content>
  );
}
