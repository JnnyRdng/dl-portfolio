import React from "react";
import styles from './ImageGrid.module.scss';

interface Props {
  rows: string;
  cols: string;
  children: React.ReactNode[];
}

export const ImageGrid = ({ rows, cols, children }: Props) => {
  return (
    <div className={styles.imageGrid} style={{ ['--rows' as any]: rows, ['--cols' as any]: cols }}>
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
    <ImageGrid rows={props.rows} cols={props.cols}>
      {props.children[0].props.children}
    </ImageGrid>
  );
}