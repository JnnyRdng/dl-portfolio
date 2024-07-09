import React from "react";
import styles from './Footer.module.scss';


export const Footer = () => {

  return (
    <footer className={styles.footer}>
      <a href='https://www.instagram.com/danlester.art' title='Instagram' target="_blank" rel="noopener">
        Instagram
      </a>
      <a href='mailto:danlester91@gmail.com' title='Email me'>
        Email
      </a>
      <a href='tel:(+44)7890911668' title='Phone me'>
        Phone
      </a>
    </footer>
  );
}
