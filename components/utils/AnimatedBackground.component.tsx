import { motion } from "framer-motion";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface IAnimatedBackground {
  children: ReactNode;
}

export const AnimatedBackgroundComponent: FC<IAnimatedBackground> = ({
  children,
}) => {
  return (
    <CustomSection
      animate={{
        background: [
          "linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)",
          "linear-gradient(to right, #CFDEF3, #E0EAFC)",
          "linear-gradient(to right, #FFFFFF, #ECE9E6)",
        ],
      }}
      transition={{ repeat: Infinity, duration: 8 }}
    >
      {children}
    </CustomSection>
  );
};

const CustomSection = styled(motion.section)`
  height: 100%;
  width: 100%;
`;
