import { motion } from 'framer-motion';
import styled from 'styled-components';
import { DefaultColors } from '../../config/DefaultColors';
import { DefaultText36 } from '../../config/DefaulTextSizes';
import { ScreenSizes } from '../../config/ScreenSizes';

export const Background = styled.section`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  font-size: 1.5em;
  text-align: center;
  background-color: ${DefaultColors.Tertairy};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  gap: 30px;
  height: fit-content;
  max-width: 1400px;
  padding: 1rem;

  @media screen and (max-width: ${ScreenSizes.LAPTOP}) {
    width: 100%;
  }
`;

export const ShowcaseContainer = styled(motion.div)`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  max-width: 1400px;
  width: 100%;
`;

export const Text36 = styled(DefaultText36)`
  align-self: flex-start;
`;
