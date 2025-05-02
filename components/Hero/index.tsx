'use client';

import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={`${styles.content} ${visible ? styles.visible : ''}`}>
        <div className={styles.profileContainer}>
          <div className={styles.profileImageWrapper}>
            <img
              src="/assets/images/profile.jpeg"
              alt="Profile"
              className={styles.profileImage}
            />
          </div>
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.name}>Rodrigo Bonilla</h1>
          <p className={styles.title}>Desarrollador Web</p>
          <p className={styles.description}>
          Soy desarrollador web apasionado, con experiencia en la creación de sitios web dinámicos y responsivos. Domino HTML, CSS, SASS, JavaScript, Angular, React, Node.js y SQL Server.
          Me encanta aprender nuevas tecnologías y mejorar mis habilidades constantemente. Busco un entorno de trabajo colaborativo donde pueda contribuir y crecer profesionalmente.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/r0odrigo-bonilla/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://github.com/r0odr1" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="mailto:rhbon.08@gmail.com" className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <a href="#about" className={styles.scrollDown}>
        <span>Scroll Down</span>
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default Hero;