import { motion } from 'framer-motion';
import styled from 'styled-components';
import { DefaultColors } from '../../config/DefaultColors';
import { ScreenSizes } from '../../config/ScreenSizes';

export const Content = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  font-size: 1.5em;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  background-color: ${DefaultColors.Tertairy};
`;

export const ShowcaseContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  height: 80%;
  width: 90%;

  @media screen and (max-width: ${ScreenSizes.LAPTOP}) {
    width: 100%;
  }
`;
