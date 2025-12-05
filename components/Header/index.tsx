'use client';

import { Menu, Moon, Sun, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'theme-dark' | 'theme-light'>('theme-light');
  const [activeSection, setActiveSection] = useState('');
  const sections = useMemo(() => [
    'about', 'projects', 'experience', 'education', 'contact'
  ],[]);

useEffect(() => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme: 'theme-dark' | 'theme-light' = savedTheme === 'theme-dark' || savedTheme === 'theme-light' ? savedTheme : prefersDark ? 'theme-dark' : 'theme-light';
  setTheme(initialTheme);
  document.documentElement.classList.add(initialTheme);

  const handleScroll = () => {
    setScrolled(window.scrollY > 10);

    const scrollPosition = window.scrollY;
    let current = '';
    for (const id of sections) {
      const scrol = document.getElementById(id);
      if (!scrol) continue;
      const top = scrol.offsetTop - 100;
      const bottom = top + scrol.offsetHeight;
      if (scrollPosition >= top && scrollPosition < bottom) {
        current = id;
        break;
      }
    }
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
      current = sections[sections.length - 1];
    }
    setActiveSection(current);
  };

  handleScroll(); // primera ejecución
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, [sections]);

/* Cierra el menú si se hace scroll mientras está abierto */
useEffect(() => {
  if (!isMenuOpen) return;
  const closeOnScroll = () => closeMenu();
  window.addEventListener('scroll', closeOnScroll, { passive: true });
  return () => window.removeEventListener('scroll', closeOnScroll);
}, [isMenuOpen]);

/* Bloquea / desbloquea el scroll del body cuando el menú se abra/cierre */
useEffect(() => {
  if (isMenuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
  return () => {
    document.body.style.overflow = '';
  };
}, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const closeMenu  = () => setIsMenuOpen(false);

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
          className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonActive : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            {sections.map((id) => (
              <li key={id} className={styles.navItem}>
                <Link
                  href={`#${id}`}
                  onClick={closeMenu}
                  className={
                    activeSection === id ? styles.navLinkActive : styles.navLink
                  }
                >
                  {id === 'about' && 'Sobre Mí'}
                  {id === 'projects' && 'Proyectos'}
                  {id === 'experience' && 'Experiencia'}
                  {id === 'education' && 'Formación'}
                  {id === 'contact' && 'Contacto'}
                </Link>
              </li>
            ))}

            <li className={styles.navItem}>
              <button
                onClick={toggleTheme}
                className={styles.themeToggleButton}
                aria-label="Toggle theme"
              >
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