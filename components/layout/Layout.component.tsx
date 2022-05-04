import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { IFooter, INav } from "../../types/types";
import FooterComponent from "../sections/Footer.component";
import NavComponent from "../sections/Nav.component";

interface ILayout {
  children: ReactNode;
  footer: IFooter;
  nav: INav;
}

const LayoutComponent: FC<ILayout> = ({ children, footer, nav }) => {
  return (
    <CustomLayout>
      <NavComponent data={nav} />
      <main className="inner-container">{children}</main>
      <FooterComponent data={footer} />
    </CustomLayout>
  );
};

export default LayoutComponent;

const CustomLayout = styled.main`
  .inner-container {
    width: 80%;
    max-width: 1500px;
    margin: 0 auto;

    @media (max-width: 1024px) {
      width: 96%;
      overflow-x: hidden !important;
    }
  }
`;
