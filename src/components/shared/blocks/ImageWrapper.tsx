import Image, { StaticImageData } from "next/image";
import React from "react";

interface BaseProps {
  alt: string;
  title?: string;
  caption?: string;
  placeholder?: "blur" | "empty" | undefined
}

type StaticImageProps = {
  src: StaticImageData;
  width?: number;
  height?: number
}

type SrcImageProps = {
  src: string;
  width: number;
  height: number
}

type Props = BaseProps & (
  | StaticImageProps
  | SrcImageProps
);


export const ImageWrapper = ({ alt, title, caption, src, width, height, placeholder }: Props) => {

  return (
    <>
      <div className='post-image-wrapper'>
        <Image
          src={src}
          alt={alt}
          title={title}
          width={width}
          height={height}
          placeholder={placeholder}
          className='post-image'
        />
      </div>
      {caption ? <div className='caption' aria-label={caption}>{caption}</div> : null}
    </>
  );
}
