import styles from "@/styles/KuvvetLegal.module.css";
import Link from "next/link";

const TermsPage = () => (
  <article className={styles.container}>
    <div className={styles.eyebrow}>KUVVET</div>
    <h1 className={styles.title}>Terms of Service</h1>
    <p className={styles.updated}>Effective: 27 August 2026</p>

    <section className={styles.section}>
      <h2>The service</h2>
      <p>
        KUVVET provides workout planning and logging tools. It is not medical advice, diagnosis or
        treatment. Train within your ability and seek qualified medical guidance where appropriate.
      </p>
    </section>

    <section className={styles.section}>
      <h2>Free and Pro features</h2>
      <p>
        Local planning, workout logging, history, body-weight tracking, import and export remain
        available without a subscription. KUVVET Pro covers optional managed services such as
        cloud backup, cross-device synchronization and service-backed analytics.
      </p>
    </section>

    <section className={styles.section}>
      <h2>Google Play subscriptions</h2>
      <ul>
        <li>Prices, billing periods and any trial eligibility shown by Google Play are authoritative.</li>
        <li>Subscriptions renew automatically unless cancelled in Google Play before the renewal date.</li>
        <li>Cancellation stops future renewal; access may continue until the paid-through date.</li>
        <li>Deleting a KUVVET account does not automatically cancel a Google Play subscription.</li>
        <li>Purchase verification may be delayed while Google Play or the network is unavailable; pending purchases do not grant Pro access.</li>
      </ul>
    </section>

    <section className={styles.section}>
      <h2>Your data and acceptable use</h2>
      <p>
        You are responsible for backups of local-only data. Do not misuse the service, interfere
        with its security, automate fraudulent purchases or upload content you have no right to use.
        Losing Pro access never deletes or hides local workout data.
      </p>
    </section>

    <section className={styles.section}>
      <h2>Open source and third-party content</h2>
      <p>
        KUVVET is based on openGym and its application source is offered under GNU AGPL-3.0-or-later.
        Third-party exercise data, visuals and platform services remain subject to their respective
        licenses and terms. See <Link href="/projects/kuvvet-app/source/">Source code &amp; licenses</Link>.
      </p>
    </section>

    <section className={styles.section}>
      <h2>Support</h2>
      <p>
        For purchase and subscription issues, use the <Link href="/projects/kuvvet-app/billing-help/">billing help page</Link>.
        General questions can be sent through the <Link href="/contact/">contact page</Link>.
      </p>
    </section>
  </article>
);

export async function getStaticProps() {
  return { props: { title: "KUVVET Terms of Service" } };
}

export default TermsPage;
