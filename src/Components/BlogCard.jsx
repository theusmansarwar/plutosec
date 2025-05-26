"use client";

import React, { useEffect, useState } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { useRouter } from "next/navigation";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./BlogCard.css";
import { fetchallBloglist } from "@/DAL/fetch";
import { baseUrl } from "@/Config/Config";
import { formatDate } from "@/utils/Formatedate";
import BCard from "./Skeletonloaders/BCard";

const BlogCard = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
 const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 9; 
  useEffect(() => {
    fetchData();
  }, [page]);

 const fetchData = async () => {
    try {
      const response = await fetchallBloglist(page, itemsPerPage);
      setBlogs(response?.blogs);
      setTotalPages(response?.totalPages);
    } catch (err) {
      console.error("Error fetching blogs:", err);
      setError("Failed to load blogs.");
    } finally {
      setLoading(false);
    }
  };
 const handleChange = (event, value) => {
    setPage(value);
  };
  const truncateContent = (text, maxLength) => {
    if (text.length <= maxLength) return text;

    const trimmed = text.slice(0, maxLength);
    const lastSpace = trimmed.lastIndexOf(" ");
    const visibleText = trimmed.slice(0, lastSpace);

    return (
      <>
        {visibleText}
        <span style={{ color: "var(--shadow-low3)" }}>... read more</span>
      </>
    );
  };

  return (
    <>
    <div className="blog-grid">
      {loading ? (
        <BCard />
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
      
       blogs?.map((post) => (
          <div
            key={post._id}
            className="blog-post-card"
            onClick={() => router.push(`/blogs/${post.slug}`)}
          >
            <div
              className="post-image"
              style={{
                backgroundImage: `url(${baseUrl + post.thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "200px",
              }}
            />
            <div className="post-content">
              <h2 className="post-title">{post.title}</h2>
              <div className="post-meta">
                <div className="author">
                  <IoPersonCircleSharp />
                  <span className="author-name">{post.author}</span>
                </div>
                <span className="date">
                  <MdOutlineHorizontalRule /> {formatDate(post.publishedDate)}
                </span>
              </div>
              <p className="post-description">
                {truncateContent(post.description, 300)}
              </p>
            </div>
          </div>
           
        ))
     
          
      )}
        
    </div>
     <Stack spacing={2}  sx={{ width: '100%', alignItems:"center", justifyContent:"center", marginBottom:"30px" }}>
      <Pagination
  count={totalPages}
  page={page}
  onChange={handleChange}
  shape="rounded"
  variant="outlined" 
  sx={{
    "& .MuiPaginationItem-root": {
      color: "var(--background-color)",
      borderColor: "var(--background-color)",
    },
    "& .MuiPaginationItem-root.Mui-selected": {
      backgroundColor: "var(--background-color)",
      color: "black", 
      borderColor: "var(--background-color)",
    },
    "& .MuiPaginationItem-root:hover": {
      backgroundColor: "var(--shadow-low3)",
    },
  }}
/>



            </Stack>
            </>
  );
};

export default BlogCard;
