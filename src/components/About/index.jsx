import React from "react";
import styled from "styled-components";
import theme, { breakpoints } from "../../../utils/theme";
import starBust5 from "../../images/Starbust5.png";
import starBust6 from "../../images/Starbust6.png";
import starBust7 from "../../images/Starbust7.png";
import aboutIcon from "../../images/about/abouticon.svg";
import aboutBg from "../../images/about/ABOUT-BG.png"
import { Container } from "../Container";

const About = (props) => {
  return (
    <Section id="about">
      <Container>
        <StyledAbout>
          <AboutHeader>
            <AboutTitle>DECENTRALAND GAME EXPO</AboutTitle>
          </AboutHeader>
          <Aboutbody>
            <AboutBodyText>
              <AboutParagraphItem>
                <StarBustSideIcon src={aboutIcon} width="40px" height="40px" />
                <p>
                Explore the future of Web3 gaming at the first-ever Decentraland Game Expo! Displayed across a colorful virtual fairground, DCLGX will present a must-see arcade of amusement showcasing some of the best games on the blockchain from leading studios and talented creators.
                </p>
              </AboutParagraphItem>
              <AboutParagraphItem>
                <StarBustSideIcon src={aboutIcon} width="40px" height="40px" />
                <p>
                Discover 30 neon-lit attractions: 26 expo booths hosting a variety of games from strategy, RPG, adventure, puzzle, and more, as well as the top 4 DCLGX Game Jam winners—visit all 30 and collect up to 15 free Wearables & Emotes along the way! In-between gaming, join tours to explore the fairgrounds and attend to live expert talks & interviews from industry experts.
                </p>
              </AboutParagraphItem>
              <AboutParagraphItem>
                <StarBustSideIcon src={aboutIcon} width="40px" height="40px" />
                <p>
                Whether you’re a gamer, gamedev, or Web3 first-timer, DCLGX is your destination for Web3 gaming. 
                </p>
              </AboutParagraphItem>
              <AboutParagraphItem>
                <StarBustSideIcon src={aboutIcon} width="40px" height="40px" />
                <p>
                See you in Decentraland June 26-29!
                </p>
              </AboutParagraphItem>
              <AboutParagraphItem>
                <StarBustSideIcon src={aboutIcon} width="40px" height="40px" />
                <p>
                  Join us to explore art beyond the constraints of reality. See
                  you there!
                </p>
              </AboutParagraphItem>
            </AboutBodyText>
          </Aboutbody>
          <AboutButtonContainer
            href="https://decentraland.beehiiv.com/subscribe?utm_source=artweek.decentraland.org&utm_medium=organic&utm_campaign=DCLAW24"
            target="_blank"
          >
            <AboutButtonLink>
              Sign up for the Decentraland Newsletter
            </AboutButtonLink>
          </AboutButtonContainer>
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
  text-shadow: 0px 0px 31px #393939;
  font-size: 42px;
  color: #F9F5D4;
  text-align: center;
`;

const Section = styled.section`
  position: relative;
  background-image: url(${aboutBg});
  background-repeat: no-repeat;
  background-size: cover;

`;

const StyledAbout = styled.div`
  margin: auto;
  padding: 72px 0;
`;

const AboutHeader = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 56px;
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
    font-weight: 400;
    max-width: 850px;
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

export default About;
