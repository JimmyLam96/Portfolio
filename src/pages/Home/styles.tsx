import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import HomePageBG from '../../images/HomePageBG.svg';

export const Content = styled.section`
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
  display: grid;
  grid-gap: 1fr;
  grid-template-columns: repeat(7, 1fr);
  flex-grow: 1;
  align-items: center;
`;

export const Border = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  border: 5px solid #ffd803;
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
  width: 100vw;
  height: 100%;
  max-height: 1500px;
`;

export const Background = styled(motion.div)`
  position: absolute;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(20, 1fr);
  min-width: 0;
  min-height: 0;
  z-index: -1;
`;

export const MoonDiv = styled(motion.div)`
  grid-column: 16 / 18;
  grid-row: 4 / 7;
  width: 100%;
  height: auto;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const WavesDiv = styled(motion.div)`
  grid-column: 12 / 14;
  grid-row: 3 / 5;
  width: 100%;
  height: auto;
  padding: 10px;
  display: flex;
  align-items: center;
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

export const Profile = styled(motion.div)`
  display: grid;
  grid-column: 5 / 7;
  margin-top: 40px;
  position: relative;
`;
