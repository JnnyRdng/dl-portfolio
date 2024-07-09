import { IWorkData, getSortedWork } from "@/lib/work/work-lib";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useMemo, useState } from "react";
import { Grid } from "@/components/work-grid/Grid";
import { FullWidth } from "@/components/typography/FullWidth";
import { Strings } from "@/lib/utils/string-utils";
import { VideoEmbed } from "@/components/shared/VideoEmbed";

interface Props {
  allItems: IWorkData[];
}

const HomePage = ({ allItems }: InferGetStaticPropsType<typeof getStaticProps>) => {

  const [animation, setAnimation] = useState<string>('');
  const [motion, setMotion] = useState<string>('');
  const [direction, setDiretion] = useState<string>('');

  const roles = [
    'Direction',
    'Motion Graphics',
    'Animation',
  ]

  const filteredItems = useMemo(() => {
    return allItems.filter(i => i.category?.includes(animation)
  && i.category.includes(motion) && i.category.includes(direction));
  }, [allItems, animation, motion, direction]);

  return (
    <>
      <FullWidth style={{ textAlign: 'center' }} colour="dark-purple" background='/static/images/banner-background.png'>
        <h2 className={'fancy-font'} style={{ padding: 0, margin: 0, fontSize: '2em' }}>
          {roles.join(` ${Strings.MIDDOT} `)}
        </h2>
      </FullWidth>
      <VideoEmbed source='vimeo' videoid='325301318' />
      <FullWidth style={{ textAlign: 'center' }} colour="light-purple">
        Hi!
        <br />
        I&apos;m a creative video director specialising in work that mixes animation and motion graphics with live action. Click through to view my recent projects.
      </FullWidth>
      <Grid allItems={filteredItems} />
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
