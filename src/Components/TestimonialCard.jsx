import React from "react";
import "./TestimonialCard.css";
import { FaStar } from "react-icons/fa6";
import { ImQuotesLeft } from "react-icons/im";
const TestimonialCard = () => {
  const rating = 3;
  return (
    <div className="testimonial-container">
      <div className="left-container">
        <div className="quote-icon">
          {" "}
          <ImQuotesLeft />
        </div>
        <div className="stars">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className="star"
              style={{ color: index < rating ? "gold" : "#ccc" }}
            />
          ))}
        </div>
        <p className="review">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          sunt voluptatum numquam! Vitae, quidem asperiores quos soluta animi
          quis et inventore debitis ipsum eos. Id sequi cumque sint, quibusdam
          voluptas adipisci rem laboriosam tenetur praesentium laudantium atque,
          assumenda voluptates. Nobis?
        </p>
        <p className="name">Anthony Bahringer</p>
        <p className="designation">Senior Research Manager</p>
      </div>
      <div className="right-container"    style={{
          backgroundImage: "url('/testimonial.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}></div>
    </div>
  );
};
export default TestimonialCard;