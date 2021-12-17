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
`;

export const InnerContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 2;
  justify-content: space-between;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 80px;
`;

export const BG = styled(HomePageBG)`
  z-index: -2;
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
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(20, 1fr);
  min-width: 0;
  min-height: 0;
  z-index: -1;
`;

export const MoonDiv = styled(motion.div)`
  grid-column: 16 / 18;
  grid-row: 5 / 8;
  width: 100%;
  height: auto;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const WavesDiv = styled(motion.div)`
  grid-column: 12 / 14;
  grid-row: 3 / 6;
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

export const Profile = styled.div`
  border-radius: 20px;
  margin-right: 25%;
`;
