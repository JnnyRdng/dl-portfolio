import React from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import styles from './Layout.module.scss';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {

  return (
    <div className={styles.appWrapper}>
      <NavBar />
      <main className={styles.content}>
        {children}
      </main>
      <Footer />
    </div>
  );
 }

 export default Layout;
