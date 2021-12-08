import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  border: 3px solid #2d334a;
  align-items: center;
  justify-content: space-around;
  max-width: 228px;
  padding: 14px 0;
  border-radius: 20px;
  cursor: pointer;
  user-select: none;
  background: linear-gradient(to left, rgba(255, 255, 255, 0) 50%, #ffd803 50%)
    right;
  background-size: 200%;
  transition: 0.25s ease-out;
  &:hover {
    background-position: left;
  }
`;

export const Text = styled.span`
  font-family: Quicksand;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
`;
