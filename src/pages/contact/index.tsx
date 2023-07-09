import { ImageWrapper } from "@/components/shared/blocks/ImageWrapper";
import { FullWidth } from "@/components/typography/FullWidth";
import { Indented } from "@/components/typography/Indented";
import React from "react";
import pic from '~/images/hurley.jpg';

const ContactPage = () => {

  return (
    <>
      <FullWidth>
        <h2>
          Contact me.
        </h2>
      </FullWidth>
      <Indented>
        You can call me on my cellphone.
      </Indented>
      <Indented>
        <ImageWrapper
          src={pic}
          alt='Hurley'
        />
      </Indented>
    </>
  );
}

export default ContactPage;
