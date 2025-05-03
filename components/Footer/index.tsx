import { Heart } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <p className={styles.copyright}>
            &copy; {currentYear} Rodrigo Bonilla. Todos los derechos reservados.
          </p>
          
          <p className={styles.made}>
            Made with <Heart size={16} className={styles.heart} /> using React & Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;