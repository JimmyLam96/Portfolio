import { motion } from 'framer-motion';
import styled from 'styled-components';
import { DefaultColors, SVGColors } from '../../config/DefaultColors';
import { DefaultText36 } from '../../config/DefaulTextSizes';
import { ScreenSizes } from '../../config/ScreenSizes';
import DotsIcon from '../../images/SVG/Dots.svg';
import PolkaIcon from '../../images/SVG/Polka.svg';
import WavesIcon from '../../images/SVG/Waves.svg';
import MoonIcon from '../../images/SVG/Moon.svg';
import StairsIcon from '../../images/SVG/Stairs.svg';

export const Background = styled.section`
  font-weight: 600;
  font-size: 1.5em;
  text-align: center;
  background-color: ${DefaultColors.Tertairy};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 0 4rem;
  @media screen and (max-width: 826px) {
    padding: 0 2rem;
  }
  @media screen and (max-width: ${ScreenSizes.PHONE_SMALL}) {
    padding: 0 1rem;
  }
`;

export const ShowcaseContainer = styled(motion.div)`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  margin: 30px 0;
`;

export const Text36 = styled(DefaultText36)`
  align-self: flex-start;
`;

export const IconsContainer = styled.div`
  inset: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  align-self: center;
  min-height: 20vh;
`;

export const WorkContent = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-width: 1400px;
`;

export const Stairs = styled(StairsIcon)`
  position: absolute;
  left: 14%;
  top: 10%;
`;

export const Dots = styled(DotsIcon)`
  position: absolute;
  left: 28%;
  top: 20%;
`;

export const Polka = styled(PolkaIcon)`
  position: absolute;
  left: 42%;
  transform: scale(0.8);
  top: 15%;
`;

export const Waves = styled(WavesIcon)`
  position: absolute;
  left: 56%;
  top: 10%;
`;

export const StairsTwo = styled(StairsIcon)`
  position: absolute;
  left: 70%;
  transform: rotate(270deg);
  top: 20%;
`;

export const Moon = styled(MoonIcon)`
  position: absolute;
  left: 84%;
  filter: ${SVGColors.Button};
  top: 7%;
`;
