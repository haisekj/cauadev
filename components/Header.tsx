"use client"

import { useState, useEffect } from "react"
import styles from "./Header.module.css"

interface HeaderProps {
  activeSection: string
}

export default function Header({ activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrollHeader : ""}`}>
      <nav className={`${styles.nav} container`}>
        <a href="#home" className={styles.navLogo}>
          Cauã Dev
        </a>

        <div className={`${styles.navMenu} ${isMenuOpen ? styles.showMenu : ""}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a
                href="#home"
                className={`${styles.navLink} ${activeSection === "home" ? styles.activeLink : ""}`}
                onClick={handleLinkClick}
              >
                <i className="uil uil-estate"></i> Início
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#about"
                className={`${styles.navLink} ${activeSection === "about" ? styles.activeLink : ""}`}
                onClick={handleLinkClick}
              >
                <i className="uil uil-user"></i> Sobre
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#skills"
                className={`${styles.navLink} ${activeSection === "skills" ? styles.activeLink : ""}`}
                onClick={handleLinkClick}
              >
                <i className="uil uil-file-alt"></i> Habilidades
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#projects"
                className={`${styles.navLink} ${activeSection === "projects" ? styles.activeLink : ""}`}
                onClick={handleLinkClick}
              >
                <i className="uil uil-scenery"></i> Projetos
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#contact"
                className={`${styles.navLink} ${activeSection === "contact" ? styles.activeLink : ""}`}
                onClick={handleLinkClick}
              >
                <i className="uil uil-message"></i> Contato
              </a>
            </li>
          </ul>

          <i className={`uil uil-times ${styles.navClose}`} onClick={() => setIsMenuOpen(false)}></i>
        </div>

        <div className={styles.navToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}
