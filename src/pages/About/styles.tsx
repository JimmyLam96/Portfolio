import { motion } from 'framer-motion';
import styled from 'styled-components';
import { DefaultBorder } from '../Home/RightContent/styles';

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const Text36 = styled.span`
  font-family: Quicksand;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 45px;
  letter-spacing: 0em;
  text-align: left;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Background = styled.div`
  width: 100%;
  background-color: #e3f6f5;
`;

export const Sports = styled(motion.div)`
  position: relative;
  background-color: #bae8e8;
  width: 335px;
  height: 307px;
  border-radius: 14px;
`;

export const SmallBusiness = styled(Sports)`
  background-color: white;
  align-self: center;
`;

export const Coding = styled(Sports)`
  background-color: #2d334a;
  z-index: 1;
`;

export const Border = styled(DefaultBorder)`
  position: absolute;
  z-index: 0;
  border-radius: 13px;
  /* top: 0; */
  /* left: 0; */
`;

export const Grid = styled(motion.div)`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(335px, 1fr));
  grid-template-rows: 500px;
  grid-gap: 30px;

  @media screen and (max-width: ${'777px'}) {
    grid-template-rows: 1fr;
  }
`;

export const YellowStairsContainerRight = styled(motion.div)`
  position: absolute;
  left: 90%;
  top: 120%;
`;

export const YellowStairsContainerLeft = styled(motion.div)`
  position: absolute;
  left: 0;
  top: -30%;
`;

export const PurplePolkaContainer = styled(motion.div)`
  position: absolute;
  left: -20%;
  top: 85%;
`;

export const PurpleCircleContainer = styled(motion.div)`
  position: absolute;
  left: 85%;
  top: -20%;
`;

export const HamburgerMenuContainer = styled(motion.div)`
  position: absolute;
  top: -40%;
  left: 80%;
`;

export const MoonContainer = styled(motion.div)`
  position: absolute;
  top: -70%;
  width: 89px;
  height: 89px;
`;

export const YellowPolkaContainer = styled(motion.div)`
  position: absolute;
  top: -28%;
  left: -17%;
`;

export const WavesContainer = styled(motion.div)`
  position: absolute;
  top: 130%;
  left: 90%;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7rem;
  padding: 5%;
  width: 100%;
  max-width: 1800px;
`;

export const CodingBorder = styled(motion.div)`
  display: flex;
  position: relative;
  align-self: flex-end;
  width: fit-content;
`;
