import styled from "styled-components";
import theme, { breakpoints } from "../../../utils/theme";

export const Section = styled.section`
  padding-bottom: 72px;
  padding-top: 72px;
  background: black;
`;

export const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 32px;
  font-family: "KAMIKAZE";
  text-align: center;
  letter-spacing: 10px;

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

export const ComingSoon = styled.p`
  font-family: Gothic;
  font-size: 40px;
  font-weight: 700;
  margin-top: 40px;
`;

export const TextTitle = styled.p`
    text-transform: uppercase;
    font-size: 36px;
    font-family 'Yapari Expanded';
    margin-bottom: 72px;
`;

export const StagesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 16px;
  justify-content: center;
  justify-items: center;

  @media screen and (min-width: ${breakpoints.md}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: ${breakpoints.l}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media screen and (min-width: ${breakpoints.xl}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    max-width: 1600px;
    margin: 0 auto;
  }
`;

export const Stage = styled.a`
  margin-bottom: 16px;
  cursor: pointer;
`;

export const StageCard = styled.div`
  position: relative;
  border-top-right-radius: 8px;
  border: 3px solid white;
  margin-bottom: 8px;
  transition: box-shadow 0.4s ease;
  :hover {
    box-shadow: 0 0 14px #fff, 0 0 9px violet, 0 0 3px blue;
    div {
      display: flex;
    }
  }

  div {
    display: none;
  }
`;

export const StageImage = styled.img`
  max-width: 100%;
  margin-bottom: -3px;
  aspect-ratio: 1 / 1.4;
  object-fit: cover;
  width: 100%;

  @media screen and (min-width: ${breakpoints.l}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const StageName = styled.span`
  font-family: "Helvetica";
  font-size: 18px;
  line-height: 120%;
  font-weight: 600;
  text-transform: uppercase;
`;

export const StageNameHighlight = styled.p`
  font-family: "Helvetica";
  font-size: 18px;
  line-height: 120%;
  font-weight: 600;
  text-transform: uppercase;
`;

export const StageLocation = styled.span`
  display: block;
  font-family: "Helvetica";
  font-size: 18px;
  line-height: 16px;
  margin-top: 12px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${theme.accent};
`;

export const StageHover = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  animation: fedeIn 0.4ss linear;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 50%;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const StageButton = styled.button`
  font-family: "Gothic";
  border: unset;
  box-shadow: unset;
  text-transform: uppercase;
  border-radius: 58px;
  padding: 8px 16px;
  font-weight: 700;
  color: black;
  font-size: 10px;
  cursor: pointer;
`;

export const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 48px;
  margin-top: 48px;
  gap: 32px;
`;

export const FilterButton = styled.button`
  border-radius: 76px;
  height: 64px;
  width: 156px;
  padding: 12px 36px;
  font-weight: 700;
  font-size: 12px;
  background: ${({ isSelected }) => (isSelected ? "#F9F5D4" : "#C445A0")};
  color: ${({ isSelected }) => (isSelected ? "#C445A0" : "#fff")};
  cursor: pointer;
  transition: background 0.3s, color 0.3s, box-shadow 0.3s;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 10px 3px rgba(196, 69, 160, 0.3);

  &:hover {
    background: #f9f5d4;
    color: #c445a0;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 76px;
    background: rgba(196, 69, 160, 0.3);
    filter: blur(6px);
    z-index: -1;
  }
`;
