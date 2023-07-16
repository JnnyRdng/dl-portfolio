import Markdown from "@/components/markdown/Markdown";
import { getAbout } from "@/lib/about/about-lib";
import { GetStaticProps, InferGetStaticPropsType } from "next";

interface Props {
  data: any;
}

const AboutPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <>
      <Markdown
        markdown={data.contentHtml}
      />
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
