import Markdown from "@/components/markdown/Markdown";
import { ClientGrid } from "@/components/shared/ClientGrid";
import { Indented } from "@/components/typography/Indented";
import { getAbout } from "@/lib/about/about-lib";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import pic from '~/images/Hello3.gif';

interface Props {
  data: any;
}

const AboutPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <>
      <Indented colour="red" fillWidth>
        <div className="content-image-wrapper">
            <Image src={pic} alt='Dan Lester' width={600} className="content-image" />
        </div>
      </Indented>
      <Markdown markdown={data.contentHtml} />
      <ClientGrid />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await getAbout();
  return {
    props: {
      data
    }
  }
}

export default AboutPage;
