import React from 'react'
import  Breadcrumb from '../components/BreadCrumb';
import  Meta from "../components/Meta";
import {FaHome} from "react-icons/fa";
import {MdCall} from "react-icons/md";
import {CiMail} from "react-icons/ci";
import {BsInfoCircle} from "react-icons/bs";

const Contact = () => {
  return (
    <>
    <Meta title = {"Contact Us"} />
    <Breadcrumb title= "Contact Us" />
    <div className="contact-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8256195150643!2d78.34301297477661!3d17.42015428347257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93877fae478f%3A0xef416c0438a2ef!2sAmazon%20Hyderabad%20Campus(HYD13)!5e0!3m2!1sen!2sin!4v1689664006083!5m2!1sen!2sin" 
            width="600" 
            height="450" 
            className='border-0 w-100'
            allowFullScreen="" 
            loading="lazy" 
            title='Contact'
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title">Contact</h3>
                <form action=''>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="name">
                      Name
                    </label>
                    <input className="form-control" type="text" id="name" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input className="form-control" type="email" id="email" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                      Number
                    </label>
                    <input className="form-control" type="email" id="email" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="message">
                      Message
                    </label>
                    <textarea className="form-control" id="message" required />
                  </div>
                  <button className="button border-0">Submit
                  </button>
                </form>
              </div>
              <div>
                <h3 className="contact-title">Get in Touch Wtih Us</h3>
                <div>
                  <ul className="ps-0">
                    <li className='mb-5 d-fex gap-15 align-items-center'>
                    <FaHome className='fs-5 gap-5'/> Hno: 7738 , Hyderabad , Telanagana , India.
                    </li>
                    <li className='mb-5 d-fex gap-15 align-items-center'>
                    <MdCall className='fs-5'/> +91883833330.
                    </li>
                    <li className='mb-5 d-fex gap-15 align-items-center'>
                      <CiMail className='fs-5'/> Example@gmail.com.
                    </li>
                    <li className='mb-5 d-fex gap-15 align-items-center'>
                      <BsInfoCircle className='fs-5'/> Open 24/7.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact