import React from "react";
import styled from "styled-components";
import Button from "./Button";
import theme, { breakpoints } from "../../utils/theme";
import dclLogo from "../images/logo-dcl.svg";
import heroPolygon from "../images/hero/polygon2.svg";
import hero1 from "../images/hero/hero1.svg";
import hero2 from "../images/hero/hero2.svg";
import hero3 from "../images/hero/hero3.svg";
import hero4 from "../images/hero/hero4.svg";
import hero5 from "../images/hero/hero5.svg";
import herobg from "../images/hero/GX-HERO-BG.png";
import herotitle from "../images/hero/DCL_GX_Logo.svg";
import new_logo from "../images/logo_new.png";
import { Container } from "./Container";
import buttonborder from "../images/buttonborder.png";

const Hero = () => {
  return (
    <StyledHero sx={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <Container>
        <LogoContainer>
          {/* <img src="dmf-logo-white.png" width="100%" /> */}
          <img src={herotitle} width="100%" />
        </LogoContainer>
        <EventDetails>
          <EventData>
            <EventDataItem>
              <DateComponent className="event-data">
                <DateHighlight>JUNE. 26-29 •</DateHighlight>
                <DateLocation> GAME EXPO PLAZA, [0,81]</DateLocation>
                <br />
                <DateLocation>DCLGX is a free event, open to all</DateLocation>
              </DateComponent>
            </EventDataItem>
          </EventData>
          <EventDataBottom>
            <EventDataItem>
              <ButtonContainer onClick={() => console.log("hola")}>
                <JumpInButton>
                  Jump In
                </JumpInButton>
                <BorderImage
                  src={buttonborder}
                  alt="border"
                  style={{
                    position: "absolute",
                    right: "-30px",
                    width: "68px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />
              </ButtonContainer>
            </EventDataItem>
          </EventDataBottom>
        </EventDetails>
      </Container>
    </StyledHero>
  );
};

const HeroIcon = styled.img`
  width: 72px;
  height: 72px;

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

const StyledHero = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-item: center;
  width: 100%;
  background-image: url(${herobg});
  background-size: cover;
  background-position: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;
  align-items: center;
  @media screen and (min-width: ${breakpoints.md}) {
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
`;

const EventDetails = styled.div`
  position: relative;
  // border-left: 3px solid white;
  // border-right: 3px solid white;

  @media screen and (min-width: ${breakpoints.md}) {
  }
`;

const EventData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 9px;
  width: 100%;
  @media screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
  }
`;

const EventDataBottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (min-width: ${breakpoints.md}) {
    margin-top: 32px;
    flex-direction: row;
  }
`;

const EventDataItem = styled.div`
  flex: 0 0 100%;
  width: 100%;
  text-align: center;

  @media screen and (min-width: ${breakpoints.md}) {
    flex: 1 0 50%;
    text-align: left;
    display: flex;
    justify-content: center;
  }
`;

const DateComponent = styled.section`
  font-size: 9px;
  font-weight: 500;
  line-height: 16px;
  margin-top: 24px;
  font-family: "Gothic";
  padding-left: 0;
  width: 100%;
  text-align: center;

  @media screen and (min-width: ${breakpoints.l}) {
    font-size: 19px;
    text-align: center;
  }

  @media screen and (min-width: ${breakpoints.xl}) {
    font-size: 24px;
    line-height: 120%;
    width: 100%;
  }
`;

const DateHighlight = styled.span`
  color: ${theme.accent};
  font-family: "KAMIKAZE";
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  text-align: justify;

  @media screen and (min-width: ${breakpoints.l}) {
    font-size: 24px;
    line-height: 32px;
  }

  @media screen and (min-width: ${breakpoints.xl}) {
    font-size: 24px;
    line-height: 46px;
  }
`;

const DateLocation = styled.span`
  font-family: "GOTHAM";
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: justify;

  @media screen and (min-width: ${breakpoints.l}) {
    font-size: 20px;
    line-height: 32px;
  }

  @media screen and (min-width: ${breakpoints.xl}) {
    font-size: 20px;
    line-height: 46px;
  }
`;

const StyledLogo = styled.img`
  display: none;
  @media screen and (min-width: ${breakpoints.md}) {
    display: block;
    max-width: 60%;
    text-align: center;
  }
`;

const SaveTheDate = styled(Button)`
  padding: 16px 24px;
  width: 100%;
`;

const Decorator = styled.img`
  display: none;
  position: absolute;
  transform: translateY(-50%);
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
  left: ${(props) => `${props.left}` || null};
  top: ${(props) => `${props.top}` || null};
  bottom: ${(props) => `${props.bottom}` || null};
  right: ${(props) => `${props.right}` || null};
  @media screen and (min-width: ${breakpoints.md}) {
    display: block;
  }
`;

const WhiteRabbit = styled.img`
  width: 48px;
  box-sizing: border-box;
  padding-right: 8px;
  margin-right: 8px;
  border-right: 4px solid ${theme.accent};

  @media screen and (min-width: ${breakpoints.md}) {
    width: 52px;
    padding-right: 16px;
    margin-right: 16px;
    padding-top: 4px;
    padding-bottom: 4px;
  }
`;

const Polygon = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 8px;
  @media screen and (min-width: ${breakpoints.md}) {
    margin-left: 16px;
  }
`;

const JumpInButton = styled.button`
  clip-path: polygon(50% 0%, 100% 0, 100% 0, 83% 100%, 0 100%, 0% 60%, 0 0);
  background-color: #c445a0;
  padding-top: 16px;
  font-size: 24px;
  font-family: "Gotham";
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  padding-bottom: 16px;
  width: 100%;
  position: relative;
  z-index: 1;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transition: 0.2s;
  }
`;

const BorderImage = styled.img`
  &:hover {
    opacity: 0.8;
    transition: 0.2s;
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  cursor: pointer;
  width: 220px;
  &:hover {
    opacity: 0.8;
    transition: 0.2s;
  }
`;

export default Hero;
