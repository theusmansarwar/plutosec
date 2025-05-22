import React from 'react';
import './blogskeleton.css';

const BCard = () => {
  return (
    <div className="blog-grid">
      {[1, 2, 3].map((_, i) => (
        <div className="skeleton-blog" key={i}>
          <div className="skeleton2-image"></div>
          <div className="skeleton-title"></div>
           <div className="skeleton-title"></div>
            <div className="skeleton-title"></div>
          <div className="skeleton-meta"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
        </div>
      ))}
    </div>
  );
};

export default BCard;
