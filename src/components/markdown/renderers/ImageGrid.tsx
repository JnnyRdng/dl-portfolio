import React from "react";
import styles from './ImageGrid.module.scss';

interface Props {
  rows: string;
  cols: string;
  children: React.ReactNode[];
  border?: 'black' | 'white' | 'grey' | 'light-grey';
}

export const ImageGrid = ({ rows, cols, children, border }: Props) => {
  const gap = border !== undefined ? '.2rem' : '0';

  return (
    <div className={styles.imageGrid} style={{ ['--rows' as any]: rows, ['--cols' as any]: cols, gap, backgroundColor: border }}>
      {React.Children.toArray(children).filter(c => {
        return typeof c !== 'string';
      }).map((c, i) => {
        return (
          <div key={i} className={styles.gridItem}>
            {c}
          </div>
        );
      })}
    </div>
  );
}

export const markdownToImageGrid = (props: any) => {
  return (
    <ImageGrid rows={props.rows} cols={props.cols} border={props.border}>
      {props.children[0].props.children}
    </ImageGrid>
  );
}
