import { AnimateSharedLayout, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { ShowcaseCard } from '../../components/WorkShowcase/WorkShowcase';
import { Background, Content, ShowcaseContainer, Text36 } from './styles';
import WorkInfo from './workInfo';

const Work = () => {
  return (
    <Background>
      <Content>
        <AnimateSharedLayout>
          <Text36>work</Text36>
          <ShowcaseContainer>
            <ShowcaseCard
              title={WorkInfo.TSL.title}
              shortText={WorkInfo.TSL.shortText}
              longText={WorkInfo.TSL.longText}
              id={0}
              technologies={WorkInfo.TSL.technologies}
            />
            <ShowcaseCard
              title={WorkInfo.TSL.title}
              shortText={WorkInfo.TSL.shortText}
              longText={WorkInfo.TSL.longText}
              id={1}
              technologies={WorkInfo.TSL.technologies}
            />
            <ShowcaseCard
              title={WorkInfo.TSL.title}
              shortText={WorkInfo.TSL.shortText}
              longText={WorkInfo.TSL.longText}
              id={2}
              technologies={WorkInfo.TSL.technologies}
            />
            <ShowcaseCard
              title={WorkInfo.TSL.title}
              shortText={WorkInfo.TSL.shortText}
              longText={WorkInfo.TSL.longText}
              id={3}
              technologies={WorkInfo.TSL.technologies}
            />
          </ShowcaseContainer>
        </AnimateSharedLayout>
      </Content>
    </Background>
  );
};

export default Work;
