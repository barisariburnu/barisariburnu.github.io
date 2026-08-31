import styles from "@/styles/KuvvetLegal.module.css";
import Link from "next/link";

const PrivacyPage = () => (
  <article className={styles.container}>
    <div className={styles.eyebrow}>KUVVET</div>
    <h1 className={styles.title}>Privacy Policy</h1>
    <p className={styles.updated}>Effective: 31 August 2026</p>

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
        <li>If you subscribe: Google Play product and lifecycle data. The purchase token is sent over HTTPS for verification and retained by the KUVVET service using authenticated encryption, together with a one-way ownership hash.</li>
        <li>If free-tier advertising is enabled and your privacy choice permits an ad request: IP address, app interactions, diagnostic information, and device or account identifiers (which can include the Android advertising ID) processed by Google Mobile Ads.</li>
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
        synchronization processes the data you send to that server. KUVVET 1.1 includes Google
        Mobile Ads and Google&apos;s User Messaging Platform. For eligible free users, one restrained
        banner may be requested on Library, Plan, or Stats only after production configuration and
        the applicable privacy choice permit it. Home, active Workout, History, Settings, and Pro
        do not request advertising; verified Pro access suppresses all ads. Google may use ad data
        for advertising, measurement, diagnostics, and fraud prevention under its own privacy terms.
      </p>
      <p>
        Where required, the in-app privacy message lets you accept, reject, or revisit advertising
        choices from Settings. Non-personalized advertising can still use local or mobile identifiers
        for frequency limits and aggregated reporting. Denied or unresolved consent produces no KUVVET
        ad request and does not limit workout features.
      </p>
    </section>

    <section className={styles.section}>
      <h2>Control, export and deletion</h2>
      <p>
        You can export or erase local workout data from Settings. Managed cloud is opt-in: before its
        first upload, KUVVET identifies the plans, workout history, body-weight entries and settings
        that leave the device. You can export or delete the managed remote copy from Settings, even
        when local training remains offline. Advanced insights are calculated locally from completed
        workouts. Signed-in users can permanently delete their profile and synced data from Settings.
        See the{" "}
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
