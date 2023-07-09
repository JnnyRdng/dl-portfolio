import { ImageWrapper } from "@/components/shared/blocks/ImageWrapper";
import { FullWidth } from "@/components/typography/FullWidth";
import { Indented } from "@/components/typography/Indented";
import React from "react";
import danPic from '~/images/dan.jpg';

const AboutPage = () => {

  return (
    <>
      <FullWidth>
        <h2>About me.</h2>
      </FullWidth>
      <Indented>
        <Indented>
          <ImageWrapper
            src={danPic}
            placeholder='blur'
            width={400}
            height={400}
            title={'Actually it\'s Dan'}
            alt='Erling Haarland lookalike contest winner 2023'
            caption='Erling Haarland lookalike contest winner 2023'
          />
        </Indented>
      </Indented>
    </>
  );
}

export default AboutPage;
