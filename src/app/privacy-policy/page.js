import React from "react";
import styles from "./page.module.css";
import "../globals.css";
import Careers from "@/Components/Careers";
import Link from "next/link";
import Breadcrumb from "@/Components/Breadcrumb";
export const metadata = {
  title: "Careers | PlutoSec",
  description:
    "Discover why our company is the best choice for your needs, with outstanding service and quality.",
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
      <h1 className={styles.htext}>Privacy Policy</h1>

      <section id="about-us" className={styles.aboutus}>



  <p>At PlutoSec, your privacy comes first. We care about your trust and want to be open about how we collect, use, and protect your data. This policy explains what we collect, how we use it, and what rights you have. We keep it simple so you can feel safe and clear while using our services.</p>

  <h2>What We Collect</h2>
  <p>We collect basic details from you when you visit our site, sign up, or talk to us. This may include your:</p>
  <ul>
    <li>Name</li>
    <li>Email</li>
    <li>Phone</li>
    <li>Company name</li>
  </ul>
  <p>If you use our tools, we may collect device type, IP address, and browser info. We may also track how you use our website. This helps us protect your space, improve tools, and keep your account safe.</p>
  <p>We do not collect private data unless you choose to share it.</p>

  <h2>Why We Collect Your Data</h2>
  <p>We collect your data to provide a better and safer experience. We use it to:</p>
  <ul>
    <li>Create and manage your account</li>
    <li>Send you important updates</li>
    <li>Respond to your support requests</li>
    <li>Improve our services and tools</li>
    <li>Protect against security threats</li>
    <li>Follow legal rules and compliance requirements</li>
  </ul>
  <p>We only use your information for the purposes stated. We do not sell your data to any third party.</p>

  <h2>How We Protect Your Data</h2>
  <p>We take strong steps to protect your data using encryption, secure servers, and firewalls. Our team follows strict security standards, and access is limited to trained staff only.</p>
  <p>We keep your data only as long as needed and delete it securely afterward. You can request deletion at any time.</p>

  <h2>Sharing Your Information</h2>
  <p>We do not sell, rent, or trade your information. We share data only when needed to run our services or meet legal obligations. In rare cases, we may share your data with trusted partners who help us operate our business. These partners must follow the same privacy rules we do.</p>
  <p>Examples include:</p>
  <ul>
    <li>Hosting providers</li>
    <li>Customer support platforms</li>
    <li>Security and compliance services</li>
  </ul>

  <h2>Your Rights</h2>
  <p>You have full control over your information. You can:</p>
  <ul>
    <li>Ask us what data we hold</li>
    <li>Correct any incorrect details</li>
    <li>Ask us to delete your data</li>
    <li>Limit how we use your information</li>
    <li>Withdraw any permissions you gave</li>
  </ul>
  <p>To request any of these actions, contact us anytime. We respond quickly and clearly.</p>

  <h2>Cookies and Tracking</h2>
  <p>We use cookies to enhance your experience, remember your settings, and understand how you use our site. Cookies also help us measure traffic and performance.</p>
  <p>You can adjust cookie settings in your browser. Blocking cookies may affect how our site works for you.</p>

  <h2>Third-Party Links</h2>
  <p>Our website may link to other sites. We are not responsible for how those sites handle your data. Always review their privacy policies before sharing personal details. We only link to trusted platforms, but their rules may differ from ours.</p>

  <h2>Children’s Privacy</h2>
  <p>We do not collect or store data from children under 13. If we learn we have, we will delete it immediately. If you believe a child has shared data with us, please contact us right away.</p>

  <h2>Data Storage and Location</h2>
  <p>We store your data on secure servers in trusted data centers. Some data may be stored outside your country depending on your location and the services used. We follow strict legal and global security standards.</p>

  <h2>How Long Do We Keep Your Data</h2>
  <p>We retain your data only as long as necessary. Afterward, we remove it from our systems. You can request data deletion at any time.</p>

  <h2>Updates to Our Privacy Policy</h2>
  <p>We may update this policy as our services grow. We update the date at the top of the page when we make changes. You will be informed before major updates take effect.</p>
  <p>Please check this page regularly to stay informed. By using our services, you accept the latest version of this policy.</p>

  <h2>Contact Us</h2>
  <p>If you have any questions about this Privacy Policy, please reach out to us. We are here to help and answer your concerns.</p>
  <p>
    Email: <a href="mailto:contact@plutosec.ca">contact@plutosec.ca</a><br/>
    Website: <a href="https://www.plutosec.com" target="_blank">www.plutosec.com</a><br/>
    PlutoSec Privacy Team
  </p>

      </section>
    </div>
  );
};

export default page;
