import { Code, Monitor, Users, Zap } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className={styles.content}>
          <div className={styles.bio}>
            <p>
              I'm passionate about building intuitive and responsive web applications. I enjoy transforming ideas into interactive, user-friendly digital experiences. I am constantly expanding my knowledge in front-end and back-end development, aiming to stay up-to-date with the latest industry trends.
            </p>
            <p>
              Currently, I am focused on enhancing my skills in web development through hands-on projects, exploring new frameworks, and diving deeper into responsive design and clean code principles. I believe in the power of teamwork and effective communication, and I am always looking for opportunities to collaborate with others and solve complex problems.
            </p>
          </div>
          
          <div className={styles.skills}>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>
                <Monitor size={24} />
              </div>
              <h3>Front-end Development</h3>
              <p>Creating responsive and interactive user interfaces with modern frameworks.</p>
            </div>
            
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>
                <Code size={24} />
              </div>
              <h3>Back-end Development</h3>
              <p>Building robust server-side applications and RESTful APIs.</p>
            </div>
            
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>
                <Users size={24} />
              </div>
              <h3>Collaboration</h3>
              <p>Working effectively in teams using version control and agile methodologies.</p>
            </div>
            
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>
                <Zap size={24} />
              </div>
              <h3>Performance Optimization</h3>
              <p>Enhancing application speed and efficiency for better user experience.</p>
            </div>
          </div>
          
          <div className={styles.technologies}>
            <h3>Technologies I work with:</h3>
            <div className={styles.techList}>
              <div className={styles.tech}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                <span>HTML5</span>
              </div>
              <div className={styles.tech}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                <span>CSS3</span>
              </div>
              <div className={styles.tech}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                <span>JavaScript</span>
              </div>
              <div className={styles.tech}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                <span>React</span>
              </div>
              <div className={styles.tech}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
                <span>TypeScript</span>
              </div>
              <div className={styles.tech}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" />
                <span>Next.js</span>
              </div>
              <div className={styles.tech}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                <span>Node.js</span>
              </div>
              <div className={styles.tech}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                <span>Python</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;