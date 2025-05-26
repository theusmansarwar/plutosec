"use client";

import { useEffect, useState } from "react";
import Head from "next/head";

import Bloader from "@/Components/Skeletonloaders/Bloader";
import "./BlogDetail.css"; // ✅ import regular CSS
import { fetchBlogBySlug } from "@/DAL/fetch";
import { baseUrl } from "@/Config/Config";
import { formatDate } from "@/utils/Formatedate";
import SubscribeBlock from "./SubscribeBlock";
import Comments from "./Comments";
import AuthorShare from "./AuthorShare";

export default function BlogDetail({ slug }) {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (slug) {
      fetchData();
      window.scrollTo(0, 0);
    }
  }, [slug]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetchBlogBySlug(slug);
      if (res?.blog) {
        setBlog(res.blog);
      } else {
        setError("Blog not found.");
      }
    } catch (err) {
      setError("Error fetching blog.");
    } finally {
      setLoading(false);
    }
  };

  const sanitizedContent = blog?.detail?.replace(/<script.*?<\/script>/gis, "");

  return (
    <>
      {blog && (
        <Head>
          <title>{blog.title} | PlutoSec</title>
          <meta
            name="description"
            content={blog.metaDescription || blog.title}
          />
          <meta property="og:title" content={blog.title} />
          <meta
            property="og:description"
            content={blog.metaDescription || blog.title}
          />
          <meta property="og:image" content={baseUrl + blog.thumbnail} />
          <meta property="og:type" content="article" />
          <link rel="preload" as="image" href={baseUrl + blog.thumbnail} />
          
        </Head>
      )}

      <div className="blog-wrapper">
        {loading ? (
          <Bloader />
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <>
            <h1 className="blog-title"> {blog.title}</h1>
            <p className="category-text">
              <span>{formatDate(blog.publishedDate)}</span>
              <span>{blog.category?.name}</span>
            </p>
            <div className="Top-Blog-section">
              <img
                src={baseUrl + blog.thumbnail}
                alt={blog.title}
                className="blog-image"
              />
              <div className="sub-block">
                {" "}
                <SubscribeBlock />
              </div>
            </div>
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            />
     
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: blog?.faqSchema, // This must be a valid JSON string without surrounding quotes!
  }}
/>
            <Comments blogId={blog?._id} comments={blog?.comments} />
            <AuthorShare author={blog?.author} />
          </>
        )}
      </div>
    </>
  );
}
