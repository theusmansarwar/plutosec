"use client";
import React from "react";
import "./Popular.css";
import "./Services.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const posts = [
  {
    id: 1,
    title: "Lorem Ipsum simply dummy text of the printing.",
    date: "Thursday, Jan 8 2024",
    image: "https://images.pexels.com/photos/3184638/pexels-photo-3184638.jpeg",
  },
  {
    id: 2,
    title:
      "Lorem Ipsum simply text dummy text of the and printing and typesetting industry.",
    date: "Thursday, Jan 8 2024",
    image: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg",
  },
  {
    id: 3,
    title:
      "Lorem Ipsum simply text dummy text of the and printing and typesetting industry.",
    date: "Thursday, Jan 8 2024",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
  },
  {
    id: 4,
    title:
      "Lorem Ipsum simply text dummy text of the and printing and typesetting industry.",
    date: "Thursday, Jan 8 2024",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
  },
];

const Popular = () => {
  const router = useRouter();

  return (
    <div className="Popular">
      <div className="Head-area">
        <div className="headings">
          <h1>Popular </h1>
          <img src="/headingimg.svg" />
        </div>
        <p className="viewall-text" onClick={() => router.push("/services")}>
          View All <FaArrowRightLong />
        </p>
      </div>
      <div className="split-container">
        <div className="left-post">
          <img src={posts[0].image} alt={posts[0].title} />
          <h3>{posts[0].title}</h3>
          <p className="date-pill">{posts[0].date}</p>
        </div>
        <div className="right-posts">
       
          
      
            <div  className="mini-post">
              <img src={posts[1].image} alt={posts[1].title} />
              <div className="text-content">
                <p>{posts[1].title}</p>
                <span className="date-pill">{posts[1].date}</span>
              </div>
            </div>
            <div  className="mini-post">
              <img src={posts[1].image} alt={posts[1].title} />
              <div className="text-content">
                <p>{posts[1].title}</p>
                <span className="date-pill">{posts[1].date}</span>
              </div>
            </div>
            <div  className="mini-post">
              <img src={posts[1].image} alt={posts[1].title} />
              <div className="text-content">
                <p>{posts[1].title}</p>
                <span className="date-pill">{posts[1].date}</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
