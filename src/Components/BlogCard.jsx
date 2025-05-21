"use client";

import React, { useEffect, useState } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import Link from "next/link";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

import "./BlogCard.css"; // If using global CSS. Otherwise, use module CSS.
import { fetchallBloglist } from "@/DAL/fetch";
import { baseUrl } from "@/Config/Config";

const BlogCard = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetchallBloglist(1, 3);

      setBlogs(response?.blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const truncateContent = (text, maxLength) => {
    if (text.length <= maxLength) return text;

    const trimmed = text.slice(0, maxLength);
    const lastSpace = trimmed.lastIndexOf(" ");
    const visibleText = trimmed.slice(0, lastSpace);

    return (
      <>
        {visibleText}
        <span style={{ color: "#8a8a8a" }}>... read more</span>
      </>
    );
  };

  return (
    <div className="blog-grid">
      {blogs?.map((post) => (
        <div key={post._id} className="blog-post-card">
          <div
            className="post-image"
            style={{
              backgroundImage: `url(${baseUrl + post.thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
            }}
            onClick={() => router.push(`/blogs/${post.slug}`)}
          />
          <div className="post-content">
            <h2 className="post-title">{post.title}</h2>
            <div className="post-meta">
              <div className="author">
                <IoPersonCircleSharp/>
                <span className="author-name">{post.author}</span>
              </div>
              <span className="date">
                <MdOutlineHorizontalRule /> {post.date}
              </span>
              <span className="shares">
                <IoShareSocialOutline /> {post.shares}
              </span>
            </div>
            <p className="post-description">{truncateContent(post.description, 300)}</p>
            <Link href="#" className="view-post-link">
              View Post
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
