import React from "react";
import styled from "styled-components";
import theme, { breakpoints } from "../../../utils/theme";
import saveall from "../../images/about/saveall.png";
import aboutBg from "../../images/about/ABOUT-BG.png";
import { Container } from "../Container";
import buttonborder from "../../images/buttonborder.png";

const About = (props) => {
  return (
    <Section id="about">
      <Container>
        <AboutHeader>
          <AboutTitle>DECENTRALAND GAME EXPO</AboutTitle>
        </AboutHeader>
        <StyledAbout>
          <Aboutbody>
            <StarBustSideIcon src={saveall} />
            <AboutBodyText>
              <AboutParagraphItem>
                Explore the future of Web3 gaming at the first-ever Decentraland
                Game Expo! Displayed across a colorful virtual fairground, DCLGX
                will present a must-see arcade of amusement showcasing some of
                the best games on the blockchain from leading studios and
                talented creators.
              </AboutParagraphItem>
              <AboutParagraphItem>
                Discover 30 neon-lit attractions: 26 expo booths hosting a
                variety of games from strategy, RPG, adventure, puzzle, and
                more, as well as the top 4 DCLGX Game Jam winners—visit all 30
                and collect up to 15 free Wearables & Emotes along the way!
                In-between gaming, join tours to explore the fairgrounds and
                attend to live expert talks & interviews from industry experts.
              </AboutParagraphItem>
              <AboutParagraphItem>
                Whether you’re a gamer, gamedev, or Web3 first-timer, DCLGX is
                your destination for Web3 gaming.
              </AboutParagraphItem>
              <AboutParagraphItem>
                <p>See you in Decentraland June 26-29!</p>
              </AboutParagraphItem>
            </AboutBodyText>
          </Aboutbody>
          <ButtonContainer
            href="https://decentraland.beehiiv.com/subscribe?utm_source=decentraland.org/gameexpo&utm_medium=organic&utm_campaign=DCLGX"
            target="_blank"
          >
            <JumpInButton>SIGN UP FOR THE DECENTRALAND NEWSLETTER</JumpInButton>
            <BorderImage
              src={buttonborder}
              alt="border"
              style={{
                position: "absolute",
                right: "-16px",
                width: "68px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          </ButtonContainer>
          {/* <AboutButtonContainer
            href="https://decentraland.beehiiv.com/subscribe?utm_source=artweek.decentraland.org&utm_medium=organic&utm_campaign=DCLAW24"
            target="_blank"
          >
            <AboutButtonLink>
              Sign up for the Decentraland Newsletter
            </AboutButtonLink>
          </AboutButtonContainer> */}
        </StyledAbout>
      </Container>
    </Section>
  );
};

const AboutParagraphItem = styled.div`
  font-family: "GOTHAM";
  font-weight: 600;
  display: flex;
  gap: 32px;

  @media screen and (min-width: ${breakpoints.md}) {
    gap: 112px;
  }
`;

const ParagraphSpan = styled.span`
  color: ${theme.accent};
`;

const MVFont = styled.span`
  font-family: 'SaintRegular';
}`;

const AboutTitle = styled.h2`
  font-family: KAMIKAZE;
  font-weight: 400;
  text-shadow: 0px 0px 31px #393939;
  font-size: 64px;
  color: #f9f5d4;
  text-align: center;
`;

const Section = styled.section`
  position: relative;
  background-image: url(${aboutBg});
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 24px;
  @media screen and (min-width: 769px) {
    padding-bottom: 100px;
  }
`;

const StyledAbout = styled.div`
  margin: auto;
`;

const AboutHeader = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 72px 0;
`;

const SideIcon = styled.img`
  width: 150px;
  display: none;

  @media screen and (min-width: ${breakpoints.md}) {
    display: block;
  }
`;

const Aboutbody = styled.section`
  display: flex;
  gap: 16px;
  margin-bottom: 48px;
`;

const StarBustSideIcon = styled.img`
  display: none;
  @media screen and (min-width: ${breakpoints.md}) {
    display: block;
  }
`;

const AboutBodyText = styled.div`
  letter-spacing: 0.1em;
  display: flex;
  flex-direction: column;
  gap: 46px;
  font-weight: 300;
  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 18px;
    line-height: 27px;
    font-weight: 300;
    max-width: 532px;
  }
`;

const AboutBodyParagraph = styled.p`
  font-family: "Gothic", sans-serif;
  font-size: 16px;
  line-height: 21px;

  ul {
    list-style: inside;
    padding: 16px;

    li {
      font-family: Gothic;
      padding: 16px 0;

      &:last-child {
        padding-bottom: 0;
      }
    }
  }
`;

const AboutBodyImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 45px 0;
`;

const AboutBodyImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 100%;
  padding-right: 40px;
  @media screen and (min-width: ${breakpoints.md}) {
    padding: 5px 0;
    width: 70px;
    height: 479px;
    margin-left: 8px;
  }
`;

const TextHighlight = styled.span`
  font-family: "Gothic", sans-serif;
  color: ${theme.accent};
  font-weight: 700;

  a {
    font-family: "Gothic", sans-serif;
    color: ${theme.accent};
    font-weight: 700;
    text-decoration: underline;
  }
`;

const AboutButtonContainer = styled.a`
  margin-top: 46px;
  width: 100%;
  @media screen and (min-width: ${breakpoints.md}) {
    margin-top: 10px;
  }
`;

const AboutButtonLink = styled.button`
  position: relative;
  width: 100%;
  text-transform: uppercase;
  height: auto;
  background: transparent;
  font-size: 12px;
  letter-spacing: 120%;
  font-family: "Gothic";
  padding: 16px 32px;
  border: 4px solid ${theme.white};
  border-radius: 120px;
  font-weight: 700;
  transition: all 0.4s ease;
  backdrop-filter: blur(2px);
  cursor: pointer;
  margin-top: 64px;

  img {
    -webkit-animation: rotating 10s linear infinite;
    -moz-animation: rotating 10s linear infinite;
    -ms-animation: rotating 10s linear infinite;
    -o-animation: rotating 10s linear infinite;
    animation: rotating 10s linear infinite;
  }

  &:hover {
    color: black;
    background-color: ${theme.accent};
    box-shadow: 0 0 20px #fff, 0 0 10px violet, 0 0 5px blue;

    img {
      -webkit-animation: rotating 10s linear infinite;
      -moz-animation: rotating 10s linear infinite;
      -ms-animation: rotating 10s linear infinite;
      -o-animation: rotating 10s linear infinite;
      animation: rotating 10s linear infinite;

      @keyframes rotating {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }
    }
  }

  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 22px;
    padding: 29px 72px;

    img {
      -webkit-animation: unset;
      -moz-animation: unset;
      -ms-animation: unset;
      -o-animation: unset;
      animation: unset;
    }
  }
`;

const ButtonDecorator = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 27px;
  @media screen and (min-width: ${breakpoints.md}) {
    width: 47px;
    height: 52px;
    top: 0;
    right: -5px;
  }
`;

const JumpInButton = styled.button`
  clip-path: polygon(50% 0%, 100% 0, 100% 0, 83% 100%, 0 100%, 0% 60%, 0 0);
  background-color: #c445a0;
  padding-top: 26px;
  border: none;
  padding-bottom: 20px;
  width: 100%;
  position: relative;
  text-transform: uppercase;
  font-size: 10px;
  font-family: "Gotham";
  font-weight: 700;
  z-index: 1;
  cursor: pointer;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  @media screen and (min-width: 769px) {
    font-size: 16px;
    padding-top: 20px;
  }
`;

const BorderImage = styled.img``;

const ButtonContainer = styled.a`
  position: relative;
  margin-top: 32px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transition: 0.2s;
  }
`;

export default About;
