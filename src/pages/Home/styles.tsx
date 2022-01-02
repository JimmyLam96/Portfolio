import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { ScreenSizes } from '../../config/ScreenSizes';
import HomePageBG from '../../images/HomePageBG.svg';

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-weight: 600;
  font-size: 1.5em;
  text-align: center;
  box-sizing: border-box;
  overflow: hidden;
  align-items: center;
`;

export const InnerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  max-width: 85%;
  @media screen and (max-width: ${ScreenSizes.TABLET}) {
    justify-content: space-evenly;
  }
  @media screen and (max-width: ${ScreenSizes.LAPTOP}) {
    max-width: 100%;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1800px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 5%;
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
