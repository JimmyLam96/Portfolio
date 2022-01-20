import { motion } from 'framer-motion';
import styled from 'styled-components';
import DefaultButton from '../../components/DefaultButton';
import { DefaultColors } from '../../config/DefaultColors';
import { DefaultText36, DefaultText48 } from '../../config/DefaulTextSizes';
import { ScreenSizes } from '../../config/ScreenSizes';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${DefaultColors.Secondary};
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  background-color: ${DefaultColors.Secondary};
  flex-direction: row;
  min-height: 100vh;

  @media screen and (max-width: ${ScreenSizes.PHONE_LARGE}) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  width: 50%;

  @media screen and (max-width: ${ScreenSizes.PHONE_LARGE}) {
    width: 100%;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 4rem;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  @media screen and (max-width: ${ScreenSizes.TABLET}) {
    padding: 1rem;
  }
`;

export const Right = styled(Left)``;

export const RightContent = styled(LeftContent)`
  padding: 4rem;
  @media screen and (max-width: ${ScreenSizes.TABLET}) {
    padding: 1rem;
  }
`;

export const ContactArrowContainer = styled(motion.div)`
  display: flex;
`;

export const GetInContactContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  gap: 20px;
`;

export const Text36 = styled(DefaultText36)`
  @media screen and (max-width: ${ScreenSizes.TABLET}) {
    font-size: 26px;
  }
`;

export const Text48 = styled(DefaultText48)`
  @media screen and (max-width: ${ScreenSizes.TABLET}) {
    font-size: 36px;
  }
`;

export const NameEmailContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
