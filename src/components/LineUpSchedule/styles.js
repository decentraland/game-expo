import styled from "styled-components";
import theme, { breakpoints } from "../../../utils/theme";
import scheduleBg from "../../images/schedule/SCHEDULE_BG.png";

export const StyledLineUpSchedule = styled.div`
  padding-top: 72px;
  padding-bottom: 72px;
  background-image: url(${scheduleBg});
  background-size: cover;
  overflow: hidden;
  background-repeat: no-repeat;
`;

// --------------  HEADER --------------------
export const StyledLineUpHeader = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledHeaderImg = styled.img`
  width: 100%;
  height: 100%;
  margin-left: 38px;
  margin-right: 38px;
  color: white;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-family: "KAMIKAZE";
  font-weight: 400;
  text-align: center;
  letter-spacing: 10px;
  color: #f9f5d4;

  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 64px;
  }
  @media screen and (min-width: ${breakpoints.l}) {
    font-size: 75px;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    font-size: 75px;
  }
  @media screen and (min-width: ${breakpoints.xxl}) {
    font-size: 75px;
  }
`;

export const StyledHeaderVector = styled.img`
  position: ${(props) => `${props.position}` || "static"};
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
  align-self: ${(props) => `${props.alignSelf}` || null};
  justify-self: ${(props) => `${props.justifySelf}` || null};
  margin-top: ${(props) => `${props.marginTop}` || null};
  left: ${(props) => `${props.left}` || null};
  color: white;
`;

export const StyledLineUpBtnSection = styled.div`
  display: none;
  margin-top: 72px;
  overflow-x: auto;
  border-radius: 20px;
  gap: 2px;
  @media screen and (min-width: 769px) {
    flex-direction: row;
    display: flex;
    align-items: center;
    width: 70%;
    margin: 0 auto;
    margin-top: 72px;
    justify-content: space-between;
  }
`;

export const StyledLineUpBtn = styled.button`
  display: flex;
  flex: 1;
  cursor: pointer;
  box-sizing: border-box;
  font-family: "KAMIKAZE";
  font-weight: 400;
  font-size: 18px;
  outline: none !important;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 50px;
  background: ${theme.accent};
  color: ${theme.secondary};

  /* Inside auto layout */
  color: #ffffff;
  transition: all 0.5s ease;
  &.selected {
    background: ${theme.secondary};
    color: ${theme.accent};
  }
  &:hover,
  .selected {
    /* background: #ffffff; */
    background: ${theme.secondary};
    color: ${theme.accent};
  }
`;

//---------------- BODY  -----------------------
export const StyledLineUpBody = styled.section`
  height: auto;
  display: flex;
  flex-direction: row;
`;

export const StyledFullLineUpList = styled.p`
  font-family: "Gothic";
  font-weight: 600;
  line-height: 62px;
  font-size: 24px;
  letter-spacing: 0.05em;
  color: #ffffff;
  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 32px;
    line-height: 80px;
  }

  span {
    transition: text-shadow 0.2s ease;
  }
  span:hover {
    text-shadow: 0 0 6px #fff;
  }
`;

export const StyledHighLight = styled.span`
  font-family: "Gothic";
  font-weight: 800;
  &:hover {
  }
  text-shadow: 0 0 6px #fff;
`;

export const StyledTextHighLight = styled.span`
  font-family: "Gothic";
  font-weight: 700;
`;

export const StyledBodyBtnSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledArrowBtn = styled.button`
  width: 70px;
  height: 70px;
  margin-top: 21px;
  margin-bottom: 21px;
  background-color: black;
  background-image: url(${(props) => `${props.src}`});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

// ------------ FOOTER  --------------------
export const StyledLineUpFooter = styled.section`
  display: flex;
  flex-direction: column;
`;

// ----------- EXTRA  -----------------
export const StyledLineUpLogo = styled.img`
  width: 44px;
  height: 50px;
  margin-bottom: 29px;
`;

export const StyledSeparator = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 16px;
  margin-right: 16px;
`;

// ------------ LINE UP DECORATOR --------------
export const Decorator = styled.img`
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
