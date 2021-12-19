import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Profile = styled(motion.div)`
  display: grid;
  grid-column: 5 / 7;
  /* margin-top: 40px; */
  position: relative;
`;

export const Border = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  border: 5px solid #ffd803;
`;

export const Background = styled(motion.div)`
  position: absolute;
  /* border: 5px solid red; */
  width: 100%;
  height: 100%;
  /* display: grid; */
  /* width: 100%; */
  /* height: 100%; */
  /* grid-template-columns: repeat(20, 1fr); */
  /* grid-template-rows: repeat(20, 1fr); */
  /* min-width: 0; */
  /* min-height: 0; */
  /* z-index: -1; */
`;

export const MoonDiv = styled(motion.div)`
  position: absolute;
  top: -30%;
  left: 80%;
  width: 80px;
  height: 80px;
  z-index: -1;
`;

export const WavesDiv = styled(motion.div)`
  position: absolute;
  top: -50%;
  left: 0;
  width: 80px;
  height: 80px;
  z-index: -1;
`;
