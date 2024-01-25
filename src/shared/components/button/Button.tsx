import { StyledButton, StyledButtonDark } from "./Button.styled";
import { FC } from "react";

interface ButtonProps {
  text: string
  dark?: boolean
  onClick: () => void
}

export const Button: FC<ButtonProps> = ({ dark, text, onClick }) => {
  return (
    <>
      {dark
        ? <StyledButtonDark onClick={onClick}>{text}</StyledButtonDark>
        : <StyledButton onClick={onClick}>{text}</StyledButton>
      }
    </>
  )
}