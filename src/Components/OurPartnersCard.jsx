import React from "react";
import "./OurPartnersCard.css";

// Partner Data Array
const partnerData = [
  {
    logo: "/tsplus-logo.svg", // make sure this path is correct or use an import if you want
    description: [
      "TS Plus gives you powerful tools to manage projects and automate tasks. You can boost productivity and keep your team focused. The platform supports smooth collaboration and helps you complete work faster. It connects well with your existing tools. You also get features that fit any team size.",
    "PlutoSec adds a layer of strong cybersecurity to TS Plus. Your data stays safe from online threats. The combined solution supports your business goals. You get efficiency with full protection. You also get peace of mind."],
  },
  {
    logo: "/pecb-logo.svg",
    description: [
      "PECB offers certifications in information security, compliance, and quality management. You can meet global standards like ISO and stay ahead in your field. The programs help you grow professionally and build trust in your organization. Each course brings practical knowledge. You can apply it in real business environments.",
      "PlutoSec brings deep cybersecurity strength to the partnership. You get more value from every training. Your team becomes ready to face digital risks. The collaboration helps you build trust and protect your operations."
       ],
  },
];

const OurPartnersCard = () => {
  return (
    <div>
      <div className="heading-area">
        <div className="left">
          <div className="headings">
            <h1>Our Best Partners</h1>
            <img src="/headingimg.svg" />
          </div>
          <p className="description-heading">
          Our partners share our mission to build a safer digital world. They bring value, trust, and expertise. Together, we deliver stronger security solutions to every client.
          </p>
        </div>
      </div>

      <div className="partners-card-grid">
        {partnerData.map((partner, index) => (
          <div className="partners-card" key={index}>
            <div className="card-header">
              <img
                src={partner.logo}
                alt="Partner Logo"
                className="logo-image"
              />
            </div>
            <div className="card-body">
              {partner.description.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartnersCard;
