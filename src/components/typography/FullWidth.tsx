import { concat } from "@/lib/utils/string-utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  colour?: 'primary' | 'secondary' | 'blue' | 'red';
  noPadding?: boolean;
}

export const FullWidth = ({ children, colour = 'secondary', noPadding }: Props) => {

  return (
    <div className={concat('full-width-container', `bg-${colour}`, noPadding && 'noPadding')}>
      {children}
    </div>
  );
}
