import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { featureList, featuresVariant } from "../../consts/constants";
import { IFeatures } from "../../types/types";
import Cardcomponent from "../Card.component";
import SectionLayoutComponent from "../layout/SectionLayout.component";
import SectionTitleComponent from "../utils/SectionTitle.component";

interface IFeaturesComponent {
  sectiontitle: string;
  sectionid: string;
  topimage: string;
  id: string;
  features: IFeatures[];
}

const FeaturesComponent = ({ data }: { data: IFeaturesComponent }) => {
  const { sectiontitle, id, topimage, features, sectionid } = data;
  return (
    <CustomSection>
      <SectionLayoutComponent id={sectionid}>
        <SectionTitleComponent>{sectiontitle}</SectionTitleComponent>
        <div className="top-image">
          <Image
            src={topimage}
            alt={topimage}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <motion.div
          className="feature-cards"
          variants={featuresVariant}
          initial="hidden"
          whileInView="show"
          transition={{ repeat: 0 }}
          viewport={{ once: true }}
        >
          {features.map(({ id, icon, title, subtitle, description }, idx) => (
            <motion.div
              key={idx}
              variants={featureList}
              transition={{ ease: "easeInOut", duration: "0.7", repeat: 0 }}
            >
              <Cardcomponent
                icon={icon}
                title={title}
                subtitle={subtitle}
                description={description}
              />
            </motion.div>
          ))}
        </motion.div>
      </SectionLayoutComponent>
    </CustomSection>
  );
};

export default FeaturesComponent;

const CustomSection = styled.section`
  background: #acb6e5; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #86fde8,
    #acb6e5
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #86fde8,
    #acb6e5
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  @media (max-width: 500px) {
    .top-image {
      height: 250px !important;
    }
  }
  .top-image {
    position: relative;
    height: 580px;
    border-radius: 2rem;
    overflow: hidden;
    margin: 0 0 2rem;
  }
  .feature-cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 500px) {
      grid-template-columns: 1fr;
    }
  }
`;
