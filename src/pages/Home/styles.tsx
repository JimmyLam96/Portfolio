import styled from 'styled-components';
import HomePageBG from '../../images/HomePageBG.svg';

export const Content = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-weight: 600;
  font-size: 1.5em;
  text-align: center;
  box-sizing: border-box;
  overflow: hidden;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 50px;
`;

export const BG = styled(HomePageBG)`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 500px;
`;
