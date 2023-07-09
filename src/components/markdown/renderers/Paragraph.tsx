import React from "react";

export interface ParagraphProps {
  children: React.ReactNode;
}

export const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <p className='indent-container'>
      {children}
    </p>
  );
}
