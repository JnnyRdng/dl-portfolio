import React from "react";
import styles from './Footer.module.scss';
import { Instagram, Mail, Send } from "react-feather";


export const Footer = () => {

  return (
    <div className={styles.footer}>
      <a href='#' title='Instagram'>
        Instagram
      </a>
      <a href='#' title='Email me'>
        Email
      </a>
    </div>
  );
}
