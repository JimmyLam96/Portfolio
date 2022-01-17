import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ScreenSizes } from '../../config/ScreenSizes';
import HomePageBG from '../../images/SVG/HomePageBG.svg';

export const Background = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-weight: 600;
  font-size: 1.5em;
  text-align: center;
  overflow: hidden;
  align-items: center;
`;

export const InnerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap-reverse;
  min-height: 70vh;

  @media screen and (max-width: ${ScreenSizes.TABLET}) {
    justify-content: space-evenly;
  }
  @media screen and (max-width: ${ScreenSizes.LAPTOP}) {
    max-width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 4rem;
  @media screen and (max-width: 826px) {
    padding: 0 2rem;
  }
  @media screen and (max-width: ${ScreenSizes.PHONE_SMALL}) {
    padding: 0 1rem;
  }
`;

export const BG = styled(HomePageBG)`
  z-index: -2;
  position: absolute;
  width: 100%;
  height: 100%;
  max-height: 1500px;
`;

export const PolkaDiv = styled(motion.div)`
  grid-column: 18 / 21;
  grid-row: 17 / 20;
  width: 100%;
  height: auto;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const CircleDiv = styled(motion.div)`
  grid-column: 2 / 5;
  grid-row: 7 / 10;
  width: 100%;
  height: auto;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10vh;
`;
