import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../images/logo.jpg';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.logo}>
        <Image src={logo} alt='logo' width={100} height={100} /> {/* Ajuste o tamanho conforme necessário */}
      </div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">Sobre nós</Link>
        <Link href="/contato">Contato</Link>
      </div>
    </div>
  );
}

export default Menu;

