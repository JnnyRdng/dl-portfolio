import React from "react";
import SDA2022 from '~/images/clients/SDA2022.png';
import SDA2023 from '~/images/clients/SDA 2023.png';
import Evcom2021 from '~/images/clients/Evcom 2021.png';
import RedBull from '~/images/clients/Red Bull.png';
import BBCBitesize from '~/images/clients/BBC Bitesize.png';
import WHO from '~/images/clients/WHO.png';
import UnitedNations from '~/images/clients/United Nations.png';
import Chillhop from '~/images/clients/Chillhop.png';
import LKK from '~/images/clients/LKK.png';
import NGS from '~/images/clients/NGS.png';
import NMS from '~/images/clients/NMS.png';
import NOWTV from '~/images/clients/NOWTV.png';
import styles from './ClientGrid.module.scss';
import Image from "next/image";
import { FullWidth } from "../typography/FullWidth";

export const ClientGrid = () => {

  const width = 120;

  return (
    <>
    <FullWidth colour="black">
      <section className={styles.grid}>
        <Image src={SDA2022} width={width} alt="'Scottish Design Awards 2022' logo" className={styles.gridItem} />
        <Image src={SDA2023} width={width} alt="'Scottish Design Awards 2023' logo" className={styles.gridItem} />
        <Image src={Evcom2021} width={width} alt="'Evcom 2021' logo" className={styles.gridItem} />
        <Image src={RedBull} width={width} alt="'Red Bull' logo" className={styles.gridItem} />
        <Image src={BBCBitesize} width={width} alt="'BBC Bitesize' logo" className={styles.gridItem} />
        <Image src={WHO} width={width} alt="'World Health Organisation' logo" className={styles.gridItem} />
        <Image src={UnitedNations} width={width} alt="'United Nations' logo" className={styles.gridItem} />
        <Image src={Chillhop} width={width} alt="'Chillhop' logo" className={styles.gridItem} />
        <Image src={LKK} width={width} alt="'Lee Kum Kee' logo" className={styles.gridItem} />
        <Image src={NGS} width={width} alt="'National Galleries Scotland' logo" className={styles.gridItem} />
        <Image src={NMS} width={width} alt="'National Museums Scotland' logo" className={styles.gridItem} />
        <Image src={NOWTV} width={width} alt="'Now TV' logo" className={styles.gridItem} />
      </section>
    </FullWidth>
    </>
  );
}


const clients = ['SDA2022.png',
  'SDA 2023.png',
  'Evcom 2021.png',
  'Red Bull.png',
  'BBC Bitesize.png',
  'WHO.png',
  'United Nations.png',
  'Chillhop.png',
  'LKK.png',
  'NGS.png',
  'NMS.png',
  'NOWTV.png',]