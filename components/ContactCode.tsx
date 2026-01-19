import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'github',
    link: 'barisariburnu',
    href: 'https://github.com/barisariburnu',
  },
  {
    social: 'linkedin',
    link: 'barisariburnu',
    href: 'https://www.linkedin.com/in/barisariburnu',
  },
  {
    social: 'medium',
    link: '@barisariburnu',
    href: 'https://medium.com/@barisariburnu',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
