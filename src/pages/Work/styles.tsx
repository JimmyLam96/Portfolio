import { motion } from 'framer-motion';
import styled from 'styled-components';
import { DefaultColors } from '../../config/DefaultColors';

export const Content = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.5em;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  background-color: ${DefaultColors.Tertairy};
`;

export const Overlay = styled(motion.div)`
  z-index: 1;
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  will-change: opacity;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  /* max-width: 990px; */
`;
