import { Award, Calendar, GraduationCap } from 'lucide-react';
import styles from './Education.module.css';

const educationData = [
  {
    id: 1,
    degree: 'Ingenieria de Software',
    institution: 'Corporación Universitaria Iberoamericana',
    period: '2024 - 2027',
    description: '',
    achievements: [],
  },
  {
    id: 2,
    degree: 'Diplomado Habilidades en programación con énfasis en aplicaciones web',
    institution: 'Universidad Sergio Arboleda',
    period: 'Jun 2022 - Dic 2022',
    description: '',
    achievements: [],
  },
  {
    id: 3,
    degree: 'Técnico Profesional en Análisis y Diseño de Bases de Datos',
    institution: 'Compensar Unipanamericana Institución Universitaria',
    period: '2010 - 2018',
    description: '',
    achievements: [],
  },
  {
    id: 4,
    degree: 'Bachiller Académico',
    institution: 'Instituto Pedagógico Nacional',
    period: '1996 - Dic 2009',
    description: '',
    achievements: [],
  },
];

const certificationData = [
  {
    id: 1,
    title: 'Remote Work Professional Certification RWPC',
    issuer: 'CertiProf',
    date: 'Julio 2024',
    credentialLink: '/assets/images/cremote.jpg',
  },
];

const Education = () => {
  return (
    <section id="education" className={styles.education}>
      <div className="container">
        <h2 className="section-title">Educación y Certificaciones</h2>
        
        <div className={styles.educationSection}>
          <h3 className={styles.sectionSubtitle}>
            <GraduationCap size={24} />
            <span>Educación Académica</span>
          </h3>
          
          <div className={styles.educationList}>
            {educationData.map(item => (
              <div key={item.id} className={styles.educationItem}>
                <div className={styles.educationHeader}>
                  <h4>{item.degree}</h4>
                  <div className={styles.institution}>
                    <span>{item.institution}</span>
                    <div className={styles.period}>
                      <Calendar size={16} />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </div>
                
                <p>{item.description}</p>
                
                {item.achievements.length > 0 && (
                  <div className={styles.achievements}>
                    <h5>Logros:</h5>
                    <ul>
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.certificationSection}>
          <h3 className={styles.sectionSubtitle}>
            <Award size={24} />
            <span>Certificaciones</span>
          </h3>
          
          <div className={styles.certificationList}>
            {certificationData.map(cert => (
              <div key={cert.id} className={styles.certificationItem}>
                <h4>{cert.title}</h4>
                <div className={styles.certMeta}>
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
                <a href={cert.credentialLink} target="_blank" rel="noopener noreferrer" className={styles.certLink}>
                  Ver credencial
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;