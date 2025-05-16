'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // If using app/ router
import { FaArrowRightLong } from 'react-icons/fa6';
import './Blogs.css';
import './Services.css'
import { fetchallBloglist } from '@/DAL/fetch';

const Blogs = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetchallBloglist(1,3);

    
        setBlogs(response?.blogs);
       
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const truncateContent = (text, maxLength) => {
    if (text.length <= maxLength) return text;

    const trimmed = text.slice(0, maxLength);
    const lastSpace = trimmed.lastIndexOf(' ');
    const visibleText = trimmed.slice(0, lastSpace);

    return (
      <>
        {visibleText}
        <span style={{ color: '#8a8a8a' }}>... read more</span>
      </>
    );
  };

  return (
    <div className="Blogs">
      <div className="Head-area">
        <div className="headings">
          <h1>Latest Blogs</h1>
          <img src="/headingimg.svg" alt="Heading" />
        </div>
        <p className="viewall-text" onClick={() => router.push("/blogs")}>
          View All <FaArrowRightLong />
        </p>
      </div>

      {blogs?.map((post) => (
        <div className="blog-card" key={post._id}>
          <div className="blog-date">
            <h2>{new Date(post?.publishedDate).getDate()}</h2>
            <p>{new Date(post?.publishedDate).toLocaleString('default', { month: 'short' }).toUpperCase()}</p>
           
          </div>

          <div className="blog-content">
            <h3>{post.title}</h3>
            <p>{truncateContent(post?.description, 250)}</p>
            <div className="tags">
              <button>{post?.category?.name}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
