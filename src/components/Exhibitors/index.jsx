import React, { useState } from "react";
import { Container } from "../Container";
import {
  Section,
  Stage,
  StagesContainer,
  Title,
  StageCard,
  StageImage,
  StageName,
  StageLocation,
  StageHover,
  StageButton,
  StageNameHighlight,
  FilterButton,
  FilterContainer
} from "./styles";
import exhibitors from "./exhibitors";

const tagNames = {
  All: "ALL",
  rpg: "RPG & MMO Zone",
  speed: "Speed & Strategy Zone",
  decentraland: "Decentraland Zone",
  bga: "BGA Zone"
};

const Exhibitors = () => {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredExhibitors = exhibitors.filter((exhibitor) =>
    filter === "All" ? true : exhibitor.tag === filter
  );

  return (
    <Section id="exhibitors">
      <Title>EXHIBITORS</Title>
      <FilterContainer>
        {Object.entries(tagNames).map(([tag, name]) => (
          <FilterButton
            key={tag}
            onClick={() => handleFilterChange(tag)}
            isSelected={filter === tag}
          >
            {name}
          </FilterButton>
        ))}
      </FilterContainer>
      <StagesContainer>
        {filteredExhibitors.map((exhibitor, index) => (
          <Stage key={index} href={exhibitor.href} target="_blank">
            <StageCard>
              <StageImage src={exhibitor.src} />
              <StageHover>
                <StageButton>Jump in</StageButton>
              </StageHover>
            </StageCard>
            <StageNameHighlight>{exhibitor.name}</StageNameHighlight>
            <StageLocation>{exhibitor.location}</StageLocation>
          </Stage>
        ))}
      </StagesContainer>
    </Section>
  );
};

export default Exhibitors;
