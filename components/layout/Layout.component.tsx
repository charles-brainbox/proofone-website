import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { IFooter, IHero, INav } from "../../types/types";
import FooterComponent from "../sections/Footer.component";
import HeroComponent from "../sections/Hero.component";
import NavComponent from "../sections/Nav.component";

interface ILayout {
  children: ReactNode;
  hero?: IHero;
  noHero?: boolean;
}

const LayoutComponent: FC<ILayout> = ({ children, hero, noHero }) => {
  return (
    <CustomLayout>
      <NavComponent />
      {!noHero && <HeroComponent data={hero} />}
      <main className="inner-container">{children}</main>
      <FooterComponent />
    </CustomLayout>
  );
};

export default LayoutComponent;

const CustomLayout = styled.main`
  .inner-container {
   
    overflowY-hidden;

 
  }
`;
