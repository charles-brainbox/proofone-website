import React from "react";
import styled from "styled-components";
import { IFooterCto } from "../../types/types";
import ButtonComponent from "../Button.component";
import { ContactFormComponent } from "../ContactForm.component";
import SectionLayoutComponent from "../layout/SectionLayout.component";
import RenderItemComponent from "../utils/RenderItem.component";

const FooterBannerComponent = ({ data }: { data: IFooterCto }) => {
  const { cto, ctobutton, sectionid } = data;
  return (
    <SectionLayoutComponent id={sectionid}>
      <CustomSection>
        <RenderItemComponent
          item={<blockquote className="quote">{cto}</blockquote>}
        />
        <ContactFormComponent />
      </CustomSection>
    </SectionLayoutComponent>
  );
};

export default FooterBannerComponent;

const CustomSection = styled.section`
  margin: 0 auto 85px;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 5rem;
  @media (max-width: 500px) {
    display: block !important;
  }
  .quote {
    font-size: 2rem;
    margin-bottom: 1rem;
    @media (max-width: 500px) {
      font-size: 2rem;
      margin: 0;
    }
  }
`;
