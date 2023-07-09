import { FullWidth } from "@/components/typography/FullWidth";
import { Indented } from "@/components/typography/Indented";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const BlockQuote = ({ children }: Props) => {

  return (
    <FullWidth colour='blue' noPadding>
      <div style={{ padding: '2rem 3rem', fontStyle: 'italic' }}>
        {children}
      </div>
    </FullWidth>
  );
}
