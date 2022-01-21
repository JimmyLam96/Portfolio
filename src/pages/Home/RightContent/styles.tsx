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

export const IconContainer = styled(motion.div)`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  @media screen and (max-width: ${ScreenSizes.LAPTOP}) {
    display: none;
  }
`;

export const MoonDiv = styled(motion.div)`
  position: absolute;
  top: -30%;
  left: 90%;
  z-index: -1;
`;

export const WavesDiv = styled(motion.div)`
  position: absolute;
  top: -50%;
  left: 70%;
  width: 80px;
  height: 80px;
  z-index: -1;
`;
