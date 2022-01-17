import { motion } from 'framer-motion';
import styled from 'styled-components';
import { DefaultColors } from '../../config/DefaultColors';
import { ScreenSizes } from '../../config/ScreenSizes';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${DefaultColors.Secondary};
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: ${DefaultColors.Secondary};
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  height: 100%;
  flex: 0.5;
  padding: 2rem;
`;

export const Right = styled.div`
  display: flex;
  background-color: blue;
  height: 100%;
  flex: 0.5;
  flex-direction: column;
  justify-content: space-around;
  padding: 2rem;
`;

export const ContactArrowContainer = styled(motion.div)`
  display: flex;
`;

export const GetInContactContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  gap: 20px;
  /* @media screen and (max-width: ${ScreenSizes.LAPTOP}) {
    
  } */
`;
