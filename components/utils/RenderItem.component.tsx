import React, { FC } from "react";

interface IRender {
  item: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
}

const RenderItemComponent: FC<IRender> = ({ item }) => {
  return <>{item && item}</>;
};

export default RenderItemComponent;
