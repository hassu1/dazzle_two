'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <header className="bg-transparent py-2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 col-md-4">
            <Link href="/">
              <Image src="/img/logo-01.png" alt="Logo" width={133} height={40} style={{width:'200px', height:'auto'}} />
            </Link>
          </div>

          <div className="col-6 col-md-8 d-flex justify-content-end align-items-center">
            {/* Desktop Nav */}
            <nav className={styles.desktopNav}>
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <div className={styles.dropdown}>
                <span style={{fontWeight:600,color:'#FFF'}}>All Vehicles ▾</span>
                <div className={styles.dropdownMenu}>
                  <Link href="/vehicles/audi">Audi</Link>
                  <Link href="/vehicles/mercedes">Mercedes</Link>
                </div>
              </div>
              <Link href="/services">Our Services</Link>
              <Link href="/contact">Contact Us</Link>
            </nav>

            {/* Burger Icon */}
            <div className={styles.burger} onClick={toggleSidebar}>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}>
        <div className={styles.sidebarHeader}>
          <span className={styles.closeBtn} onClick={toggleSidebar}>×</span>
        </div>
        <ul>
          <li><Link href="/" onClick={toggleSidebar}>Home</Link></li>
          <li><Link href="/about" onClick={toggleSidebar}>About Us</Link></li>
          <li>
            <details>
              <summary>All Vehicles</summary>
              <ul>
                <li><Link href="/vehicles/audi" onClick={toggleSidebar}>Audi</Link></li>
                <li><Link href="/vehicles/mercedes" onClick={toggleSidebar}>Mercedes</Link></li>
              </ul>
            </details>
          </li>
          <li><Link href="/services" onClick={toggleSidebar}>Our Services</Link></li>
          <li><Link href="/contact" onClick={toggleSidebar}>Contact Us</Link></li>
        </ul>
      </div>

      {/* Overlay */}
      {sidebarOpen && <div className={styles.overlay} onClick={toggleSidebar}></div>}
    </header>
  );
}
