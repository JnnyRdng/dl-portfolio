import { Colours } from "@/lib/types";
import { concat } from "@/lib/utils/string-utils";
import React, { CSSProperties } from "react";

interface Props {
  children: React.ReactNode;
  colour?: Colours;
  noPadding?: boolean;
  pageSize?: boolean;
  style?: CSSProperties;
}

export const FullWidth = ({ children, colour = 'secondary', noPadding, pageSize = false, style }: Props) => {

  return (
    <div className={concat('full-width-container', `bg-${colour}`, noPadding && 'noPadding')} style={style}>
      <div className={`${pageSize ? 'page' : 'content'}-size-inner`}>
        {children}
      </div>
    </div>
  );
}
