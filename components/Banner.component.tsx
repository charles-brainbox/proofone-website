import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";

interface IBanners {
  title: string;
  content: TinaMarkdownContent | TinaMarkdownContent[];
  bannerImage: string;
}

export const BannerComponent = ({
  bannerData,
  isSwitch,
}: {
  bannerData: IBanners;
  isSwitch?: boolean;
}) => {
  const { title, content, bannerImage } = bannerData;
  if (isSwitch) {
    return (
      <CustomContainer>
        <div className="right-side">
          <h4 className="title"> {title}</h4>
          <TinaMarkdown content={content} />
        </div>
        <div className="left-side">
          <div className="banner-image">
            {bannerImage && (
              <Image objectFit="contain" layout="fill" src={bannerImage} />
            )}
          </div>
        </div>
      </CustomContainer>
    );
  }
  return (
    <CustomContainer>
      <div className="left-side">
        <div className="banner-image">
          {bannerImage && (
            <Image objectFit="contain" layout="fill" src={bannerImage} />
          )}
        </div>
      </div>
      <div className="right-side">
        <h4 className="title"> {title}</h4>
        <TinaMarkdown content={content} />
      </div>
    </CustomContainer>
  );
};

const CustomContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15rem;
  align-items: center;
  height: 450px;
  .title {
    font-size: 2rem;
  }
  .left-side {
    .banner-image {
      position: relative;
      overflow: hidden;
      height: 350px;
    }
  }
  @media (max-width: 1024px) {
    gap: 5rem;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    height: auto;
    margin: 0 0 5rem;
  }
`;
