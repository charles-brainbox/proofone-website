import Image from "next/image";
import React, { FC } from "react";
import styled from "styled-components";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";
import RenderItemComponent from "./utils/RenderItem.component";

interface ICard {
  icon: string;
  title: string;
  subtitle: string;
  description: TinaMarkdownContent | TinaMarkdownContent[];
}

const Cardcomponent: FC<ICard> = ({ icon, title, subtitle, description }) => {
  return (
    <CustomCard>
      <RenderItemComponent
        item={<Image src={icon} alt={title} height={20} width={20} />}
      />
      <RenderItemComponent item={<h4 className="card-title">{title}</h4>} />
      <RenderItemComponent
        item={<h5 className="card-subtitle">{subtitle}</h5>}
      />
      <RenderItemComponent item={<TinaMarkdown content={description} />} />
    </CustomCard>
  );
};

export default Cardcomponent;

const CustomCard = styled.div`
  padding: 1rem 2rem 1rem 0;
  @media (max-width: 500px) {
    padding-right: 0;
  }
  .card-title {
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 700;
    margin-top: 2rem;
  }
  .card-subtitle {
    font-size: 1.4rem;
    font-weight: 800;
    margin: 0 0 0.5rem;
  }
`;
