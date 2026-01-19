import styles from "@/styles/AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Baris Ariburnu</h1>
        <div className={styles.subtitle}>Senior Software Developer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m a passionate software developer focused on creating
              innovative solutions and clean code. I work with various modern
              technologies and love building efficient applications.
            </p>
            <p className={styles.paragraph}>
              I&apos;m experienced in full-stack development, working with both
              frontend and backend technologies to create complete solutions
              that solve real-world problems.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Technical Skills</h2>
            <p className={styles.paragraph}>
              Specialized in GIS (Geographic Information Systems), full-stack
              development with Django/Python, JavaScript/TypeScript, React, and Node.js.
              Experienced with Oracle Spatial, PostgreSQL, GeoServer, and modern
              web technologies. Passionate about writing technical articles and
              sharing knowledge with the developer community.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Open Source</h2>
            <p className={styles.paragraph}>
              I contribute to open source projects and believe in the power of
              collaboration. Check out my GitHub profile to see my contributions
              and open source work.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              When I&apos;m not coding, I enjoy writing technical articles on
              Medium about GIS technologies, sharing knowledge with the
              developer community, and exploring new technologies and
              frameworks.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
