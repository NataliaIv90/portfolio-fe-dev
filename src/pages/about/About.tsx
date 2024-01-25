import { Button } from '../../shared/components/button/Button';
import { StyledIcon, AboutWrapper, StyledTitle, ButtonContainer, ButtonsWrapper, StyledSubtitle } from './About.styled';
import gitIcon from '../../assets/images/github.png';
import linkedInIcon from '../../assets/images/linkedin.svg';

export const About = () => {
  const clickMe = () => {
    return;
  }

  return (
    <AboutWrapper>
      <StyledSubtitle>hello!</StyledSubtitle>
      <StyledTitle>I'm Natalia, a coding newbie with big dreams and small syntax errors. I'm here to turn "I have no idea what I'm doing" into 'I got this!'. Welcome to my portfolio.</StyledTitle>
      <ButtonsWrapper>
        <ButtonContainer>
          <a href='https://github.com/NataliaIv90' target='_blank' rel="noreferrer">
            <StyledIcon src={gitIcon} alt='GitHub icon' />
          </a>
          <a href='https://www.linkedin.com/in/natalia-ivantsova-46017b238/' target='_blank' rel="noreferrer">
            <StyledIcon src={linkedInIcon} alt='LinkedIn icon' />
          </a>
        </ButtonContainer>
        <ButtonContainer>
          <Button onClick={clickMe} text='View projects' />
          <Button dark onClick={clickMe} text='Get in touch' />
        </ButtonContainer>
      </ButtonsWrapper>
    </AboutWrapper>)
}