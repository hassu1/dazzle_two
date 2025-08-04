'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const vehicleBrands = [
  { name: "Audi", slug: "audi" },
  { name: "Mercedes", slug: "mercedes" },
  { name: "BMW", slug: "bmw" },
  { name: "Ferrari", slug: "ferrari" },
  { name: "Lamborghini", slug: "lamborghini" }
];

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
                <span className={styles.dropdownLabel} style={{color:'#FFF'}}>All Vehicles ▾</span>
                <div className={styles.dropdownMenu}>
                  {vehicleBrands.map((brand) => (
                    <Link key={brand.slug} href={`/all-vehicles/${brand.slug}`}>
                      {brand.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/services">Our Services</Link>
              <Link href="/contact-us">Contact Us</Link>
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
                <summary className='text-white'>All Vehicles</summary>
                <ul>
                  {vehicleBrands.map((brand) => (
                    <li key={brand.slug}>
                      <Link href={`/all-vehicles/${brand.slug}`} onClick={toggleSidebar}>
                        {brand.name}
                      </Link>
                    </li>
                  ))}
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
