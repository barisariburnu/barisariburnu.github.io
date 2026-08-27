import styles from "@/styles/KuvvetLegal.module.css";
import Link from "next/link";

const BillingHelpPage = () => (
  <article className={styles.container}>
    <div className={styles.eyebrow}>KUVVET</div>
    <h1 className={styles.title}>Billing Help</h1>
    <p className={styles.updated}>Google Play subscriptions</p>

    <section className={styles.section}>
      <h2>Restore a purchase</h2>
      <ol>
        <li>Open KUVVET and connect to the same KUVVET account used for the purchase.</li>
        <li>Open Settings → KUVVET Pro.</li>
        <li>Select Restore purchases and wait for secure Google Play verification.</li>
      </ol>
    </section>

    <section className={styles.section}>
      <h2>Manage or cancel</h2>
      <p>
        Open Settings → KUVVET Pro → Manage subscription, or use{" "}
        <a href="https://play.google.com/store/account/subscriptions">Google Play subscriptions</a>.
        Uninstalling KUVVET or deleting your KUVVET account does not cancel billing.
      </p>
    </section>

    <section className={styles.section}>
      <h2>Pending, grace and expired states</h2>
      <p>
        Pending payments do not activate Pro. Active and grace-period purchases can provide Pro
        access after verification. Cancelled subscriptions remain active only until their paid-through
        date; on-hold, expired, revoked and unverified purchases do not provide Pro access.
      </p>
    </section>

    <section className={styles.section}>
      <h2>Need help?</h2>
      <p>
        Contact the publisher through the <Link href="/contact/">contact page</Link> with the app version
        and Google Play order number. Never send your purchase token, password or recovery code.
        Refund eligibility and payment-method issues are handled under Google Play&apos;s policies.
      </p>
    </section>
  </article>
);

export async function getStaticProps() {
  return { props: { title: "KUVVET Billing Help" } };
}

export default BillingHelpPage;
