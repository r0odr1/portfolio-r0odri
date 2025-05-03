import { Calendar, MapPin } from 'lucide-react';
import styles from './Experience.module.css';

const experienceData = [
  {
    id: 1,
    title: 'Desarrollador Informatico',
    company: 'ClavisCo.',
    location: 'Costa Rica - Remoto',
    period: 'May 2024 - Abr 2025',
    description: 'Desarrollo de aplicaciones web completas, integrando tanto el frontend como el backend, y colaborando con el equipo para ofrecer soluciones técnicas escalables y seguras.',
    responsibilities: [
      'Diseñé, desarrollé y mantuve aplicaciones web completas (front-end y back-end)',
      'Traducí requisitos funcionales en soluciones técnicas viables en equipo',
      'Utilicé tecnologías como HTML, CSS, JavaScript, Angular, Node.js, Python, PHP y .NET',
      'Integré APIs y servicios externos para ampliar funcionalidades',
      'Realicé pruebas y depuración para asegurar la calidad del software',
      'Apliqué buenas prácticas de desarrollo y arquitectura de software',
      'Optimizé el rendimiento para mejorar la experiencia del usuario',
      'Identifiqué y mitigé vulnerabilidades de seguridad',
      'Implementé sistemas de autenticación y autorización',
      'Participé en reuniones de planificación y revisiones de código',
      'Compartí conocimientos con el equipo para fomentar su crecimiento profesional',
      'Me mantuve actualizado sobre nuevas tecnologías y tendencias web',
    ],
  },
  {
    id: 2,
    title: 'Desarrollador FullStack',
    company: 'Make It Real',
    location: 'Bogotá, Colombia - Remoto',
    period: 'Feb 2023 - Oct 2023',
    description: 'Desarrollo de aplicaciones web utilizando tecnologías modernas del ecosistema JavaScript, aplicando metodologías ágiles como Scrum y enfocándose en soluciones escalables y funcionales.',
    responsibilities: [
      'Desarrollé aplicaciones web con React, Next.js, JavaScript, CSS y Sass',
      'Trabajé bajo la metodología ágil Scrum para una mejor organización del equipo',
      'Desarrollé una aplicación de restaurante con autenticación de roles, envío de correos de registro, reserva y confirmación de compra',
      'Participé activamente en el diseño y desarrollo de funcionalidades completas de frontend y backend',
      'Fui seleccionado entre más de mil candidatos tras superar entrevista y prueba técnica',
      'Potencié mis habilidades técnicas y blandas mediante autoaprendizaje constante',
    ],
  },
  {
    id: 3,
    title: 'Auxiliar Administrativo',
    company: 'Arpro Arquitectos Ingenieros S.A.S',
    location: 'Bogotá, Colombia',
    period: 'Sep 2019 - Feb 2023',
    description: 'Apoyé procesos administrativos clave, incluyendo gestión documental, manejo de base de datos y coordinación de trámites financieros, con enfoque en eficiencia y precisión.',
    responsibilities: [
      'Creación y edición de base de datos de hojas de vida',
      'Escaneo, revisión e impresión de documentos administrativos y previsiones',
      'Elaboración y procesamiento de órdenes de giro con atención al detalle',
      'Gestión de archivos físicos y digitales para facilitar la consulta y trazabilidad',
      'Cumplimiento eficaz de tareas bajo presión en tiempos limitados',
      'Diseño y estructuración de una base de datos de hojas de vida para la empresa',
    ],
  },
  {
    id: 4,
    title: 'Practicante Analista de Soporte',
    company: 'PepsiCo Alimentos S.A.',
    location: 'Bogotá, Colombia',
    period: 'Mar 2018 - Ago 2018',
    description: 'Brindé soporte técnico y administrativo en plataformas internas, realizando pruebas, documentación y seguimiento de procesos automatizados para mejorar la eficiencia operativa.',
    responsibilities: [
      'Ejecución de pruebas técnicas en plataformas móviles y web (ECOM, Celuweb, SAP)',
      'Reporte y seguimiento de errores detectados en los aplicativos',
      'Supervisión diaria de servicios, promociones, productos y precios en la plataforma ECOM',
      'Visitas a distribuidores para verificar la correcta aplicación de procesos administrativos',
      'Documentación de procedimientos mediante manuales y materiales audiovisuales',
      'Control de procesos diarios de cierre por parte de los vendedores a nivel nacional',
    ],
  },
  {
    id: 5,
    title: 'Auxiliar Operativo Verificador de Garantias',
    company: 'Banco de Bogotá',
    location: 'Bogotá, Colombia',
    period: 'Ene 2012 - Abr 2016',
    description: 'Responsable de la verificación, gestión documental y validación de garantías para procesos de crédito. Apoyé la normalización de líneas de redescuento y la optimización del archivo físico mediante bases de datos.',
    responsibilities: [
      'Revisión y validación de pagarés, cartas de instrucción y libranzas para clientes bancarios',
      'Verificación en sistemas internos de garantías y líneas de redescuento',
      'Organización y depuración de archivos físicos para mejorar tiempos de respuesta',
      'Creación de base de datos para registrar documentos existentes en el área',
      'Apoyo en la normalización de procesos documentales con enfoque en eficiencia',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <h2 className="section-title">Experiencia Laboral</h2>
        
        <div className={styles.timeline}>
          {experienceData.map((experience, index) => (
            <div 
              key={experience.id} 
              className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
            >
              <div className={styles.timelineContent}>
                <div className={styles.header}>
                  <h3>{experience.title}</h3>
                  <h4>{experience.company}</h4>
                  <div className={styles.meta}>
                    <div className={styles.metaItem}>
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Calendar size={16} />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                </div>
                
                <p>{experience.description}</p>
                
                <div className={styles.responsibilities}>
                  <h5>Responsabilidades Clave:</h5>
                  <ul>
                    {experience.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;