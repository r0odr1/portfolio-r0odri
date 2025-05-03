'use client';

import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
import styles from './Projects.module.css';

const projectsData = [
  {
    id: 1,
    title: 'RicaApp',
    description: 'Es una app web, enfocada en servicios de restaurante para pedir comida online y poder hacer reservas en el restaurante, siempre y cuando estén registrados en la aplicación. \n\nSe ofrece una buena experiencia de usuario visual y fluida. Cabe resaltar que tiene vista responsive, quiere decir que se puede abrir en cualquier dispositivo sin perder consistencia.',
    image: '/assets/images/ricaapp.png',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Express', 'TypeScript'],
    links: {
      live: 'https://front-app-restaurant.vercel.app',
    },
  },
  {
    id: 2,
    title: 'Blog Cafe',
    description: 'Café Bloog es un blog dedicado al mundo del café, con contenido sobre variedades, preparación y curiosidades. Su diseño visual atractivo facilita la lectura y la navegación. \n\nOfrece una experiencia de usuario fluida y cuenta con diseño responsive, lo que permite acceder desde cualquier dispositivo sin perder calidad ni funcionalidad.',
    image: '/assets/images/blogcafe.png',
    tags: ['Html', 'Css', 'JavaScript'],
    links: {
      live: 'https://cafebloog.netlify.app',
    },
  },
  {
    id: 3,
    title: 'Frontend Store',
    description: 'Frontend Store es una tienda en línea que ofrece una experiencia de compra moderna y accesible. Con una interfaz limpia y navegación sencilla, permite a los usuarios explorar y adquirir productos de manera eficiente. \n\nEl sitio está diseñado para adaptarse a cualquier dispositivo, gracias a su diseño responsive, lo que garantiza una experiencia fluida y consistente en móviles, tabletas y computadoras.',
    image: '/assets/images/frontendstore.png',
    tags: ['Html', 'Css', 'JavaScript'],
    links: {
      live: 'https://fro-store.netlify.app',
    },
  },
  {
    id: 4,
    title: 'Festival de musica',
    description: 'Festival de Música es una aplicación web que muestra información sobre festivales y artistas destacados. Su diseño atractivo y navegación simple facilitan la exploración del contenido musical. \n\nEl sitio cuenta con diseño responsive, lo que asegura una experiencia fluida y consistente en móviles, tabletas y computadoras.',
    image: '/assets/images/festivalmusica.png',
    tags: ['Html', 'Sass (con mixins)', 'JavaScript', 'Gulp'],
    links: {
      live: 'https://musics-festivals.netlify.app',
    },
  },
  {
    id: 5,
    title: 'Bienes Raices',
    description: 'Inmuebles XYZ es una plataforma en línea para la compra, venta y alquiler de propiedades, con una amplia variedad de inmuebles y fotos de alta calidad para facilitar la toma de decisiones. \n\nEl sitio cuenta con filtros de búsqueda avanzados y diseño responsive, lo que asegura una experiencia fluida en cualquier dispositivo.',
    image: '/assets/images/bienesraices.png',
    tags: ['Html', 'Sass (con mixins)', 'JavaScript', 'Gulp'],
    links: {
      live: '',
    },
    status: 'En Curso',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'React', 'JavaScript', 'Node.js', 'Next.js'];
  
  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className={styles.filters}>
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.filterButton} ${filter === category ? styles.active : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className={styles.projectGrid}>
          {filteredProjects.map(project => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                {project.status && (
                  <span className={styles.projectLabel}>{project.status}</span>
                )}
                <img src={project.image} alt={project.title} />
              </div>
              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className={styles.links}>
                  {project.links.live ? (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} />
                      <span>Demo</span>
                    </a>
                  ) : (
                    <span className={`${styles.disabledLink}`}>
                      <ExternalLink size={20} />
                      <span>Demo</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;