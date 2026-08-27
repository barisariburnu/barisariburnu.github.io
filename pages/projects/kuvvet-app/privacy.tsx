import styles from "@/styles/KuvvetLegal.module.css";
import Link from "next/link";

const PrivacyPage = () => (
  <article className={styles.container}>
    <div className={styles.eyebrow}>KUVVET</div>
    <h1 className={styles.title}>Privacy Policy</h1>
    <p className={styles.updated}>Effective: 27 August 2026</p>

    <section className={styles.section}>
      <h2>Summary</h2>
      <p>
        KUVVET is local-first. Workout plans, logs, body-weight entries and app preferences stay
        on your device unless you explicitly connect the app to a compatible server or enable a
        Pro cloud service. Core workout logging does not require an account.
      </p>
    </section>

    <section className={styles.section}>
      <h2>Data we process</h2>
      <ul>
        <li>Local fitness data you enter, stored on your device.</li>
        <li>If you create or connect an account: profile name, passkey public credential, synced fitness data and session security records.</li>
        <li>If you enable notifications: push endpoint and cryptographic delivery keys.</li>
        <li>If you subscribe: Google Play product and lifecycle data. The raw purchase token is sent over HTTPS for verification, then retained only as a one-way server hash.</li>
        <li>Limited security audit records. The standard retention window is 90 days; network information is recorded only when the server operator enables that option.</li>
      </ul>
    </section>

    <section className={styles.section}>
      <h2>Why we process it</h2>
      <p>
        We use this data to provide workouts, optional synchronization and backup, authenticate
        accounts, deliver requested notifications, verify purchases, prevent fraud and keep the
        service secure. We do not sell personal information.
      </p>
    </section>

    <section className={styles.section}>
      <h2>Services and sharing</h2>
      <p>
        Google Play processes purchases under its own privacy terms. A server you choose for
        synchronization processes the data you send to that server. KUVVET 1.0 does not include an
        advertising SDK. If advertising is added in a later release, this policy and the Play Data
        safety disclosure will be updated before ad requests are enabled.
      </p>
    </section>

    <section className={styles.section}>
      <h2>Control, export and deletion</h2>
      <p>
        You can export or erase local workout data from Settings. Signed-in users can permanently
        delete their profile and synced data from Settings. See the{" "}
        <Link href="/projects/kuvvet-app/account-deletion/">account deletion guide</Link> for the exact steps. Google may
        retain purchase records under its own legal obligations.
      </p>
    </section>

    <section className={styles.section}>
      <h2>Contact</h2>
      <p>
        Privacy and data-rights requests can be sent through the publisher&apos;s{" "}
        <Link href="/contact/">contact page</Link>. Include “KUVVET privacy” in your message and do not
        include a purchase token or password.
      </p>
    </section>
  </article>
);

export async function getStaticProps() {
  return { props: { title: "KUVVET Privacy Policy" } };
}

export default PrivacyPage;
