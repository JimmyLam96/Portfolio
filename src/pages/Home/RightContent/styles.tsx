import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ScreenSizes } from '../../../config/ScreenSizes';

export const Content = styled.div`
  display: flex;
  position: relative;
  width: fit-content;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 70%;
  z-index: 1;
  @media screen and (max-width: 826px) {
    justify-content: center;
  }
`;

export const ImageContainer = styled(motion.div)`
  position: relative;
  max-width: 300px;
  z-index: 1;
`;

export const DefaultBorder = styled(motion.div)`
  inset: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  border: 5px solid #ffd803;
  z-index: -1;
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
