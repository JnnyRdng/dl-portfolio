import React from "react";
import styles from './VideoEmbed.module.scss';

interface Props {
  videoid: string;
  h?: string;
  width?: number;
  height?: number;
}

export const Vimeo = ({ videoid, h }: Props) => {
  const hash = h ? `h=${h}&` : '';
  return (
    <>
      <div className={styles.videoResponsive}>
        <iframe src={`https://player.vimeo.com/video/${videoid}?${hash}byline=0&title=0`} width="100%" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
      </div>
    </>
  );
}

const isVimeoProps = (data: any): data is Props => {
  return (
    typeof data === 'object' &&
    typeof data.videoid === 'string' &&
    (data.h === undefined || typeof data.h === 'string') &&
    (typeof data.width === 'undefined' || (typeof data.width === 'string' && !isNaN(parseInt(data.width, 10)))) &&
    (typeof data.height === 'undefined' || (typeof data.height === 'string' && !isNaN(parseInt(data.height, 10))))
  );
}

export const markdownToVimeo = (data: any) => {
  if (!isVimeoProps(data)) return null;
  return <Vimeo videoid={data.videoid} h={data.h} />
}