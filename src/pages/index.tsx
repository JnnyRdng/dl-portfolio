import { IWorkData, getSortedWork } from "@/lib/work/work-lib";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from './index.module.scss';

const HomePage = ({ allItems }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <>
      <div className='full-width-container'>
        <h2>Welcome to my world.</h2>
      </div>
      <div className={styles.grid}>
        {allItems.map((item: IWorkData, index: number) => {
          return (
            <div key={item!.id} className={styles.gridItem}>
              <Link href={`/work/${item.id}`}>
                <div className={styles.itemContainer}>
                  <Image className={styles.image} src={`/static/images/${item.hero}`} width={640} height={360} alt={item.title} priority={index < 3} />
                  <div className={styles.popupContainer}>
                    <div className={styles.popup}>
                      <h3 className={styles.title}>{item.title}</h3>
                      <h4 className={styles.subtitle}>{item.subTitle}</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allItems = getSortedWork();

  return {
    props: {
      allItems,
    }
  }
}

export default HomePage;
