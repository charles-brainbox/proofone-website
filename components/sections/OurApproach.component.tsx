import { Collapse } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { IOurApproach } from "../../types/types";
import { ApproachCardComponent } from "../ApproachCard.component";
import SectionLayoutComponent from "../layout/SectionLayout.component";
import SectionTitleComponent from "../utils/SectionTitle.component";

interface IOurApproaches {
  sectiontitle: string;
  sectionid: string;
  sideimage: string;
  ourapproach: IOurApproach[];
}

export const OurApproachComponent = ({ data }: { data: IOurApproaches }) => {
  const { sectiontitle, sideimage, ourapproach, sectionid } = data;
  return (
    <SectionLayoutComponent id={sectionid}>
      <CustomSection>
        <SectionTitleComponent>{sectiontitle}</SectionTitleComponent>
        <div className="main-body">
          <div className="left-side">
            <Image
              src={sideimage}
              alt={sideimage}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="right-side">
            <Collapse.Group bordered accordion>
              {ourapproach.map((approach, idx) => (
                <ApproachCardComponent
                  key={idx}
                  approach={approach}
                  idx={idx}
                />
              ))}
            </Collapse.Group>
          </div>
        </div>
      </CustomSection>
    </SectionLayoutComponent>
  );
};

const CustomSection = styled.section`
  @media (max-width: 500px) {
    .main-body {
      grid-template-columns: 1fr !important;
      .left-side {
        display: none !important;
      }
    }
  }
  .main-body {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 2rem;
    .left-side {
      position: relative;
      height: 100%;
    }
  }
`;
