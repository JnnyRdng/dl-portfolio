import React from "react";

export interface ParagraphProps {
  children: React.ReactNode;
}

export const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <p className='padded-text'>
      {children}
    </p>
  );
}
