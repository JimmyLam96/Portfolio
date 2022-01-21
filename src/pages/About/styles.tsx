import { motion } from 'framer-motion';
import styled from 'styled-components';
import { DefaultColors, SVGColors } from '../../config/DefaultColors';
import { DefaultText18 } from '../../config/DefaulTextSizes';
import { ScreenSizes } from '../../config/ScreenSizes';
import { DefaultBorder } from '../Home/RightContent/styles';
import PersonalPolka from '../../images/SVG/PersonalPolka.svg';
import WavesIcon from '../../images/SVG/Waves.svg';
import MoonIcon from '../../images/SVG/Moon.svg';
import DotsIcon from '../../images/SVG/Dots.svg';
import WorkPolkaIcon from '../../images/SVG/WorkPolka.svg';

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  min-height: 20vh;
`;

export const Text36 = styled.span`
  font-family: Quicksand;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 45px;
  letter-spacing: 0em;
  text-align: left;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Background = styled.div`
  width: 100%;
  background-color: ${DefaultColors.Secondary};
  display: flex;
  justify-content: center;
`;

export const Occupation = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${DefaultColors.Tertairy};
  width: 100%;
  max-width: 335px;
  height: 335px;
  border-radius: 14px;
  padding: 1rem;
  gap: 10px;
  z-index: 1;
`;

export const Personal = styled(Occupation)`
  background-color: white;
  align-self: center;
`;

export const Coding = styled(Occupation)`
  background-color: ${DefaultColors.Paragraph};
  z-index: 1;
`;

export const Border = styled(DefaultBorder)`
  position: absolute;
  z-index: 0;
  border-radius: 13px;
  @media screen and (max-width: ${ScreenSizes.TABLET}) {
    display: none;
  }
`;

export const Grid = styled(motion.div)`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-template-rows: 500px;
  grid-gap: 30px;
  min-height: 80vh;

  @media screen and (max-width: 777px) {
    grid-template-rows: 1fr;
  }
`;

const IconContainer = styled(motion.div)`
  position: absolute;

  @media screen and (max-width: ${ScreenSizes.LAPTOP}) {
    display: none;
  }
`;

export const DotsContainer = styled(IconContainer)`
  left: 85%;
  top: -20%;
`;

export const Dots = styled(DotsIcon)`
  filter: ${SVGColors.Button};
`;

export const WorkPolkaContainer = styled(IconContainer)`
  left: -17%;
  top: 66%;
`;

export const WorkPolka = styled(WorkPolkaIcon)``;

export const MoonContainer = styled(IconContainer)`
  top: -50%;
  right: 70%;
`;

export const Moon = styled(MoonIcon)``;

export const YellowPolkaContainer = styled(IconContainer)`
  top: -24%;
  left: -17%;
`;

export const YellowPolka = styled(PersonalPolka)`
  transform: scale(0.8);
`;

export const WavesContainer = styled(IconContainer)`
  top: 115%;
  left: 90%;
`;

export const Waves = styled(WavesIcon)`
  filter: ${SVGColors.Tertairy};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 7rem; */
  padding: 5%;
  width: 100%;
  max-width: 1800px;
  justify-content: space-evenly;
`;

export const CodingBorder = styled(motion.div)`
  display: flex;
  position: relative;
  align-self: flex-end;
  width: fit-content;
`;

export const CodingText = styled(DefaultText18)`
  color: ${DefaultColors.Secondary};
`;

export const PersonalText = styled(DefaultText18)`
  color: ${DefaultColors.Paragraph};
`;
