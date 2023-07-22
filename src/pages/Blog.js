import React from 'react';
import Breadcrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  return (
    <>
      <Meta title={"Blogs"} />
      <Breadcrumb title="Blogs" />
      <div className="blog-wrapper  home-wrapper-2 py-4">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 mb-4">
              <BlogCard />
            </div>
            <div className="col-md-6 mb-4">
              <BlogCard />
            </div>
            <div className="col-md-6 mb-4">
              <BlogCard />
            </div>
            <div className="col-md-6 mb-4">
              <BlogCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
