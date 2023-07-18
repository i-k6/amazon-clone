import React from 'react'
import  Breadcrumb from '../components/BreadCrumb';
import  Meta from "../components/Meta";
import BlogCard from '../components/BlogCard';
const Blog = () => {
  return (
    <>
    <Meta title = {"Blogs"} />
    <Breadcrumb title= "Blogs" />
    <div className="blog-wrapper home-wrapper-2 py-2">
      <div className="container-xxl">
        <div className="col-12">
        <div className="d-flex gap-10">
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
        </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default Blog