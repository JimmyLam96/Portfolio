import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 50px;
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #e3f6f5;
  padding: 10% 5%;
`;

export const Sports = styled(motion.div)`
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
  align-self: flex-end;
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
