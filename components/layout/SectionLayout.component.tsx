import React, { ReactNode } from "react";
import styled from "styled-components";

const SectionLayoutComponent = ({ children }: { children: ReactNode }) => {
  return <CustomSection>{children}</CustomSection>;
};

export default SectionLayoutComponent;

const CustomSection = styled.section`
  margin-bottom: 5rem;
`;
