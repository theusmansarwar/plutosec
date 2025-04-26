
import React from "react";
import "./Blogs.css";
import { FaArrowRightLong } from "react-icons/fa6";

const blogPosts = [
  {
    id: 1,
    date: "27",
    month: "MAY",
    author: "@samurai2099",
    title: "15 Disadvantages Of Freedom And How You Can Workaround It.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["#meditation", "#mentalpeace"],
  },
  {
    id: 2,
    date: "10",
    month: "APR",
    author: "@zenwriter",
    title: "The Art of Slowing Down in a Fast World.",
    content:
      "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus.",
    tags: ["#mindfulness", "#lifestyle"],
  },
];

const truncateContent = (text, maxLength) => {
  if (text.length <= maxLength) return text;

  const trimmed = text.slice(0, maxLength);
  const lastSpace = trimmed.lastIndexOf(" ");
  const visibleText = trimmed.slice(0, lastSpace);

  return (
    <>
      {visibleText}
      <span style={{ color: "#8a8a8a" }}> read more</span>
    </>
  );
};

const Blogs = () => {
  return (
    <div className="Blogs">
      <div className="Head-area">
        <div className="headings">
          <h1>Latest Blogs</h1>
          <img src="/headingimg.svg" />
        </div>
        <p className="viewall-text" onClick={() => router.push("/services")}>
          View All <FaArrowRightLong />
        </p>
      </div>
      {blogPosts.map((post) => (
        <div className="blog-card" key={post.id}>
          <div className="blog-date">
            <h2>{post.date}</h2>
            <p>{post.month}</p>
            <span>{post.author}</span>
          </div>

          <div className="blog-content">
            <h3>{post.title}</h3>
            <p>{truncateContent(post.content, 150)}</p>
            <div className="tags">
              {post.tags.map((tag, index) => (
                <button key={index}>{tag}</button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
