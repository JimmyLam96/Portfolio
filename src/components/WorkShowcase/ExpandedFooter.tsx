import { motion } from 'framer-motion';
import React from 'react';
import { DefaultText14 } from '../../config/DefaulTextSizes';
import { FooterContent, HR, Technology, TechnologyContainer } from './styles';

const Variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function ExpandedFooter({
  technologies,
}: {
  technologies: string[];
}) {
  return (
    <FooterContent variants={Variants} initial="initial" animate="show">
      <HR />
      <TechnologyContainer>
        {technologies.map((x: string) => {
          return (
            <Technology>
              <DefaultText14>{x}</DefaultText14>
            </Technology>
          );
        })}
      </TechnologyContainer>
    </FooterContent>
  );
}
