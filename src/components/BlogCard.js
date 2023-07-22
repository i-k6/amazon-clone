import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard() {
  return (
    <div className="col-md-3 col-sm-6 col-xs-12 mb-4">
      <div className="blog-card">
        <div className="card-images">
          <img className="img-fluid" src="images/blog-1.jpg" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">1 July 2023</p>
          <h5 className="title">Best Click Store</h5>
          <div className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </div>
          <Link to="/blogs/:id" className="button mt-2">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
