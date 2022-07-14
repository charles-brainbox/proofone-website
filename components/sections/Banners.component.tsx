import React, { useRef } from "react";
import { TinaMarkdownContent } from "tinacms/dist/rich-text";
import { BannerComponent } from "../Banner.component";
import SectionLayoutComponent from "../layout/SectionLayout.component";

interface IBanners {
  title: string;
  content: TinaMarkdownContent | TinaMarkdownContent[];
  bannerImage: string;
}

export const BannersComponent = ({ data }: { data: IBanners[] }) => {
  const sectionRef = useRef<HTMLDivElement>();
  return (
    <SectionLayoutComponent>
      <div ref={sectionRef}>
        {data.map((bannerData, idx) => (
          <BannerComponent
            key={idx}
            bannerData={bannerData}
            isSwitch={
              idx % 2 &&
              sectionRef.current &&
              sectionRef.current.clientWidth > 500
                ? true
                : false
            }
          />
        ))}
      </div>
    </SectionLayoutComponent>
  );
};
