import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { IHero } from "../../types/types";
import { AnimatedBackgroundComponent } from "../utils/AnimatedBackground.component";
import RenderItemComponent from "../utils/RenderItem.component";
import TypeWriterComponent from "../utils/Typewriter.component";

const HeroComponent = ({ data }: { data: IHero }) => {
  const { herotitle, herodescription, herosubtitle, herobutton, heroimage } =
    data;
  return (
    <CustomSection>
      <AnimatedBackgroundComponent>
        <div className="hero-header">
          <motion.div className="left-side">
            <RenderItemComponent
              item={<TypeWriterComponent content={herotitle} speed={100} />}
            />

            <h2 className="subtitle">{herosubtitle}</h2>
            <RenderItemComponent
              item={<TinaMarkdown content={herodescription} />}
            />
          </motion.div>
          <div className="right-side">
            <div className="right-container">
              <RenderItemComponent
                item={
                  <Image
                    src={heroimage}
                    alt={herotitle}
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                }
              />
            </div>
          </div>
        </div>
      </AnimatedBackgroundComponent>
    </CustomSection>
  );
};

export default HeroComponent;

const CustomSection = styled.section`
  height: 650px;
  overflow: hidden;
  @media (max-width: 1024px) {
    height: auto !important;
  }
  .hero-header {
    position: relative;
    height: 100%;
    max-width: 1500px;
    width: 85%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 30px;
    align-items: center;

    @media (max-width: 1024px) {
      margin-left: 0;
      width: 100%;
      height: auto !important;
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
        font-size: 5.5rem;
        font-weight: 900;
        line-height: 1;
        &::after {
          font-weight: 200;
          content: "|";
          animation: blink 1s infinite;
        }
      }
      .subtitle {
        font-size: 3rem;
        margin: 0.2rem 0;
        font-weight: 600;
        margin: 0 0 1rem;
      }
      p {
        font-size: 1.3rem;
      }
    }
    .right-side {
      position: relative;
      width: 100%;
      height: 100%;

      .right-container {
        overflow: hidden;
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
  }
`;
