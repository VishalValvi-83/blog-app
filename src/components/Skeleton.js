import React from 'react'
import './BlogCardSkeleton.css'
function BlogCardSkeleton() {
  return (
    <div data-aos="fade-up" className="blog-card-container">
      <div className="blog-card blog-card-skeleton">
        <div className="img-wrap image-placeholder"></div>
        <div className="blog-body content-placeholder">
          <h2 className="blog-title title-placeholder">{}</h2>
          <p className="blog-content description-placeholder">
            <span className='read-more button-placeholder'></span>
          </p>
          <div className="blog-meta">
            <p className="blog-author author-placeholder">
              By : <strong className='author-name'></strong>
            </p>
            <p className="blog-date date-placeholder"> 

            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCardSkeleton