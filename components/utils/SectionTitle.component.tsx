import React from "react";
import styled from "styled-components";
import RenderItemComponent from "./RenderItem.component";

const SectionTitleComponent = ({ children }: { children: string }) => {
  return <RenderItemComponent item={<CustomTitle>{children}</CustomTitle>} />;
};

export default SectionTitleComponent;

const CustomTitle = styled.h3`
  color: var(--main-color);
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
`;
