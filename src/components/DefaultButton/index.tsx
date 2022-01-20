import React from 'react';
import { Content, Text } from './styles';
import Arrow from '../../images/SVG/Arrow.svg';
import { AnimationControls, useAnimation } from 'framer-motion';

const Variants = {
  initial: {
    backgroundColor: 'none',
  },
  animate: {
    backgroundColor: '#9aff86da',
  },
};

export default function DefaultButton({
  controls,
  className,
  children,
  href,
  onClick,
}: {
  controls?: AnimationControls;
  className?: string;
  children: any;
  href?: string;
  onClick?: () => void;
}) {
  return (
    <Content
      variants={Variants}
      className={className}
      href={href}
      onClick={() => onClick && onClick()}
      animate={controls}
    >
      <Text>{children}</Text>
      <Arrow />
    </Content>
  );
}
