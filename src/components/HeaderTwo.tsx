'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HeaderTwo.module.css';

export default function HeaderTwo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/img/logo-01.png" alt="Logo" width={120} height={40} />
          </Link>
        </div>

        {/* Hamburger (mobile) */}
        <div className={styles.hamburger} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>

        {/* Navigation */}
        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ''}`}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>

          <div className={styles.dropdown}>
            <button className={styles.dropbtn} onClick={() => setDropdownOpen(!dropdownOpen)}>
              All Vehicles
              <span className={styles.arrow}>▼</span>
            </button>
            <div className={`${styles.dropdownContent} ${dropdownOpen ? styles.showDropdown : ''}`}>
              <Link href="/vehicles/audi">Audi</Link>
              <Link href="/vehicles/mercedes">Mercedes</Link>
              <Link href="/vehicles/bmw">BMW</Link>
            </div>
          </div>

          <Link href="/services">Our Services</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>

        {/* CTA */}
        <div className={styles.ctaButton}>
          <Link href="/get-started">
            <button>Explore Fleet</button>
          </Link>
        </div>
      </div>
    </header>
  );
}
