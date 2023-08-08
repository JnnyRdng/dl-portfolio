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

  const mult = index === 0 ? 2 : 1;

  return (
    <div className={styles.gridItem}>
      <Link href={workRoute(workItem.id)}>
        <div className={concat(styles.itemContainer, isIntersecting && styles.imagePop)} >
          <Image
            src={`/static/images/${workItem.hero}`}
            width={640 * mult}
            height={360 * mult}
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
