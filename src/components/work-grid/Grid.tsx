import { IWorkData } from '@/lib/work/work-lib';
import styles from './Grid.module.scss';
import { GridItem } from './GridItem';

interface Props {
  allItems: IWorkData[];
}

export const Grid = ({ allItems }: Props) => {

  return (
    <>
      <div className={styles.grid}>
        {allItems.map(mapper)}
      </div>
    </>
  );
}

const mapper = (workItem: IWorkData, index: number) => (
  <GridItem key={workItem.id} workItem={workItem} index={index} />
);