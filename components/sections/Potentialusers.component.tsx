import React from "react";
import styled from "styled-components";
import { IPotentialUsers } from "../../types/types";
import PotentialUsersCardComponent from "../PotentialUsersCard.component";
import SectionLayoutComponent from "../layout/SectionLayout.component";
import SectionTitleComponent from "../utils/SectionTitle.component";
import { motion } from "framer-motion";
import { featuresVariant } from "../../consts/constants";

const PotentialusersComponent = ({ data }: { data: IPotentialUsers }) => {
  const { sectiontitle, potentialusers } = data;

  return (
    <SectionLayoutComponent>
      <CustomSection>
        <SectionTitleComponent>{sectiontitle}</SectionTitleComponent>
        <motion.div variants={featuresVariant}>
          {potentialusers.map(({ title, description, image, button }, idx) => (
            <PotentialUsersCardComponent
              key={idx}
              title={title}
              description={description}
              image={image}
              button={button}
              switchcard={idx % 2 ? true : false}
            />
          ))}
        </motion.div>
      </CustomSection>
    </SectionLayoutComponent>
  );
};

export default PotentialusersComponent;

const CustomSection = styled.section``;
