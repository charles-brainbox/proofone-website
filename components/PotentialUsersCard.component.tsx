import { motion } from "framer-motion";
import Image from "next/image";
import React, { FC } from "react";
import styled from "styled-components";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";
import {
  featuresVariant,
  potentialUserImages,
  potentialUserLeft,
  potentialUserRight,
} from "../consts/constants";
import ButtonComponent from "./Button.component";
import RenderItemComponent from "./utils/RenderItem.component";

interface IPotentialUsers {
  switchcard?: boolean;
  image: string;
  title: string;
  button: { buttontext: string; buttonlink: string };
  description: TinaMarkdownContent | TinaMarkdownContent[];
  index: number;
}

const PotentialUsersCardComponent: FC<IPotentialUsers> = ({
  switchcard,
  image,
  title,
  button,
  description,
  index,
}) => {
  return (
    <CustomSection
      variants={featuresVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div
        className="left-side"
        variants={potentialUserLeft}
        transition={{ ease: "easeInOut", duration: "1", repeat: 0 }}
      >
        <RenderItemComponent item={<h4 className="title">{title}</h4>} />
        <RenderItemComponent item={<TinaMarkdown content={description} />} />
      </motion.div>
    </CustomSection>
  );
};

export default PotentialUsersCardComponent;

const CustomSection = styled(motion.div)`
  margin: 3rem 0 0;
  border: 1px solid var(--main-grey-2);
  border-radius: 5px;
  padding: 1rem;
  @media (max-width: 500px) {
    margin-bottom: 2rem;
  }

  .left-side {
    .index-number {
      height: 30px;
      width: 30px;
      min-width: 30px;
      border-radius: 50%;
      border: 2px solid var(--main-black);
      color: var(--main-black);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0 1rem 0;
      .index {
        font-weight: 800;
      }
    }
    .title {
      font-weight: 800;
      margin-bottom: 0.5rem;
    }
  }
`;
