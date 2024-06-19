import React, { useState } from "react";
import { Container } from "../Container";
import Button from "../Button";
import { breakpoints } from "../../../utils/theme";
import { days } from "../../../utils/days-data-2022";
import {
  StyledLineUpSchedule,
  StyledLineUpBody,
  StyledLineUpBtnSection,
  StyledLineUpBtn,
  Title,
} from "./styles";
import heroPolygon from "../../images/hero/polygon2.svg";
import { motion } from "framer-motion";
import DaySchedule from "../DaySchedule/index.jsx";
import styled from "styled-components";
import BannerMarquee from "../Marquee.jsx";
import buttonborder from "../../images/buttonborder.png";

// markup
const LineUpSchedule = (props) => {
  const [currentSection, setCurrentSection] = useState("schedule");
  const [currentDay, setCurrentDay] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDaySelection = (day) => {
    setCurrentSection("schedule");
    setCurrentDay(day);
    setIsMenuOpen(false);
  };

  return (
    <StyledLineUpSchedule id="lineup">
      <Container>
        <Title>SCHEDULE</Title>
        <StyledLineUpBtnSection>
          {days.map((dayInfo, i) => (
            <StyledLineUpBtn
              key={i}
              className={
                currentDay === i + 1 && currentSection === "schedule"
                  ? "selected"
                  : ""
              }
              onClick={() => {
                handleDaySelection(i + 1);
              }}
            >
              {`${dayInfo.date}`}
            </StyledLineUpBtn>
          ))}
        </StyledLineUpBtnSection>

        <MobileMenu>
          <SelectedDay onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {days[currentDay - 1].date}
          </SelectedDay>
          {isMenuOpen && (
            <DropdownMenu
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {days.map((dayInfo, i) => (
                <MenuItem key={i} onClick={() => handleDaySelection(i + 1)}>
                  {dayInfo.date}
                </MenuItem>
              ))}
            </DropdownMenu>
          )}
        </MobileMenu>

        <StyledLineUpBody>
          {currentSection === "schedule" && (
            <>
              <DaySchedule
                dayNumber={currentDay}
                dayInfo={days[currentDay - 1]}
              />
            </>
          )}
        </StyledLineUpBody>
        <ButtonContainer
          href="https://decentraland.org/blog/announcements/the-ultimate-guide-to-decentraland-game-expo-24?utm_org=dcl&utm_source=landing&utm_campaign=dclgx"
          target="_blank"
        >
          <JumpInButton>Read the Ultimate Guide</JumpInButton>
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
      </Container>
    </StyledLineUpSchedule>
  );
};

const SaveTheDate = styled(Button)`
  width: auto;
`;

const Polygon = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 8px;
  @media screen and (min-width: ${breakpoints.md}) {
    margin-left: 16px;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: relative;
  @media screen and (max-width: ${breakpoints.md}) {
    display: block;
    width: 100%;
    margin-top: 90px;
    margin-bottom: 20px;
  }
`;

const SelectedDay = styled.div`
  cursor: pointer;
  padding-left: 32px;
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: black;
  border: 1px solid #c445a0;
  border-radius: 32px;
  font-size: 32px;
  font-family: "Helvetica";
`;

const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  width: 100%;
  left: 0;
  width: 100%;
  background-color: black;
  border: 1px solid #c445a0;
  border-radius: 32px;
`;

const MenuItem = styled.div`
  padding-left: 32px;
  padding-top: 24px;
  padding-bottom: 24px;
  cursor: pointer;
  font-size: 32px;
  border-radius: 32px;
  font-family: "Helvetica";
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #c445a0;
  }
`;
const JumpInButton = styled.button`
  clip-path: polygon(50% 0%, 100% 0, 100% 0, 83% 100%, 0 100%, 0% 60%, 0 0);
  background-color: #c445a0;
  padding-top: 20px;
  border: none;
  padding-bottom: 20px;
  width: 100%;
  position: relative;
  text-transform: uppercase;
  font-size: 16px;
  font-family: "Gotham";
  font-weight: 700;
  z-index: 1;
  cursor: pointer;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

const BorderImage = styled.img``;

const ButtonContainer = styled.a`
  width: 100%;
  margin: 0 auto;
  position: relative;
  margin-top: 32px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transition: 0.2s;
  }
  @media screen and (min-width: 769px) {
    width: 400px;
  }
`;

export default LineUpSchedule;
