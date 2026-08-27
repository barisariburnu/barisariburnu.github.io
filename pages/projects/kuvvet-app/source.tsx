import styles from "@/styles/KuvvetLegal.module.css";

const SourcePage = () => (
  <article className={styles.container}>
    <div className={styles.eyebrow}>KUVVET</div>
    <h1 className={styles.title}>Source Code &amp; Licenses</h1>
    <p className={styles.updated}>Corresponding source offer</p>

    <section className={styles.section}>
      <h2>KUVVET source</h2>
      <p>
        KUVVET&apos;s development repository is private. The complete corresponding source for every
        distributed Play release remains publicly downloadable here, without publishing private
        development history or signing credentials.
      </p>
      <ul>
        <li>
          KUVVET 1.0.0 — <a href="/projects/kuvvet-app/source/kuvvet-1.0.0-source.tar.gz">source archive</a>{" "}
          · <a href="/projects/kuvvet-app/source/kuvvet-1.0.0-checksums.txt">checksums</a>
        </li>
      </ul>
      <p>
        The archive contains the exact application and server source, license notices, Android
        project, build metadata and release instructions corresponding to the published artifact.
        Signing keys, credentials, generated build output and Git history are intentionally excluded.
      </p>
      <p>
        Private release commit: <code>637df93</code>
        <br />
        Source SHA-256: <code>4f9aa80c60ea855e41dead277ec1012ff7778cf995a406ce0609b90a242a0956</code>
        <br />
        AAB SHA-256: <code>d0025663505990c8dc2ca1a8d6d9d4ad902693fe86d187cbc8c5409fac3f5dc4</code>
      </p>
    </section>

    <section className={styles.section}>
      <h2>License and upstream</h2>
      <p>
        KUVVET is a modified distribution of{" "}
        <a href="https://gitea.com/DuarteSantos/openGym">openGym by Duarte Santos</a>. Application
        source is available under GNU AGPL-3.0-or-later, including the upstream app-store distribution
        permission. KUVVET branding does not remove upstream copyright or attribution.
      </p>
    </section>

    <section className={styles.section}>
      <h2>Third-party notices</h2>
      <p>
        The repository&apos;s NOTICE.md records body-map, exercise-data and exercise-media provenance
        and license terms. Exercise visuals are not covered by the application&apos;s AGPL license and
        may be used only under the publisher&apos;s applicable commercial media license.
      </p>
    </section>
  </article>
);

export async function getStaticProps() {
  return { props: { title: "KUVVET Source Code & Licenses" } };
}

export default SourcePage;
