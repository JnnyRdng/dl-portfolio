import { Colours } from "@/lib/types";
import { concat } from "@/lib/utils/string-utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  noPadding?: boolean;
  colour?: Colours;
  textAlign?: 'left' | 'centre';
  fillWidth?: boolean;
}

export const Indented = ({ children, noPadding, colour, textAlign, fillWidth }: Props) => {

  return (
    <div className={concat('indent-container', colour && `bg-${colour}`, textAlign === 'centre' ? 'text-center' : 'text-left', fillWidth && 'fill-width')}>
      {children}
    </div>
  );
}
