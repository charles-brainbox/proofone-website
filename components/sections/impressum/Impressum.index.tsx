import React from "react";
import styled from "styled-components";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import SectionLayoutComponent from "../../layout/SectionLayout.component";
import SectionTitleComponent from "../../utils/SectionTitle.component";

interface IImpressum {
  title: string;
  description: any;
}

export const ImpressumIndex = ({ data }: { data: IImpressum }) => {
  const { title, description } = data;
  return (
    <SectionLayoutComponent>
      <CustomSection>
        <SectionTitleComponent>{title}</SectionTitleComponent>
        <TinaMarkdown content={description} />
      </CustomSection>
    </SectionLayoutComponent>
  );
};

const CustomSection = styled.section`
  font-family: var(--sec-font);
  margin-bottom: 85px;
  padding: 0 40% 0 0;
`;
