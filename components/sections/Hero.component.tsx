import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { IHero } from "../../types/types";
import ButtonComponent from "../Button.component";
import RenderItemComponent from "../utils/RenderItem.component";
import TypeWriterComponent from "../utils/Typewriter.component";

const HeroComponent = ({ data }: { data: IHero }) => {
  const { herotitle, herodescription, herosubtitle, herobutton, heroimage } =
    data;
  return (
    <CustomSection>
      <motion.div
        className="left-side"
        // initial={{
        //   x: "-100%",
        // }}
        // whileInView={{
        //   x: "0",
        //   transition: {
        //     staggerChildren: 0.05,
        //     staggerDirection: -1,
        //     delayChildren: 2,
        //   },
        // }}
      >
        {/* <RenderItemComponent item={<h1 className="title">{herotitle}</h1>} /> */}
        <RenderItemComponent
          item={<TypeWriterComponent content={herotitle} speed={100} />}
        />

        <h2 className="subtitle">{herosubtitle}</h2>
        <RenderItemComponent
          item={<TinaMarkdown content={herodescription} />}
        />

        {herobutton.map(({ buttontitle, buttonlink }, idx) => (
          <RenderItemComponent
            key={idx}
            item={
              <ButtonComponent
                outline
                style={{ marginTop: "1rem" }}
                id={buttonlink}
              >
                {buttontitle}
              </ButtonComponent>
            }
          />
        ))}
      </motion.div>
      <div className="right-side">
        <div className="right-container">
          <RenderItemComponent
            item={
              <Image
                src={heroimage}
                alt={herotitle}
                layout="fixed"
                objectFit="contain"
                priority
                height={500}
                width={950}
              />
            }
          />
        </div>
      </div>
    </CustomSection>
  );
};

export default HeroComponent;

const CustomSection = styled.section`
  position: relative;
  height: 600px;
  background-color: var(--main-color);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: center;
  padding: 0 10rem;
  color: var(--main-white);
  @media (max-width: 1024px) {
    margin-left: 0;
    width: 100%;
    height: auto;
    display: block;
    padding: 8rem 2rem 0;
    .left-side {
      text-align: center;
      margin-bottom: 5rem;
      .title {
        font-size: 4rem !important;
      }
    }
    .right-side {
      .right-container {
        position: relative !important;
      }
    }
  }
  @media (max-width: 500px) {
    .left-side {
      .title {
        font-size: 3.2rem !important;
      }
    }
  }
  .left-side {
    .title {
      font-size: 4.5rem;
      font-weight: 900;
      line-height: 1;
      &::after {
        font-weight: 200;
        content: "|";
        animation: blink 1s infinite;
      }
    }
    .subtitle {
      font-size: 2rem;
      margin: 0.2rem 0;
      font-weight: 600;
      margin: 0 0 1rem;
    }
  }
  .right-side {
    position: relative;
    width: 100%;
    height: 100%;
    .right-container {
      position: absolute;
      width: 200%;
      height: 500px;
      bottom: 0;
    }
  }

  @keyframes blink {
    from {
      opacity: 0%;
    }
    to {
      opacity: 100%;
    }
  }
`;
