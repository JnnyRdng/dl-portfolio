import React from "react";
import styles from './Vimeo.module.scss';

interface Props {
  videoid: string;
  width?: number;
  height?: number;
}

export const Vimeo = ({ videoid }: Props) => {

  return (
    <>
      <div className={styles.wrapper}>
        <iframe className={styles.frame} src={`https://player.vimeo.com/video/${videoid}?byline=0&title=0`} width="100%" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
      </div>
    </>
  );
}

const isVimeoProps = (data: any): data is Props => {
  return (
    typeof data === 'object' &&
    typeof data.videoid === 'string' &&
    (typeof data.width === 'undefined' || (typeof data.width === 'string' && !isNaN(parseInt(data.width, 10)))) &&
    (typeof data.height === 'undefined' || (typeof data.height === 'string' && !isNaN(parseInt(data.height, 10))))
  );
}

export const markdownToVimeo = (data: any) => {
  if (!isVimeoProps(data)) return null;
  return <Vimeo videoid={data.videoid} />
}