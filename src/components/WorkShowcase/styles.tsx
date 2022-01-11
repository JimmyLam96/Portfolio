import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import styled, { css } from 'styled-components';
import { DefaultColors } from '../../config/DefaultColors';
import { DefaultText24 } from '../../config/DefaulTextSizes';
import { ScreenSizes } from '../../config/ScreenSizes';

export const RoundedRectangle = styled(motion.div)<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.isSelected ? 'space-around' : 'space-evenly'};
  padding: 15px 25px;
  border-radius: 13px;
  background-color: ${(props) =>
    props.isSelected ? '#FFFFFF' : DefaultColors.Secondary};
  box-shadow: 0px 7px 50px 2px #0000001a;
  max-width: 60%;
`;

export const Title = styled(DefaultText24)`
  color: ${DefaultColors.Paragraph};
`;

export const SubTitle = styled(DefaultText24)`
  text-align: right;
  color: ${DefaultColors.Tertairy};
`;

export const ImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  overflow: hidden;
  max-width: 30%;
  z-index: 1;
`;

export const ContentBounds = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  max-width: 380px;
  align-self: flex-end;
  gap: 35px;
`;

export const CardContent = styled(motion.div)<{ isSelected: boolean }>`
  position: relative;
  width: 100%;
  max-width: 700px;
  gap: 0;
  display: flex;
  justify-content: space-evenly;
  ${(props) =>
    props.isSelected &&
    css`
      height: 375px;
      justify-content: center;
    `}
`;

export const Card = styled.div`
  flex: 0 0 50%;
  padding: 10px;
  @media only screen and (max-width: ${ScreenSizes.LAPTOP}) {
    flex: 1 0 100%;
  }
`;

export const Overlay = styled(motion.div)<{ isSelected: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.isSelected &&
    css`
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      display: flex;
      z-index: 2;
      background: rgba(0, 0, 0, 0.2);
    `}
`;

export const HR = styled.hr`
  width: 100%;
  border: none;
  height: 2px;
  background-color: ${DefaultColors.Secondary};
`;

export const Technology = styled.div`
  background-color: ${DefaultColors.Secondary};
  border-radius: 10px;
  padding: 5px 10px;
  color: ${DefaultColors.Paragraph};
`;

export const TechnologyContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
`;

export const FooterContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
