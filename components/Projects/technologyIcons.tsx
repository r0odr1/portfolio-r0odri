import {
  Box,
  CheckCircle,
  Code,
  Cpu,
  Database,
  FileText,
  Globe,
  Layers,
  Lock,
  Package,
  Shield,
  Zap,
} from 'lucide-react';
import React from 'react';

const Palette = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="13" cy="13" r="8" />
    <path d="M5.5 7c3-2 7-2 10-2" />
    <path d="M7 17c2 3 6 7 10 7" />
    <circle cx="5.5" cy="4.5" r=".5" fill="currentColor" />
    <circle cx="18.5" cy="5.5" r=".5" fill="currentColor" />
    <circle cx="20.5" cy="11.5" r=".5" fill="currentColor" />
    <circle cx="4.5" cy="15.5" r=".5" fill="currentColor" />
  </svg>
);

export interface TechIcon {
  name: string;
  icon: React.ReactNode;
  color?: string;
}

export const technologyIcons: { [key: string]: TechIcon } = {
  'React': {
    name: 'React',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="2"/><circle cx="12" cy="2" r="1"/><circle cx="19" cy="8" r="1"/><circle cx="21" cy="15" r="1"/><circle cx="12" cy="22" r="1"/><circle cx="5" cy="15" r="1"/><circle cx="3" cy="8" r="1"/><path d="M12 4v16M12 4L6 10M12 4l6 6M12 20l-6-6M12 20l6-6"/></svg>,
    color: '#61DAFB'
  },
  'Next.js': {
    name: 'Next.js',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 1c6.1 0 11 4.9 11 11s-4.9 11-11 11S1 18.1 1 12 5.9 1 12 1z"/><path d="M7 12h.01M12 7v.01M16 12h.01M12 16v.01M12 12h.01"/></svg>,
    color: '#000000'
  },
  'Angular': {
    name: 'Angular',
    icon: <Box size={20} />,
    color: '#DD0031'
  },

  // Languages
  'TypeScript': {
    name: 'TypeScript',
    icon: <Code size={20} />,
    color: '#3178C6'
  },
  'JavaScript': {
    name: 'JavaScript',
    icon: <Code size={20} />,
    color: '#F7DF1E'
  },
  'Html': {
    name: 'Html',
    icon: <FileText size={20} />,
    color: '#E34C26'
  },
  'Css': {
    name: 'Css',
    icon: <FileText size={20} />,
    color: '#563D7C'
  },

  // Backend & Runtime
  'Node.js': {
    name: 'Node.js',
    icon: <Zap size={20} />,
    color: '#339933'
  },
  'Express': {
    name: 'Express',
    icon: <Zap size={20} />,
    color: '#000000'
  },

  // Databases
  'MongoDB': {
    name: 'MongoDB',
    icon: <Database size={20} />,
    color: '#13AA52'
  },
  'Mongoose': {
    name: 'Mongoose',
    icon: <Database size={20} />,
    color: '#AA4423'
  },
  'PostgreSQL': {
    name: 'PostgreSQL',
    icon: <Database size={20} />,
    color: '#336791'
  },
  'Sql': {
    name: 'Sql',
    icon: <Database size={20} />,
    color: '#CC2927'
  },

  // ORM/Query Builders
  'Sequelize': {
    name: 'Sequelize',
    icon: <Layers size={20} />,
    color: '#52B0E7'
  },
  'Prisma': {
    name: 'Prisma',
    icon: <Layers size={20} />,
    color: '#2D3748'
  },

  // State Management & Form Handling
  'Zustand': {
    name: 'Zustand',
    icon: <Package size={20} />,
    color: '#443E38'
  },
  'Redux DevTools': {
    name: 'Redux DevTools',
    icon: <Package size={20} />,
    color: '#764ABC'
  },
  'ContextAPI': {
    name: 'ContextAPI',
    icon: <Package size={20} />,
    color: '#61DAFB'
  },
  'React Hook Form': {
    name: 'React Hook Form',
    icon: <CheckCircle size={20} />,
    color: '#EC5990'
  },

  // HTTP Client & Validation
  'Axios': {
    name: 'Axios',
    icon: <Globe size={20} />,
    color: '#671DDF'
  },
  'React Query': {
    name: 'React Query',
    icon: <Globe size={20} />,
    color: '#FF4154'
  },
  'Zod': {
    name: 'Zod',
    icon: <Shield size={20} />,
    color: '#3E67AC'
  },

  // Security & Authentication
  'JWT': {
    name: 'JWT',
    icon: <Lock size={20} />,
    color: '#000000'
  },
  'Stripe': {
    name: 'Stripe',
    icon: <Lock size={20} />,
    color: '#5469D4'
  },

  // Styling
  'Tailwind CSS': {
    name: 'Tailwind CSS',
    icon: <Palette size={20} />,
    color: '#06B6D4'
  },
  'Sass (con mixins)': {
    name: 'Sass',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 1c6.1 0 11 4.9 11 11s-4.9 11-11 11S1 18.1 1 12 5.9 1 12 1z"/></svg>,
    color: '#CC6699'
  },

  // Build Tools & Utils
  'Gulp': {
    name: 'Gulp',
    icon: <Cpu size={20} />,
    color: '#CF4647'
  },

  // APIs & Services
  'OpenWeather API': {
    name: 'OpenWeather API',
    icon: <Globe size={20} />,
    color: '#FF6D00'
  },

  // AI
  'IA': {
    name: 'IA',
    icon: <Zap size={20} />,
    color: '#FF6B35'
  },

  // Stack Descriptions (for reference)
  'PERN Stack': {
    name: 'PERN Stack',
    icon: <Layers size={20} />,
    color: '#FF4154'
  },
};

interface TechnologyTagProps {
  tech: string;
}

export const TechnologyTag: React.FC<TechnologyTagProps> = ({ tech }) => {
  const techIcon = technologyIcons[tech];

  if (!techIcon) {
    return <span className="tag">{tech}</span>;
  }

  return (
    <span className="tag tech-tag" title={techIcon.name}>
      <span className="tech-icon">{techIcon.icon}</span>
      <span className="tech-name">{techIcon.name}</span>
    </span>
  );
};
