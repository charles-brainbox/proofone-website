import React from "react";
import styled from "styled-components";
import SectionLayoutComponent from "../layout/SectionLayout.component";
import SectionTitleComponent from "../utils/SectionTitle.component";

export const VideoComponent = () => {
  return (
    <SectionLayoutComponent>
      <CustomContainer>
        <SectionTitleComponent>Watch our video</SectionTitleComponent>
        <div className="video-player">
          <video width="100%" height="auto" autoPlay muted loop controls>
            <source type="video/mp4" src="Dieter Full German New ST.mp4" />
          </video>
        </div>
      </CustomContainer>
    </SectionLayoutComponent>
  );
};

const CustomContainer = styled.div`
  text-align: center;
  .video-player {
    overflow: hidden;
    border-radius: 5px;
    width: 80%;
    margin: 0 auto;
  }
`;
