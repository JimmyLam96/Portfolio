import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { DefaultColors } from '../../config/DefaultColors';
import { DefaultText24 } from '../../config/DefaulTextSizes';

export const RoundedRectangle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 15px 25px;
  border-radius: 13px;
  background-color: ${DefaultColors.Secondary};
  box-shadow: 0px 7px 50px 2px #0000001a;
  width: 350px;
`;

export const Title = styled(DefaultText24)`
  color: ${DefaultColors.Paragraph};
`;

export const SubTitle = styled(DefaultText24)`
  text-align: right;
  color: ${DefaultColors.Tertairy};
`;

export const Content = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const ImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  overflow: hidden;
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
`;
