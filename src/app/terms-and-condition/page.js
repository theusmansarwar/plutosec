import React from "react";
import styles from "./page.module.css";
import "../globals.css";
import Breadcrumb from "@/Components/Breadcrumb";
export const metadata = {
  title: "Careers | PlutoSec",
  description:
    "By using PlutoSec, you agree to our terms, including service rules, payment policies, and data protection guidelines. Stay compliant and secure.",
};
const page = () => {
  return (
    <div className={styles.aboutpage}>
      <div className={styles.bgSection}>
        <div className={styles.bgSection1}>
          {" "}
          <Breadcrumb />
        </div>
      </div>
      <h1 className={styles.htext}>Terms and Condition</h1>

      <section id="about-us" className={styles.aboutus}>
      <p>
    You accept our terms when you use PlutoSec. You must stop using the site if you do not agree.
    You can only use our services for legal reasons. You must not harm or disturb the platform.
    We may block you or take legal action if you break the rules.
  </p>
  <p>
    You must keep your login details safe. You are fully responsible for your account.
    We are not responsible for lost or misused passwords.
  </p>
  <p>
    You cannot copy content from our website. You must not use our name, logo, or other material without permission.
    We will act if you share or copy our content without approval.
  </p>
  <p>
    You must pay the full amount when you buy anything. You agree that we use safe third-party tools to handle payments.
    You may lose access if a payment fails or is delayed.
  </p>
  <p>
    You accept that small service breaks may happen. No system runs without problems all the time.
    We try our best to keep things running smoothly. We are not responsible for losses caused by bugs or delays.
  </p>
  <p>
    You may see links that lead to other websites. You visit those at your own risk.
    We do not control their content or safety.
  </p>
  <p>
    You agree that we collect basic data to keep the services working. You trust us to protect your details.
    You can ask us to delete your data anytime.
  </p>
  <p>
    You must not upload fake, harmful, or illegal files. You cannot share spam, abuse, or bad code.
    You may lose access if you break these rules. You must not lie or act falsely.
  </p>
  <ul>
    <li>You also agree that we own all feedback or ideas you share.</li>
    <li>You will not get rewards or credit for them.</li>
  </ul>
  <p>
    You must meet the age rules before using PlutoSec. You confirm that you can create an account.
    You need a guardian if you are too young. You may lose your access if we find a fake identity or fraud.
  </p>
  <p>
    You agree that we can change the terms at any time. You should check the page to stay updated.
    You accept each change when you keep using our site. Some features may not work during updates.
    You may not get a warning each time.
  </p>
  <p>
    You must stay fair in case of any dispute. You also accept that we can close risky or inactive accounts.
    You accept our rules when you use the site. You cannot say you did not read or see them.
    You must follow our terms each time you visit PlutoSec.
  </p>
  <p>
    You will not get refunds unless we allow one. You agree to solve issues peacefully first.
    You may go to court if nothing works. You must follow local laws and respect our steps.
    You must stay away from lies, threats, or abuse. We report crimes when needed.
  </p>
  <p>
    You must protect your system when using our services. You must report bugs or security gaps when you find them.
    You agree that we are not responsible for any other sites. You use outside links at your own risk.
  </p>
  <h2>Important Points:</h2>
  <ul>
    <li>Use PlutoSec only in legal ways</li>
    <li>Do not copy or share anything without our approval</li>
    <li>Always act with honesty and fairness</li>
  </ul>
  <p>
    You can reach out if you have any questions. You may ask about data, payments, or support.
    PlutoSec is here to help you stay safe. You gain strong service when you follow our terms.
    You join a platform that cares about trust and fairness.
  </p>
      </section>

    </div>
  );
};

export default page;
