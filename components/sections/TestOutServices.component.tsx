import React from "react";
import styled from "styled-components";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";
import SectionLayoutComponent from "../layout/SectionLayout.component";
import SectionTitleComponent from "../utils/SectionTitle.component";

interface ITestOutServies {
  sectiontitle: string;
  services: {
    title: string;
    description: TinaMarkdownContent | TinaMarkdownContent[];
  }[];
}

export const TestOutServicesComponent = ({
  data,
}: {
  data: ITestOutServies;
}) => {
  const { sectiontitle, services } = data;
  return (
    <CustomContainer>
      <SectionLayoutComponent>
        <div className="service-body">
          <SectionTitleComponent>{sectiontitle}</SectionTitleComponent>
          <div className="service-card">
            {services.map(({ title, description }, idx) => (
              <div key={idx} className="one-service-card">
                <h4 className="title">{title}</h4>
                <TinaMarkdown content={description} />
              </div>
            ))}
          </div>
        </div>
      </SectionLayoutComponent>
    </CustomContainer>
  );
};

const CustomContainer = styled.div`
  @media (max-width: 1600px) {
    width: 90% !important;
  }
  background-color: var(--ter-color);
  border-radius: 5rem;
  margin: 85px auto 0;
  width: 70%;
  section {
    width: 85%;
  }
  .service-body {
    .service-card {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 5rem;
      .title {
        font-size: 1.5rem;
      }
    }
  }
`;
