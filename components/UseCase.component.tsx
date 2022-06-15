import React from "react";
import styled from "styled-components";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { IUseCase } from "../types/types";

export const UseCaseComponent = ({
  useCase,
  index,
}: {
  useCase: IUseCase;
  index: number;
}) => {
  const { title, description } = useCase;
  return (
    <CustomArticle>
      <div className="index">
        <span className="index-number">{index}</span>
      </div>
      <div className="case-article">
        <h4 className="title">{title}</h4>
        <TinaMarkdown content={description} />
      </div>
    </CustomArticle>
  );
};

const CustomArticle = styled.article`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;
  .index {
    height: 30px;
    width: 30px;
    min-width: 30px;
    font-weight: 800;
    color: var(--main-color);
    border-radius: 50%;
    border: 2px solid var(--main-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .case-article {
    .title {
      font-weight: 800;
      color: var(--main-color);
      font-size: 1.1rem;
      margin: 0 0 0.5rem 0;
    }
  }
`;
