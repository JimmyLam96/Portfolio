import styled from 'styled-components';
import { motion } from 'framer-motion';
import ScreenSizes from '../../../config/ScreenSizes';
import DefaultButton from '../../../components/DefaultButton';

const H1 = styled.h1`
  font-family: Quicksand;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;
  margin: 10px 0;
`;

export const EmojiContainer = styled(motion.div)`
  display: flex;
  width: fit-content;
`;

export const H2 = styled.h2`
  font-family: Quicksand;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;
  margin: 15px 0;
`;

export const Content = styled.div`
  flex: 1;
  @media screen and (max-width: ${ScreenSizes.TABLET}) {
    margin-top: 50px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  max-width: 200px;
`;

export const CircleContainer = styled(motion.div)`
  position: relative;
  width: 100px;
  z-index: -1;
`;
