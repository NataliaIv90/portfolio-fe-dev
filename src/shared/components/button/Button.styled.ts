import { styled } from 'styled-components';

export const StyledButton = styled.button<{ primary?: boolean; }>`
  padding: 14px 17px;
  width: 165px;
  border-radius: 74px;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 700;
  border: 1px solid ${props => props.theme.palette.primary.medium};
  background: ${props => props.theme.palette.primary.medium};
  color: ${props => props.theme.palette.primary.light};
  transition: all 0.5s;
  
  &:hover {
    cursor: pointer;
    background: ${props => props.theme.palette.primary.light};
    color: ${props => props.theme.palette.primary.medium};
    border-color: ${props => props.theme.palette.primary.light}
  }
`;

export const StyledButtonDark = styled.button<{ primary?: boolean; }>`
  padding: 14px 17px;
  width: 165px;
  border-radius: 74px;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 700;
  border: 1px solid ${props => props.theme.palette.primary.light};
  background: ${props => props.theme.palette.primary.light};
  color: ${props => props.theme.palette.primary.medium};
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    background: ${props => props.theme.palette.primary.medium};
    color: ${props => props.theme.palette.primary.light};
    border-color: ${props => props.theme.palette.primary.medium}
  }
`;