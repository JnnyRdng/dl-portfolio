import { Colours } from "@/lib/types";
import { concat } from "@/lib/utils/string-utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  colour?: Colours;
  noPadding?: boolean;
  pageSize?: boolean;
}

export const FullWidth = ({ children, colour = 'secondary', noPadding, pageSize = false }: Props) => {

  return (
    <div className={concat('full-width-container', `bg-${colour}`, noPadding && 'noPadding')}>
      <div className={`${pageSize ? 'page' : 'content'}-size-inner`}>
        {children}
      </div>
    </div>
  );
}
