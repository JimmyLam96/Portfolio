import { motion } from 'framer-motion';
import styled from 'styled-components';
import { DefaultColors, SVGColors } from '../../config/DefaultColors';
import { DefaultText36, DefaultText48 } from '../../config/DefaulTextSizes';
import { ScreenSizes } from '../../config/ScreenSizes';
import SignalIcon from '../../images/SVG/Signal.svg';
import MoonIcon from '../../images/SVG/Moon.svg';
import StairsIcon from '../../images/SVG/Stairs.svg';
import DotsIcon from '../../images/SVG/Dots.svg';
import WavesIcon from '../../images/SVG/Waves.svg';
import PolkaIcon from '../../images/SVG/Polka.svg';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${DefaultColors.Secondary};
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  background-color: ${DefaultColors.Secondary};
  flex-direction: row;
  min-height: 100vh;

  @media screen and (max-width: ${ScreenSizes.PHONE_LARGE}) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  width: 50%;

  @media screen and (max-width: ${ScreenSizes.PHONE_LARGE}) {
    width: 100%;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 4rem;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  @media screen and (max-width: ${ScreenSizes.TABLET}) {
    padding: 1rem;
  }
`;

export const Right = styled(Left)``;

export const RightContent = styled(LeftContent)`
  position: relative;
  padding: 4rem;
  @media screen and (max-width: ${ScreenSizes.TABLET}) {
    padding: 1rem;
  }
`;

export const ContactArrowContainer = styled(motion.div)`
  display: flex;
`;

export const GetInContactContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  gap: 20px;
`;

export const Text36 = styled(DefaultText36)`
  @media screen and (max-width: ${ScreenSizes.TABLET}) {
    font-size: 26px;
  }
`;

export const Text48 = styled(DefaultText48)`
  @media screen and (max-width: ${ScreenSizes.TABLET}) {
    font-size: 36px;
  }
`;

export const NameEmailContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const Signal = styled(SignalIcon)`
  position: absolute;
  top: -35px;
  left: 125px;
  @media screen and (max-width: ${ScreenSizes.TABLET}) {
    left: 90px;
  }
  @media screen and (max-width: ${ScreenSizes.PHONE_LARGE}) {
    display: none;
  }
`;

export const ContactContainer = styled.div`
  position: relative;
`;

export const Moon = styled(MoonIcon)`
  position: absolute;
  filter: ${SVGColors.Paragraph};
  top: 5%;
  right: 30%;
`;

export const Stairs = styled(StairsIcon)`
  position: absolute;
  left: 25%;
  top: 15%;
`;

export const Dots = styled(DotsIcon)`
  position: absolute;
  filter: ${SVGColors.Tertairy};
  left: 50%;
  top: 25%;
`;

export const Waves = styled(WavesIcon)`
  position: absolute;
  left: 20%;
  bottom: 15%;
  filter: ${SVGColors.Tertairy};
`;

export const Polka = styled(PolkaIcon)`
  position: absolute;
  transform: scale(0.6);
  right: 30%;
  bottom: 5%;
  filter: ${SVGColors.Paragraph};
`;

export const StairsTwo = styled(StairsIcon)`
  position: absolute;
  transform: rotate(270deg);
  right: 20%;
  bottom: 25%;
`;

export const IconContainer = styled.div`
  @media screen and (max-width: ${ScreenSizes.LAPTOP}) {
    display: none;
  }
`;
