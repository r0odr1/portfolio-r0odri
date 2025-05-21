'use client';

import { ExternalLink } from 'lucide-react';
import { useRef, useState } from 'react';
import DropdownMenuPortal from './DropdownMenuPortal';
import styles from './Projects.module.css';

const projectsData = [
  {
    id: 1,
    title: 'RicaApp',
    description: 'Es una app web, enfocada en servicios de restaurante, para pedir comida en línea y realizar reservas en el restaurante, siempre y cuando estén registrados en la aplicación. \n\nSe ofrece una buena experiencia de usuario visual y fluida. Cabe resaltar que tiene diseño responsive, lo que significa que puede abrirse en cualquier dispositivo sin perder consistencia.',
    image: '/assets/images/ricaapp.png',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Express', 'TypeScript'],
    links: {
      live: 'https://front-app-restaurant.vercel.app',
      repos: [
        { name: 'Repositorio del Front', url: 'https://github.com/jesusdavid24/front-app-restaurant' },
        { name: 'Repositorio del Back', url: 'https://github.com/Cristianjs93/back-app-restaurant' },
      ]
    },
  },
  {
    id: 2,
    title: 'Blog Café',
    description: 'Blog Café es un blog dedicado al mundo del café, con contenido sobre variedades, preparación y curiosidades. Su diseño visual atractivo facilita la lectura y la navegación. \n\nOfrece una experiencia de usuario fluida y cuenta con diseño responsive, lo que permite acceder desde cualquier dispositivo sin perder calidad ni funcionalidad.',
    image: '/assets/images/blogcafe.png',
    tags: ['Html', 'Css', 'JavaScript'],
    links: {
      live: 'https://cafebloog.netlify.app',
      repos: [
        {name: 'Repositorio', url: 'https://github.com/r0odr1/coffee-blog'}
      ]
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
      repos: [
        {name: 'Repositorio', url: 'https://github.com/r0odr1/coffee-blog',}
      ],
    },
  },
  {
    id: 4,
    title: 'Festival de Música',
    description: 'Festival de Música es una aplicación web que muestra información sobre festivales y artistas destacados. Su diseño atractivo y navegación simple facilitan la exploración del contenido musical. \n\nEl sitio cuenta con diseño responsive, lo que asegura una experiencia fluida y consistente en móviles, tabletas y computadoras.',
    image: '/assets/images/festivalmusica.png',
    tags: ['Html', 'Sass (con mixins)', 'JavaScript', 'Gulp'],
    links: {
      live: 'https://musics-festivals.netlify.app',
      repos: [
        {name: 'Repositorio', url: 'https://github.com/r0odr1/FestivalMusica'},
      ]
    },
  },
  {
    id: 5,
    title: 'Bienes Raíces',
    description: 'Bienes Raíces es una plataforma en línea para la compra, venta y alquiler de propiedades, con una amplia variedad de inmuebles y fotos de alta calidad para facilitar la toma de decisiones. \n\nEl sitio cuenta con filtros de búsqueda avanzados y diseño responsive, lo que asegura una experiencia fluida en cualquier dispositivo.',
    image: '/assets/images/bienesraices.png',
    tags: ['Html', 'Sass (con mixins)', 'JavaScript', 'Gulp'],
    links: {
      live: '',
      repos: [
        {name: 'Repositorio', url: 'https://github.com/r0odr1/bienes-raices'},
      ]
    },
    status: 'En Curso',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);
  
  const categories = ['All', 'React', 'JavaScript', 'Node.js', 'Next.js'];
  
  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(project => project.tags.includes(filter));


  const buttonRefs = useRef<{ [key: number]: HTMLButtonElement | null }>({});
  const ignoreCloseRef = useRef(false);

  const handleDropdownToggle = (id: number, event?: React.MouseEvent) => {
    if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
    if (openDropdownId === id) {
      setOpenDropdownId(null);
      setAnchorRect(null);
    } else {
      const btn = buttonRefs.current[id];
      setOpenDropdownId(id);
      setAnchorRect(btn ? btn.getBoundingClientRect() : null);
    }
  };

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
                  {project.links.repos?.length === 1 ? (
                    <a href={project.links.repos[0].url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} />
                      <span>Repositorio</span>
                    </a>
                  ) : project.links.repos?.length > 1 ? (
                    <>
                      <button
                        ref={el => {
                          (buttonRefs.current[project.id] = el)
                        }}
                        className={styles.dropdownButton}
                        onMouseDown={(e) => handleDropdownToggle(project.id, e)}
                      >
                        <ExternalLink size={20} />
                        <span>Repositorios</span>
                      </button>
                      <DropdownMenuPortal
                        open={openDropdownId === project.id}
                        anchorRect={anchorRect}
                        onClose={() => setOpenDropdownId(null)}
                      >
                        <ul className={styles.dropdownMenu}>
                          {project.links.repos.map((repo, index) => (
                            <li key={index}>
                              <a href={repo.url} target="_blank" rel="noopener noreferrer">
                                {repo.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </DropdownMenuPortal>
                    </>
                  ) : null}
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