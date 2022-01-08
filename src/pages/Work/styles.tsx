import { motion } from 'framer-motion';
import styled from 'styled-components';
import { DefaultColors } from '../../config/DefaultColors';

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

export const ShowCaseContainer = styled(motion.div)`
  display: grid;
  width: 75%;
  grid-gap: 50px;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(580px, 1fr));
`;
