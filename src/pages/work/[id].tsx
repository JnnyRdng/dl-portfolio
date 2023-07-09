import Markdown from "@/components/markdown/Markdown";
import { IconLink } from "@/components/shared/blocks/IconLink";
import { Indented } from "@/components/typography/Indented";
import { IWorkData, Sibling, getAllWorkIds, getSiblings, getWorkData } from "@/lib/work/work-lib";
import { workRoute } from "@/lib/work/work-utils";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { ChevronsRight, ChevronsLeft } from 'react-feather';

interface Props {
  data: IWorkData;
  prev?: Sibling;
  next?: Sibling;
}

const WorkItem = ({ data, prev, next }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>

      <Markdown markdown={data.contentHtml} />
      <Indented>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            {prev?.id && (
              <IconLink
                href={workRoute(prev.id)}
                text={prev.text}
                icon={ChevronsLeft}
                position='left'
              />
              // <Link href={workRoute(prev.id)}>
              //   <ChevronsLeft />
              //   {prev.text}
              // </Link>
            )}
          </div>
          <div>
            {next?.id && (
              <IconLink
              href={workRoute(next.id)}
              text={next.text}
              icon={ChevronsRight}
              position='right'
            />
            )}
          </div>
        </div>
      </Indented>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const id = params!.id as string;
  const data = await getWorkData(id);
  const { prev, next } = await getSiblings(id);

  return {
    props: {
      data, prev, next
    }
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllWorkIds();
  return { paths, fallback: false }
}

export default WorkItem;
