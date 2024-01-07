import { FullWidth } from "@/components/typography/FullWidth";
import { Indented } from "@/components/typography/Indented";
import React from "react";

export interface ParagraphProps {
  children: React.ReactNode;
}

export const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <Indented colour="red">
      <p>
        {children}
      </p>
    </Indented>
  );
}
