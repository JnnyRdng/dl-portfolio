import Markdown from "@/components/markdown/Markdown";
import { getAllWorkIds, getWorkData } from "@/lib/work/work-lib";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";

const WorkItem = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <Markdown markdown={data.contentHtml} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getWorkData(params!.id as string);

  return {
    props: {
      data,
    }
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllWorkIds();
  return { paths, fallback: false }
}

export default WorkItem;
