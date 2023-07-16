import React from "react";
import { Vimeo } from "../markdown/renderers/Vimeo";
import Youtube from "../markdown/renderers/Youtube";

interface Props {
  source: 'youtube' | 'vimeo';
  videoid: string;
}

export const VideoEmbed = ({ source, videoid }: Props) => {

  const Element = source === 'vimeo' ? Vimeo : Youtube;

  return (
    <Element videoid={videoid} />
  );
}
