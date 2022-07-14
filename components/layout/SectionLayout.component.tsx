import React, { ReactNode } from "react";
import styled from "styled-components";

const SectionLayoutComponent = ({
  children,
  id,
}: {
  children: ReactNode;
  id?: string;
}) => {
  return <CustomSection id={id && id.toLowerCase()}>{children}</CustomSection>;
};

export default SectionLayoutComponent;

const CustomSection = styled.section`
  padding: 85px 0;
  margin: 0 auto;
  width: 75%;
  max-width: 1500px;
  @media (max-width: 1024px) {
    width: 94%;
    overflow-x: hidden !important;
  }
`;
