import React, { useCallback, useEffect } from "react";
import styles from './NavBar.module.scss';
import Link from "next/link";
import { Turn as Hamburger } from "hamburger-react";
import useToggle from "@/hooks/useToggle";
import { concat } from "@/lib/utils/string-utils";
import { useRouter } from "next/router";
import { Bangers } from "next/font/google";

const bangers = Bangers({
  weight: ['400'],
  subsets: ['latin'],
});

export const NavBar = () => {

  const { pathname } = useRouter();

  const [expanded, setExpanded, toggle] = useToggle();
  const close = useCallback(() => setExpanded(false), [setExpanded]);
  // useEffect(() => {
  //   close();
  // }, [close, pathname]);

  useEffect(() => {
    document.body.style.overflowY = expanded ? 'hidden' : 'auto';
  }, [expanded]);

  return (
    <>
      <div className={styles.navOuter}>
        <nav className={styles.nav}>
          <Link href='/' className={styles.brand}>
            <h1 className={bangers.className}>
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
              <NavItem href='/contact' text='Contact' handleClick={close} exact />
            </ul>
          </div>
        </nav>
      </div>
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
