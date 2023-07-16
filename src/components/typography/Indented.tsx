import { Colours } from "@/lib/types";
import { concat } from "@/lib/utils/string-utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  noPadding?: boolean;
  colour?: Colours;
}

export const Indented = ({ children, noPadding, colour }: Props) => {

  return (
    <div className={concat('indent-container', colour && `bg-${colour}`)}>
      {children}
    </div>
  );
}
