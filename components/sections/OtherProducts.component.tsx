import Image from "next/image";
import React from "react";
import styled from "styled-components";
import SectionLayoutComponent from "../layout/SectionLayout.component";

const logos = [
  "/logos/Omikron.png",
  "/logos/fact-finder.png",
  "/logos/solvencycheck.png",
  "/logos/uptain.png",
  "/logos/Souse.png",
  "/logos/Colivia.png",
  "/logos/fact-finder_travel.png",
  "/logos/eProfitl.png",
  "/logos/OmikronSoftwareGbR.png",
  "/logos/Lernpartner.png",
  "/logos/brainbox_small-2.png",
  "/logos/casablanca.png",
];

const OtherProductsComponent = () => {
  return (
    <SectionLayoutComponent>
      <CustomSection>
        {logos.map((logo, idx) => (
          <div key={idx} className="img-logo">
            <Image src={logo} alt={logo} layout="fill" objectFit="cover" />
          </div>
        ))}
      </CustomSection>
    </SectionLayoutComponent>
  );
};

export default OtherProductsComponent;

const CustomSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding: 5rem 0;
  .img-logo {
    position: relative;
    width: 100%;
    height: 70px;
  }
`;
