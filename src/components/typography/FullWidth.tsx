import { Colours } from "@/lib/types";
import { concat } from "@/lib/utils/string-utils";
import React, { CSSProperties } from "react";

interface Props {
  children: React.ReactNode;
  colour?: Colours;
  noPadding?: boolean;
  pageSize?: boolean;
  style?: CSSProperties;
  textAlign?: 'left' | 'centre';
  background?: string;
}

export const FullWidth = ({ children, colour = 'secondary', noPadding, pageSize = false, style, textAlign, background }: Props) => {

  return (
    <div className={concat('full-width-container', `bg-${colour}`, noPadding && 'noPadding', )} style={style}>
      <div className={`container-inner ${pageSize ? 'page' : 'content'}-size-inner ${textAlign === 'centre' ? 'text-center' : 'text-left'}`}>
        {children}
      </div>
      {background && <img alt='bg' src={background} className='banner-bg' /> }
    </div>
  );
}
