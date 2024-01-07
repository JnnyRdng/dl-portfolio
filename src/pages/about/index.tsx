import Markdown from "@/components/markdown/Markdown";
import { ClientGrid } from "@/components/shared/ClientGrid";
import { Indented } from "@/components/typography/Indented";
import { getAbout } from "@/lib/about/about-lib";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import pic from '~/images/lestinos.png';

interface Props {
  data: any;
}

const AboutPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <>
        <Indented>
        <Image src={pic} alt='Dan Lester' height={290} />
        </Indented>
        <Markdown
          markdown={data.contentHtml}
        />
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
