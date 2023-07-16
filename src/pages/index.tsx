import { IWorkData, getSortedWork } from "@/lib/work/work-lib";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import { Grid } from "@/components/work-grid/Grid";
import { FullWidth } from "@/components/typography/FullWidth";

interface Props {
  allItems: IWorkData[];
}

const HomePage = ({ allItems }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <>
      <FullWidth>
        <h2>Welcome to my world.</h2>
      </FullWidth>
      <Grid allItems={allItems} />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allItems = getSortedWork();

  return {
    props: {
      allItems,
    }
  }
}

export default HomePage;
