import { Indented } from "@/components/typography/Indented";
import React from "react";

export interface ParagraphProps {
  children: React.ReactNode;
}

export const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <Indented>
      <p>
        {children}
      </p>
    </Indented>
  );
}
