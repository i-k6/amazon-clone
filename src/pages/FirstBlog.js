import React from 'react'
import  Breadcrumb from '../components/BreadCrumb';
import  Meta from "../components/Meta";
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
const FirstBlog = () => {
  return (
    <>
    <Meta title = {"Dynamic Blog Name"} />
    <Breadcrumb title= "Dynamic Blog Name" />
    <div className="blog-wrapper home-wrapper-2 py-2">
      <div className="container-xxl">
        <div className="col-12">
        <div className="single-blog-card">
          <Link to="/blogs" className='d-flex align-items-center gap-10'>
            <HiArrowLeft/> back to Blogs
            </Link>
          <h3 className="title">
            First Blog
          </h3>
          <img src="/images/blog-1.jpg"
                className='img-fluid w-100 my-4'
                alt="blog_1" />
          <p>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Est ducimus perspiciatis,
                provident tempora distinctio aperiam ex nobis corrupti n
                on assumenda facilis placeat dolores ea, expedita recusandae suscipit?
                Veniam, ipsa quis?
          </p>
         </div>            
        </div>
        </div>
      </div>
    </>
  )
}

export default FirstBlog