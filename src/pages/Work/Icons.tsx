import React from 'react';
import YellowWaves from '../../images/SVG/YellowWaves.svg';
import PurpleCircle from '../../images/SVG/PurpleCircle.svg';
import Polka from '../../images/SVG/Polka.svg';
import Waves from '../../images/SVG/Waves.svg';
import YellowMoon from '../../images/SVG/YellowMoon.svg';
import { IconsContainer } from './styles';

export default function Icons() {
  return (
    <IconsContainer>
      <YellowWaves style={{ alignSelf: 'center' }} />
      <PurpleCircle />
      <Polka />
      <Waves />
      <YellowMoon style={{ alignSelf: 'center' }} />
    </IconsContainer>
  );
}
