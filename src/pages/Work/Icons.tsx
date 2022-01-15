import React from 'react';
import YellowWaves from '../../images/SVG/YellowWaves.svg';
import PurpleCircle from '../../images/SVG/PurpleCircle.svg';
import Polka from '../../images/SVG/Polka.svg';
import Waves from '../../images/SVG/Waves.svg';
import YellowMoon from '../../images/SVG/YellowMoon.svg';

export default function Icons() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        top: -130,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignSelf: 'center',
      }}
    >
      <YellowWaves />
      <PurpleCircle />
      <Polka />
      <Waves />
      <YellowMoon />
    </div>
  );
}
