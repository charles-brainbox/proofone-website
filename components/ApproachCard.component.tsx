import { Collapse } from "@nextui-org/react";
import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { IOurApproach } from "../types/types";

export const ApproachCardComponent = ({
  approach,
  idx,
}: {
  approach: IOurApproach;
  idx: number;
}) => {
  const { title, description } = approach;
  return (
    <Collapse title={title} expanded={idx === 0 ? true : false}>
      <TinaMarkdown content={description} />
    </Collapse>
  );
};
