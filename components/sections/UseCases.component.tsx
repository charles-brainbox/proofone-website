import Image from "next/image";
import React, { FC } from "react";
import styled from "styled-components";
import { IUseCase } from "../../types/types";
import SectionLayoutComponent from "../layout/SectionLayout.component";
import { UseCaseComponent } from "../UseCase.component";
import SectionTitleComponent from "../utils/SectionTitle.component";

interface IUseCases {
  sectiontitle: string;
  sectionid: string;
  sideimage: string;
  id: string;
  usecases: IUseCase[];
}

export const UseCasesComponent = ({ data }: { data: IUseCases }) => {
  const { sectiontitle, usecases, sideimage, sectionid } = data;
  return (
    <SectionLayoutComponent id={sectionid}>
      <CustomSection>
        <SectionTitleComponent>{sectiontitle}</SectionTitleComponent>
        <div className="main">
          <div className="left-side">
            <Image
              src={sideimage}
              alt={sideimage}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="right-side">
            {usecases.map((useCase, idx) => (
              <UseCaseComponent key={idx} index={idx + 1} useCase={useCase} />
            ))}
          </div>
        </div>
      </CustomSection>
    </SectionLayoutComponent>
  );
};

const CustomSection = styled.section`
  .main {
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    gap: 10rem;
    @media (max-width: 1024px) {
      display: block;
      .left-side {
        display: none;
      }
    }
    @media (max-width: 500px) {
      .right-side {
        grid-template-columns: 1fr !important;
      }
    }
    .left-side {
      position: relative;
      height: 70%;
      border-radius: 2rem;
      overflow: hidden;
    }
    .right-side {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
`;
