import React from "react";
import "./OurPartnersCard.css";

// Partner Data Array
const partnerData = [
  {
    logo: "/tsplus-logo.svg", // make sure this path is correct or use an import if you want
    description: [
      "amet, ex sit luctus Ut maximus Ut convallis, placerat ex malesuada odio eget elit Nunc est. commodo quis malesuada ipsum Nunc fringilla sapien Lorem sit odio",
      "massa non tortor. tincidunt sollicitudin. enim. viverra tincidunt Nunc amet, maximus quis viverra dui. sodales. lacus, Ut elit lorem. quis elit varius urna ex",
      "volutpat malesuada ipsum placerat. dui tempor Quisque sit Nam vel nec lobortis, gravida nec porta enim. Donec diam scelerisque Donec placerat. quis ipsum non",
    ],
  },
  {
    logo: "/pecb-logo.svg",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
      "In condimentum facilisis porta. Sed nec diam eu diam mattis viverra nulla.",
      "Fringilla vitae, scelerisque eget, malesuada at, neque. Vivamus eget nibh. Etiam cursus leo vel metus.",
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
            Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur eget
            vulputate amet aptent vivamus.Lorem ipsum odor amet, consectetuer
            adipiscing elit. Nascetur eget vulputate amet aptent vivamus.Lorem
            ipsum odor amet, consectetuer adipiscing elit. Nascetur eget
            vulputate amet aptent vivamus.
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
              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartnersCard;
