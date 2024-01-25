import { styled } from 'styled-components';

export const AboutWrapper = styled.div`
  color: ${props => props.theme.palette.primary.main};
  text-align: left;
  width: 90%;
  border-radius: 20px;
  border: 1px solid ${props => props.theme.palette.primary.dark};
  padding: 20px;
`;

export const StyledIcon = styled.img`
  height: 25px;
  width: auto;
`;

export const StyledTitle = styled.h1`
  font-size: 16px;
  font-weight: 400;
  line-height: 130%;
`;

export const StyledSubtitle = styled.p`
  font-size: 28px;
  font-style: italic;
  font-weight: 400;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 50px;
  justify-content: space-between;
  align-items: center;
`;