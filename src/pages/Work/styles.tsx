import { motion } from 'framer-motion';
import styled from 'styled-components';
import { DefaultColors } from '../../config/DefaultColors';
import { DefaultText36 } from '../../config/DefaulTextSizes';
import { ScreenSizes } from '../../config/ScreenSizes';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  gap: 30px;
  height: 70%;
  max-width: 1400px;
  margin-bottom: 40px;
  width: 90%;

  @media screen and (max-width: ${ScreenSizes.LAPTOP}) {
    width: 100%;
  }
`;

export const Background = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
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
  justify-content: space-between;
  position: relative;
  max-width: 1400px;
  height: 100%;
  width: 100%;
`;

export const Text36 = styled(DefaultText36)`
  align-self: flex-start;
`;
