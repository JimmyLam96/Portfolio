import { AnimateSharedLayout, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { ShowcaseCard } from '../../components/WorkShowcase';
import Icons from './Icons';
import { Background, Content, ShowcaseContainer, Text36 } from './styles';
import WorkInfo from './workInfo';

const Work = ({ id }: { id: string }) => {
  return (
    <Background id={id}>
      <Content>
        <Icons />
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
              title={WorkInfo.CashUp.title}
              shortText={WorkInfo.CashUp.shortText}
              longText={WorkInfo.CashUp.longText}
              id={1}
              technologies={WorkInfo.CashUp.technologies}
            />
            <ShowcaseCard
              title={WorkInfo.LetsCalendar.title}
              shortText={WorkInfo.LetsCalendar.shortText}
              longText={WorkInfo.LetsCalendar.longText}
              id={2}
              technologies={WorkInfo.LetsCalendar.technologies}
            />
            <ShowcaseCard
              title={WorkInfo.GPT.title}
              shortText={WorkInfo.GPT.shortText}
              longText={WorkInfo.GPT.longText}
              id={3}
              technologies={WorkInfo.GPT.technologies}
            />
          </ShowcaseContainer>
        </AnimateSharedLayout>
      </Content>
    </Background>
  );
};

export default Work;
