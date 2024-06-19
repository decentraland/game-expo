import styled from "styled-components";
import theme, { breakpoints } from "../../../utils/theme";

export const StyledDaySchedule = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  @media screen and (min-width: 769px) {
    width: 70%;
  }
`;

export const StyledDayBody = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px;
  border-radius: 16px;
  background: #000;
  border: 1px solid ${theme.accent};
  width: 100%;
  margin-bottom: 42px;
  @media screen and (min-width: 769px) {
    padding: 64px;
  }
`;

export const StyledDayHeader = styled.section`
  border-bottom: 3px solid grey;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const StyledDayTitle = styled.h2`
  padding-bottom: 40px;
  line-height: 36px;
  font-family: "GOTHAM";
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 0.22em;

  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 40px;
    padding-bottom: 80px;
    letter-spacing: 0.22em;
  }
`;

export const StyledDataItem = styled.div`
  display: flex;
  gap: 24px;
  font-size: 20px;
  align-items: start;
`;

export const StyledDataItemText = styled.span`
  font-family: "GOTHAM";
  font-weight: 600;
`;
