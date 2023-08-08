import React, { useCallback, useEffect } from "react";
import styles from './NavBar.module.scss';
import Link from "next/link";
import { Turn as Hamburger } from "hamburger-react";
import useToggle from "@/hooks/useToggle";
import { concat } from "@/lib/utils/string-utils";
import { useRouter } from "next/router";


export const NavBar = () => {

  const [expanded, setExpanded, toggle] = useToggle();
  const close = useCallback(() => setExpanded(false), [setExpanded]);

  useEffect(() => {
    document.body.style.overflowY = expanded ? 'hidden' : 'auto';
  }, [expanded]);

  return (
    <>
      <div className={styles.navOuter}>
        <nav className={styles.nav}>
          <Link href='/' className={concat(styles.brand, 'fancy-font')}>
            <h1>
              Dan Lester
            </h1>
          </Link>
          <div className={styles.hamburger}>
            <Hamburger toggled={expanded} toggle={toggle} direction='left' distance="md" />
          </div>
          <div className={concat(styles.navMenu, expanded && styles.expanded)}>
            <ul>
              <NavItem href='/' text='Home' handleClick={close} exact />
              <NavItem href='/about' text='About' handleClick={close} exact />
              {/* <NavItem href='/contact' text='Contact' handleClick={close} exact /> */}
            </ul>
          </div>
        </nav>
        <div className={styles.wave}>
          <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 27" height="24">
            <path id="Shape 1" className={styles.waveSvg} d="m0 0l70 19 26-9 35 6 36 1 33-6 42 14 23-20 39 17 56-9 41 7 63-11 71 13 44-20 78 18 70-6 85 7 82-16 76 17 78-18 115 13 27 8 37-18 44 7 38-11 66 22 65-25" />
          </svg>
        </div>
      </div>
      {/* <div className={styles.waveDivider}>
        <div className={styles.wave}></div>
      </div> */}
      {/* <div className={styles.box}></div> */}
    </>
  );
}

interface NavItemProps {
  href: string;
  text: string;
  exact?: boolean;
  handleClick: () => void;
}

const NavItem = ({ href, text, exact, handleClick }: NavItemProps) => {

  const { pathname } = useRouter();
  const active = exact ? href === pathname : pathname.startsWith(href);

  return (
    <li>
      <Link
        href={href}
        className={active ? styles.active : ''}
        onClick={handleClick}>
        {text}
      </Link>
    </li>
  );
}
