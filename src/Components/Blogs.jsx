'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // If using app/ router
import { FaArrowRightLong } from 'react-icons/fa6';
import './Blogs.css';
import './Services.css'
import { fetchallBloglist } from '@/DAL/fetch';
import HCard from './Skeletonloaders/HCard';

const Blogs = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
 const [loading, setLoading] = useState(true);
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
     finally {
      setLoading(false);
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
        <span style={{ color: 'var(--shadow-low3)' }}> ...read more</span>
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
         {loading ? (
<HCard/>
         ):(
      blogs?.map((post) => (
        <div className="blog-card" key={post._id} onClick={() => router.push(`/blogs/${post.slug}`)}>
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
      )))}
    </div>
  );
};

export default Blogs;
