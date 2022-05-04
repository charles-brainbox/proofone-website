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
}

const PotentialUsersCardComponent: FC<IPotentialUsers> = ({
  switchcard,
  image,
  title,
  button,
  description,
}) => {
  if (switchcard) {
    return (
      <CustomSection
        variants={featuresVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          className="right-side"
          variants={potentialUserImages}
          transition={{ ease: "easeInOut", duration: "1", repeat: 0 }}
        >
          <RenderItemComponent
            item={
              <Image
                src={image}
                alt={title}
                width={521.15}
                height={430}
                objectFit="contain"
              />
            }
          />
        </motion.div>
        <motion.div
          className="left-side"
          variants={potentialUserRight}
          transition={{ ease: "easeInOut", duration: "1", repeat: 0 }}
        >
          <RenderItemComponent item={<h5 className="title">{title}</h5>} />
          <RenderItemComponent item={<TinaMarkdown content={description} />} />
          {button && (
            <RenderItemComponent
              item={
                <ButtonComponent
                  link={button.buttonlink}
                  normal
                  style={{ marginTop: "2rem" }}
                >
                  {button.buttontext}
                </ButtonComponent>
              }
            />
          )}
        </motion.div>
      </CustomSection>
    );
  }
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
        <RenderItemComponent item={<h5 className="title">{title}</h5>} />
        <RenderItemComponent item={<TinaMarkdown content={description} />} />
        {button && (
          <RenderItemComponent
            item={
              <ButtonComponent
                link={button.buttonlink}
                style={{ marginTop: "2rem" }}
              >
                {button.buttontext}
              </ButtonComponent>
            }
          />
        )}
      </motion.div>
      <motion.div
        className="right-side"
        variants={potentialUserImages}
        transition={{ ease: "easeInOut", duration: "1", repeat: 0 }}
      >
        <RenderItemComponent
          item={
            <Image
              src={image}
              alt={title}
              width={521.15}
              height={430}
              objectFit="contain"
            />
          }
        />
      </motion.div>
    </CustomSection>
  );
};

export default PotentialUsersCardComponent;

const CustomSection = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 100px;
  margin-bottom: 2rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    margin-bottom: 2rem;
    .right-side {
      display: none;
    }
  }

  .left-side {
    .title {
      font-weight: 700;
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
    .description {
    }
  }
`;
