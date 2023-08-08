import React from "react";
import styles from './NavBar.module.scss';

export const NavDivider = () => {

  return (
    <>
      <div className={styles.waveFlex}>
        {Array.from(Array(2)).map((x, i) => <Svg key={i} />)}
      </div>
    </>
  );
}

const Svg = () => {
  return (
    <div className={styles.svgWrapper}>
      <svg version="1.2" className={styles.waveSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 27" width="1280" height="24" >
        <path id="Shape 1" d="m0 0l70 19 26-9 35 6 36 1 33-6 42 14 23-20 39 17 56-9 41 7 63-11 71 13 44-20 78 18 70-6 85 7 82-16 76 17 78-18 115 13 27 8 37-18 44 7 38-11 66 22 65-25" />
      </svg>
    </div>
  );
}