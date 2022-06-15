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
        <RenderItemComponent
          item={
            <ButtonComponent normal id={ctobutton.buttonlink}>
              {ctobutton.buttontext}
            </ButtonComponent>
          }
        />
        <ContactFormComponent />
      </CustomSection>
    </SectionLayoutComponent>
  );
};

export default FooterBannerComponent;

const CustomSection = styled.section`
  margin: 0 auto 85px;
  text-align: center;
  width: 80%;
  .quote {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--main-color);
    margin-bottom: 1rem;
    line-height: 1.2;
    @media (max-width: 500px) {
      font-size: 2.5rem;
      margin: 0;
    }
  }
`;
