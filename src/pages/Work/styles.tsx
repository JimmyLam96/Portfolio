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
  width: 100%;
  gap: 30px;
  padding: 0 4rem;
  @media screen and (max-width: 826px) {
    padding: 0 2rem;
  }
  @media screen and (max-width: ${ScreenSizes.PHONE_SMALL}) {
    padding: 0 1rem;
  }
`;

export const ShowcaseContainer = styled(motion.div)`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  margin: 30px 0;
`;

export const Text36 = styled(DefaultText36)`
  align-self: flex-start;
`;

export const IconsContainer = styled.div`
  inset: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  align-self: center;
  min-height: 20vh;
`;

export const WorkContent = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-width: 1400px;
`;
