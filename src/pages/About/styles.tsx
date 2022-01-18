import { motion } from 'framer-motion';
import styled from 'styled-components';
import { DefaultColors } from '../../config/DefaultColors';
import { DefaultText18 } from '../../config/DefaulTextSizes';
import { ScreenSizes } from '../../config/ScreenSizes';
import { DefaultBorder } from '../Home/RightContent/styles';

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

export const PurplePolkaContainer = styled(motion.div)`
  position: absolute;
  left: -20%;
  top: 85%;

  @media screen and (max-width: ${ScreenSizes.TABLET}) {
    display: none;
  }
`;

export const PurpleCircleContainer = styled(motion.div)`
  position: absolute;
  left: 85%;
  top: -20%;

  @media screen and (max-width: ${ScreenSizes.TABLET}) {
    display: none;
  }
`;

export const MoonContainer = styled(motion.div)`
  position: absolute;
  top: -50%;
  right: 70%;
  width: 89px;
  height: 89px;

  @media screen and (max-width: ${ScreenSizes.TABLET}) {
    display: none;
  }
`;

export const YellowPolkaContainer = styled(motion.div)`
  position: absolute;
  top: -28%;
  left: -17%;

  @media screen and (max-width: ${ScreenSizes.TABLET}) {
    display: none;
  }
`;

export const WavesContainer = styled(motion.div)`
  position: absolute;
  top: 115%;
  left: 90%;

  @media screen and (max-width: ${ScreenSizes.TABLET}) {
    display: none;
  }
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
