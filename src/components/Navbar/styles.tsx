import styled from 'styled-components';
import { ScreenSizes } from '../../config/ScreenSizes';

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 20vh;
  z-index: 2;

  @media screen and (max-width: ${ScreenSizes.TABLET}) {
    min-height: 15vh;
  }
`;

export const ListItem = styled.li<{ gridColumn: number }>`
  font-family: Quicksand;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;
  text-decoration: none;
  color: black;
  grid-column: ${(props) => props.gridColumn};
`;

export const LinkList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-gap: 50px;
  /* width: 25%; */
  justify-items: center;
  align-items: center;
  @media screen and (max-width: ${ScreenSizes.PHONE_LARGE}) {
    grid-gap: 10px;
  }
`;

export const IconContainer = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 40px;

  @media screen and (max-width: 425px) {
    grid-gap: 10px;
  }
`;

export const HR = styled.hr`
  display: flex;
  flex-grow: 0;
  border: none;
`;
