import styles from "@/styles/KuvvetLegal.module.css";
import Link from "next/link";

const AccountDeletionPage = () => (
  <article className={styles.container}>
    <div className={styles.eyebrow}>KUVVET</div>
    <h1 className={styles.title}>Account &amp; Data Deletion</h1>
    <p className={styles.updated}>For KUVVET Android and web profiles</p>

    <section className={styles.section}>
      <h2>Delete a signed-in account</h2>
      <ol>
        <li>Open KUVVET and sign in or connect the app to your KUVVET server profile.</li>
        <li>Open Settings → Account.</li>
        <li>Select Delete account and confirm the permanent deletion.</li>
      </ol>
      <p>
        This removes the profile, passkey credentials, synced workout state, push subscription,
        stored entitlement and purchase-token hash. Local data on other disconnected devices must
        be erased separately.
      </p>
    </section>

    <section className={styles.section}>
      <h2>Delete local-only data</h2>
      <p>
        If you use KUVVET without an account, open Settings → Reset everything. You may export a
        backup first. Removing the app also removes its app-private local storage, subject to Android
        backup settings on your device.
      </p>
    </section>

    <section className={styles.section}>
      <h2>Request help from the web</h2>
      <p>
        If you cannot access the app, use the publisher&apos;s <Link href="/contact/">contact page</Link>{" "}
        and request “KUVVET account deletion.” We may ask you to prove control of the account without
        requesting a password or purchase token.
      </p>
    </section>

    <div className={styles.note}>
      Account deletion does not cancel Google Play billing. Cancel separately through{" "}
      <a href="https://play.google.com/store/account/subscriptions">Google Play subscriptions</a>.
      Limited security audit records may remain for up to 90 days, and Google retains its own
      transaction records under its policies.
    </div>
  </article>
);

export async function getStaticProps() {
  return { props: { title: "Delete a KUVVET Account" } };
}

export default AccountDeletionPage;
