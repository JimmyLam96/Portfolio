import { AnimateSharedLayout, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { ShowcaseCard } from '../../components/WorkShowcase/WorkShowcase';
import { DefaultText18 } from '../../config/DefaulTextSizes';
import { Content, ShowcaseContainer } from './styles';
import WorkInfo from './workInfo';

const Work = () => {
  return (
    <Content className="Content">
      <AnimateSharedLayout>
        <DefaultText18>work</DefaultText18>
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
  );
};

export default Work;
