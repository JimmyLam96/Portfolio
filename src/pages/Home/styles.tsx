import { motion } from 'framer-motion';
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
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 50px;
`;

export const BG = styled(HomePageBG)`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 500px;
`;

export const Background = styled(motion.div)`
  position: absolute;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  /* z-index: -1; */
`;

export const MoonDiv = styled(motion.div)`
  grid-column: 8;
  grid-row: 4;
`;

export const WavesDiv = styled(motion.div)`
  grid-column: 6;
  grid-row: 2;
`;

export const PolkaDiv = styled(motion.div)`
  grid-column: 9;
  grid-row: 9;
`;
