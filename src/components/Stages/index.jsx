import React from "react";
import { Container } from "../Container";
import {
  Stage,
  Title,
  StageCard,
  StageImage,
  StageName,
  StageLocation,
  StageHover,
  StageButton,
  TitlesContainer,
} from "../Exhibitors/styles";
import { StagesContainer, Section } from "./styles";
import stages from "./stages";
import games from "./games";


const Stages = () => (
  <Section id="games">
    <Container>
      <Title>GAME JAM WINNERS</Title>
      <StagesContainer>
        {games.map(({ name, href, src, coord }) => (
          <Stage>
            <StageCard>
              <StageImage src={src} />
              <StageHover>
                <a href={href} target="_blank">
                  <StageButton>Jump in</StageButton>
                </a>
              </StageHover>
            </StageCard>
            <TitlesContainer>
              <StageName>{name}</StageName>
              <StageLocation>[{coord}]</StageLocation>
            </TitlesContainer>
          </Stage>
        ))}
      </StagesContainer>
    </Container>
  </Section>
);

export default Stages;
