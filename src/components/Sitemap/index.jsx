import React from "react";
import {
  Section,
  Title,
  Map,
  MapContainer,
  TextContainer,
  OrangeTitle,
  YellowTitle,
  BlueTitle,
  LigthBlueTitle,
} from "./styles";
import { Container } from "../Container";
import { StaticImage } from "gatsby-plugin-image";
import polygon from "../../images/STD-polygon.svg";
import { breakpoints } from "../../../utils/theme";
import Button from "../Button";
import styled from "styled-components";
import heroPolygon from "../../images/hero/polygon2.svg";

const Sitemap = () => (
  <Section id="sitemap">
    <Container>
      <Title>GAME EXPO MAP</Title>
      <MapContainer>
        <Map>
          {/* <StaticImage
                    src={'../../images/DCL_AW_MAP 2.png'}
                /> */}
          <StaticImage src={"../../images/mapjune.png"} />
        </Map>
        <TextContainer>
          <div>
            <OrangeTitle>Blockchain Game Alliance Zone</OrangeTitle>
            <p>B1 - Blockchain Game Alliance</p>
            <p>B2 - UFORIKA - Ride to Survive</p>
            <p>B3 - The Desolation</p>
            <p>B4 - Clay Nation</p>
            <p>B5 - Aura</p>
            <p>B6 - Synergy Land</p>
          </div>
          <div>
            <YellowTitle>Decentraland Games Zone</YellowTitle>
            <p>B7 - Vroomway</p>
            <p>B8 - Ratscape</p>
            <p>B9 - Neon Crystal Maze</p>
            <p>B10 - Dialogic</p>
            <p>B11 - Soul Magic</p>
            <p>B12 - The Cavern</p>
            <p>B13 - Racetrack</p>
          </div>
          <div>
            <BlueTitle>RPG AND MMO ZONE</BlueTitle>
            <p>B14 - World of Kogaea</p>
            <p>B15 - DeFi Kingdoms</p>
            <p>B16 - Legions 2029</p>
            <p>B17 - Knights of Antrom</p>
            <p>B18 - AnyMagik</p>
            <p>B19 - Aavegotchi</p>
          </div>
          <div>
            <LigthBlueTitle>SPEED AND STRATEGY ZONE</LigthBlueTitle>
            <p>B20 - Sandstorm</p>
            <p>B21 - LootRush</p>
            <p>B22 - MotoDEX</p>
            <p>B23 - Space Traitor</p>
            <p>B24 - Planet Mojo</p>
            <p>B25 - Chibi Clash</p>
          </div>
          <div>JUMP IN</div>
        </TextContainer>
      </MapContainer>
      <SaveTheDate
        href="https://decentraland.org/blog/announcements/the-ultimate-guide-to-decentraland-game-expo-24"
        target="_blank"
      >
        <p style={{ fontSize: "20px", textAlign: "center", width: "100%" }}>
          READ ULTIMATE GUIDE{" "}
          <span>
            <Polygon src={heroPolygon} />
          </span>
        </p>
      </SaveTheDate>
    </Container>
  </Section>
);

const SaveTheDate = styled(Button)`
  width: 100%;
`;

const Polygon = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 8px;
  @media screen and (min-width: ${breakpoints.md}) {
    margin-left: 16px;
  }
`;

export default Sitemap;
