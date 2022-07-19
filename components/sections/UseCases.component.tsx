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
    <CustomSection>
      <SectionLayoutComponent id={sectionid}>
        <SectionTitleComponent>{sectiontitle}</SectionTitleComponent>
        <div className="main">
          {/* <div className="left-side">
            <Image
              src={sideimage}
              alt={sideimage}
              layout="fill"
              objectFit="cover"
            />
          </div> */}
          <div className="right-side">
            {usecases.map((useCase, idx) => (
              <UseCaseComponent key={idx} index={idx + 1} useCase={useCase} />
            ))}
          </div>
        </div>{" "}
      </SectionLayoutComponent>
    </CustomSection>
  );
};

const CustomSection = styled.section`
  @media (max-width: 1600px) {
    width: 90% !important;
  }
  background: #ece9e6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ffffff,
    #ece9e6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffffff,
    #ece9e6
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border-radius: 5rem;
  margin: 85px auto 0;
  width: 70%;
  section {
    width: 85%;
  }

  .main {
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
      grid-template-columns: 1fr 1fr 1fr;
      gap: 5rem;
    }
  }
`;
