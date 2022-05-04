import React from "react";
import styled from "styled-components";
import { IFooterCto } from "../../types/types";
import ButtonComponent from "../Button.component";
import SectionLayoutComponent from "../layout/SectionLayout.component";
import RenderItemComponent from "../utils/RenderItem.component";

const title =
  "Sie sind an schneller und durchgängig hochwertiger Datenübersetzung interessiert? Kontaktieren Sie uns!";

const FooterBannerComponent = ({ data }: { data: IFooterCto }) => {
  const { cto, ctobutton } = data;
  return (
    <SectionLayoutComponent>
      <CustomSection>
        <RenderItemComponent
          item={<blockquote className="quote">{cto}</blockquote>}
        />
        <RenderItemComponent
          item={
            <ButtonComponent normal link={ctobutton.buttonlink}>
              {ctobutton.buttontext}
            </ButtonComponent>
          }
        />
      </CustomSection>
    </SectionLayoutComponent>
  );
};

export default FooterBannerComponent;

const CustomSection = styled.section`
  margin: 0 auto;
  text-align: center;
  .quote {
    font-size: 3.5rem;
    font-weight: 400;
    color: var(--main-color);
    margin-bottom: 1rem;
    line-height: 1.2;
    @media (max-width: 500px) {
      font-size: 2.5rem;
    }
  }
`;
