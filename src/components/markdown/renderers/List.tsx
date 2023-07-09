import { Indented } from "@/components/typography/Indented";
import React from "react";

interface Props {
  children: React.ReactNode;
  tagName: 'ul' | 'ol';
}

export const List = (props: Props) => {
  const { children, tagName: Tag } = props;
  return (
    <Indented>
      <Tag>
        {children}
      </Tag>
    </Indented>
  );
}
