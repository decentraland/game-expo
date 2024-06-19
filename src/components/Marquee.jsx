import React from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";
import theme from "../../utils/theme";

const BannerMarquee = (props) => {
  return (
    <StyledBannerMarquee {...props}>
      <Marquee
        direction={props.direction}
        speed={100}
        delay={props.delay && props.delay}
        gradient={false}
      >
        • Decentraland Game Expo 2024
        •<DateHighlight> JUNE 26 - 29 </DateHighlight> • Decentraland Game Expo 2024
        •<DateHighlight> JUNE 26 - 29</DateHighlight> • Decentraland Game Expo 2024
        •<DateHighlight> JUNE 26 - 29</DateHighlight> • Decentraland Game Expo 2024
        •<DateHighlight> JUNE 26 - 29</DateHighlight>
        • Decentraland Game Expo 2024
        •<DateHighlight> JUNE 26 - 29</DateHighlight>
        • Decentraland Game Expo 2024
        •<DateHighlight> JUNE 26 - 29</DateHighlight>
      </Marquee>
    </StyledBannerMarquee>
  );
};

const StyledBannerMarquee = styled.div`
  background: black;
  font-size: 16px;
  font-family: "GOTHAM";
  font-weight: 600;
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  position: relative;
  border-top: ${(props) =>
    !props.noBorderTop ? `solid 2px ${theme.accent}` : "none"};
  border-bottom: ${(props) =>
    !props.noBorderBottom ? `solid 2px ${theme.accent}` : "none"};
  line-height: 24px;
  .marquee-container {
    padding: 12px 0;
    .overlay {
      display: none;
    }
    .marquee {
      min-width: unset;
    }
    * {
      font-family: "GOTHAM";
      font-size: 16px;
      letter-spacing: 2px;
      font-weight: 600;
    }
  }
`;

const DateHighlight = styled.span`
  color: ${theme.accent};
  padding-right: 8px;
  padding-left: 8px;
`;

export default BannerMarquee;
