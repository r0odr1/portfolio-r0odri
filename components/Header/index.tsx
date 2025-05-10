'use client';

import { Menu, Moon, Sun, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [theme, setTheme] = useState<'theme-dark' | 'theme-light'>('theme-light');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'theme-dark' : 'theme-light');

    setTheme(initialTheme as 'theme-dark' | 'theme-light');
    document.documentElement.classList.add(initialTheme);

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'theme-dark' ? 'theme-light' : 'theme-dark';
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span>Portafolio</span>
        </Link>

        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="#about" onClick={closeMenu}>Sobre Mí</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#projects" onClick={closeMenu}>Proyectos</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#experience" onClick={closeMenu}>Experiencia</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#education" onClick={closeMenu}>Formación</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#contact" onClick={closeMenu}>Contacto</Link>
            </li>
            <li className={styles.navItem}>
              <button
                onClick={toggleTheme}
                className={styles.themeToggleButton}
                aria-label="Toggle theme">
                {theme === 'theme-dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;