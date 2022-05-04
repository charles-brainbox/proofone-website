import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { featureList, featuresVariant } from "../../consts/constants";
import { IFeatures } from "../../types/types";
import Cardcomponent from "../Card.component";
import SectionLayoutComponent from "../layout/SectionLayout.component";
import SectionTitleComponent from "../utils/SectionTitle.component";

interface IFeaturesComponent {
  sectiontitle: string;
  id: string;
  features: IFeatures[];
}

const FeaturesComponent = ({ data }: { data: IFeaturesComponent }) => {
  const { sectiontitle, id, features } = data;
  return (
    <SectionLayoutComponent>
      <CustomSection>
        <SectionTitleComponent>{sectiontitle}</SectionTitleComponent>
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
      </CustomSection>
    </SectionLayoutComponent>
  );
};

export default FeaturesComponent;

const CustomSection = styled.section`
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
