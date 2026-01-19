import { Project } from '@/types';
import styles from '@/styles/ProjectCard.module.css';
import {
  SiNextdotjs,
  SiFlutter,
  SiOracle
} from 'react-icons/si';
import {
  FiMap,
  FiPlay,
  FiFolder,
  FiFileText
} from 'react-icons/fi';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'SiNextdotjs':
        return <SiNextdotjs />;
      case 'SiFlutter':
        return <SiFlutter />;
      case 'FiMap':
        return <FiMap />;
      case 'SiOracle':
        return <SiOracle />;
      case 'FiPlay':
        return <FiPlay />;
      case 'FiFileText':
        return <FiFileText />;
      default:
        return <FiFolder />;
    }
  };

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <div className={styles.icon}>
            {getIcon(project.icon)}
          </div>
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
