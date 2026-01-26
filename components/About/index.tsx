import { Code, Monitor, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className="section-title">Sobre Mí</h2>

        <div className={styles.content}>
          <div className={styles.bio}>
            <p>
            Me apasiona crear aplicaciones web intuitivas y responsivas. Disfruto transformando ideas en experiencias digitales interactivas y fáciles de usar.
            Constantemente amplío mis conocimientos en desarrollo front-end y back-end, para estar al día con las tendencias del sector.
            </p>
            <p>
            Actualmente, me enfoco en mejorar mis habilidades mediante proyectos prácticos, explorando nuevos frameworks y profundizando en el diseño responsivo
            y código limpio. Valoro el trabajo en equipo y la comunicación efectiva, y siempre busco colaborar para resolver desafíos complejos.
            </p>
          </div>


          <div className={styles.skills}>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>
                <Monitor size={24} />
              </div>
              <h3>Front-end Development</h3>
              <p>Creación de interfaces de usuario interactivas y receptivas con marcos modernos.</p>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>
                <Code size={24} />
              </div>
              <h3>Back-end Development</h3>
              <p>Creación de aplicaciones robustas del lado del servidor y API RESTful.</p>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>
                <Users size={24} />
              </div>
              <h3>Collaboration</h3>
              <p>Trabajar eficazmente en equipo, utilizando control de versiones y metodologías ágiles.</p>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>
                <Zap size={24} />
              </div>
              <h3>Performance Optimization</h3>
              <p>Mejorar la velocidad y la eficiencia de las aplicaciones para una mejor experiencia del usuario.</p>
            </div>
          </div>

          <div className={styles.technologies}>
            <h3>Tecnologías con las que trabajo:</h3>
            <div className={styles.techList}>

              {/* Lenguajes */}
              <div className={styles.tech}>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5"
                  width={24}
                  height={24}
                />
                <span>HTML5</span>
              </div>
              <div className={styles.tech}>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3"
                  width={24}
                  height={24}
                />
                <span>CSS3</span>
              </div>
              <div className={styles.tech}>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript"
                  width={24}
                  height={24}
                />
                <span>JavaScript</span>
              </div>
              <div className={styles.tech}>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript"
                  width={24}
                  height={24}
                />
                <span>TypeScript</span>
              </div>
              <div className={styles.tech}>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python"
                  width={24}
                  height={24}
                />
                <span>Python</span>
              </div>

              {/* Frameworks y Librerías */}
              <div className={styles.tech}>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React"
                  width={24}
                  height={24}
                />
                <span>React</span>
              </div>
              <div className={styles.tech}>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js"
                  width={24}
                  height={24}
                />
                <span>Next.js</span>
              </div>
              <div className={styles.tech}>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" alt='Angular'
                  width={24}
                  height={24}
                />
                <span>Angular</span>
              </div>
              <div className={styles.tech}>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularmaterial/angularmaterial-original.svg" alt='Angular Material'
                  width={24}
                  height={24}
                />
                <span>Angular Material</span>
              </div>
              <div className={styles.tech}>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-plain.svg" alt='.Net'
                  width={24}
                  height={24}
                />
                <span>.Net</span>
              </div>
              <div className={styles.tech}>
                <Image
                  src="/assets/images/strapi.png" alt="Strapi"
                  width={24}
                  height={24}
                />
                <span>Strapi</span>
              </div>
              <div className={styles.tech}>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" alt='Sass'
                  width={24}
                  height={24}
                />
                <span>Sass</span>
              </div>
              <div className={styles.tech}>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gulp/gulp-plain.svg" alt='Gulp'
                  width={24}
                  height={24}
                />
                <span>Gulp</span>
              </div>
              <div className={styles.tech}>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" alt='Prisma'
                  width={24}
                  height={24}
                />
                <span>Prisma</span>
              </div>
              <div className={styles.tech}>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg" alt="Ionic"
                  width={24}
                  height={24}
                />
                <span>Ionic</span>
              </div>

              {/* Herramientas y Plataformas */}
              <div className={styles.tech}>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js"
                  width={24}
                  height={24}
                />
                <span>Node.js</span>
              </div>
              <div className={styles.tech}>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt='Git'
                  width={24}
                  height={24}
                />
                <span>Git</span>
              </div>
              <div className={styles.tech}>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt='GitHub'
                  width={24}
                  height={24}
                />
                <span>GitHub</span>
              </div>
              <div className={styles.tech}>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" alt="GitLab"
                  width={24}
                  height={24}
                />
                <span>GitLab</span>
              </div>
              <div className={styles.tech}>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg" alt="Storybook"
                  width={24}
                  height={24}
                />
                <span>Storybook</span>
              </div>
              <div className={styles.tech}>
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma"
                    width={24}
                    height={24}
                  />
                  <span>Figma</span>
              </div>
              <div className={styles.tech}>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/karma/karma-original.svg" alt='Karma'
                  width={24}
                  height={24}
                />
                <span>Karma</span>
              </div>
              <div className={styles.tech}>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg" alt='Bitbucket'
                  width={24}
                  height={24}
                />
                <span>Bitbucket</span>
              </div>
              <div className={styles.tech}>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" alt='Jira'
                  width={24}
                  height={24}
                />
                <span>Jira</span>
              </div>
              <div className={styles.tech}>
                <Image
                  src="/assets/images/stripe.svg" alt="Stripe"
                  width={24}
                  height={24}
                />
                <span>Stripe</span>
              </div>
              <div className={styles.tech}>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt='Postman'
                  width={24}
                  height={24}
                />
                <span>Postman</span>
              </div>
              <div className={styles.tech}>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                  alt="MySQL Workbench"
                  width={24}
                  height={24}
                />
                <span>Workbench</span>
              </div>

              {/* Bases de Datos */}
              <div className={styles.tech}>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" alt="SQL Server"
                  width={24}
                  height={24}
                />
                <span>SQL Server</span>
              </div>
              <div className={styles.tech}>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL"
                  width={24}
                  height={24}
                />
                <span>PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;