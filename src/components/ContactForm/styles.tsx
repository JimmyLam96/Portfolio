import styled from 'styled-components';
import { DefaultColors } from '../../config/DefaultColors';

export const Content = styled.div<{ size: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${(props) => props.size === 'small' && '250px'};
  gap: 25px;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 10px 0;
  background-color: ${DefaultColors.Secondary};
  border: none;
  border-bottom: 1px solid ${DefaultColors.Paragraph};
`;
