import { IWorkData } from "@/lib/work/work-lib";
import { workRoute } from "@/lib/work/work-utils";
import styles from './Grid.module.scss';
import Link from "next/link";
import Image from "next/image";
import { useRef } from 'react';
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { concat } from "@/lib/utils/string-utils";

interface Props {
  workItem: IWorkData;
  index: number;
}

export const GridItem = ({ workItem, index }: Props) => {

  const imageRef = useRef<HTMLImageElement>(null);
  const entry = useIntersectionObserver(imageRef, { rootMargin: '-25%', threshold: 0.1});

  const isIntersecting = !!entry?.isIntersecting;

  return (
    <div className={styles.gridItem}>
      <Link href={workRoute(workItem.id)}>
        <div className={styles.itemContainer} >
          <Image
            src={`/static/images/${workItem.hero}`}
            width={640}
            height={360}
            alt={workItem.title}
            priority={index < 3}
            className={styles.image}
            ref={imageRef}
          />
          <div className={styles.popupContainer}>
            <div className={concat(styles.popup, isIntersecting && styles.intersect)}>
              {workItem.title && <h3 className={styles.title}>{workItem.title}</h3>}
              {workItem.subTitle && <h4 className={styles.subtitle}>{workItem.subTitle}</h4>}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}


/*

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

*/