import React from 'react'
import { Link } from 'react-router-dom'
import { BsGithub, BsTwitter, BsLinkedin,} from 'react-icons/bs'
const Footer = () => {
  return (
   <>
   <footer className='py-5'>
    <div className="container-xxl">
      <div className="row">
        <div className="col-3">
          <h4 className='text-white mb-4'>
            Contact Us
          </h4>
          <div className="footer-links d-flex flex-column">
            <address className='text-white fs-6'>
            227 Gopalnagar <br />Hyderabad, Telangana<br />500001
            </address>
            <Link className="text-white py-2 mb-1">+91-9929900011</Link>
            <Link className="text-white py-2 mb-1">Example@gmail.com</Link>
          </div>
        </div>
        <div className="col-3">
          <h4 className='text-white mb-4'>
            Information
          </h4>
          <div className="footer-links d-flex flex-column">
            <Link to="privacy-policy" className="text-white py-2 mb-1">Privacy Policy</Link>
            <Link to="refund-policy" className="text-white py-2 mb-1">Refund</Link>
            <Link to="shipping-policy" className="text-white py-2 mb-1">Shipping</Link>
            <Link to="termsandconditions" className="text-white py-2 mb-1">Terms & Conditions</Link>
          </div>
        </div>
        <div className="col-3">
          <h4 className='text-white mb-4'>
            Connect With US
          </h4>
          <div className="footer-links d-flex flex-column">
            <Link className="text-white py-2 mb-1">Twitter</Link>
            <Link className="text-white py-2 mb-1">Instagram </Link>
            <Link className="text-white py-2 mb-1">Facebook</Link>
          </div>
        </div>
        <div className="col-3">
          <h4 className='text-white mb-4'>Quick Links</h4>
          <div className="footer-links d-flex flex-column">
            <Link className="text-white py-2 mb-1">Laptops</Link>
            <Link className="text-white py-2 mb-1">Headphones</Link>
            <Link className="text-white py-2 mb-1">Tablets</Link>
            <Link className="text-white py-2 mb-1">Watch</Link>
          </div>
        </div>
      </div>
    </div>
   </footer>
   <footer className="py-3 mb-0 align-items-center">
    <div className="container-xxl">
      <div className="row">
        <div className="col-3">
        <div className="social_icons d-flex align-items-center  gap-30">
          <a className =" text-white  " href="https://github.com/karn6600" target='_blank' rel="noreferrer">
            <BsGithub className='fs-5'/>
          </a>
          <a className =" text-white " href="https://www.linkedin.com/in/karan-kumar-487a8a260/" target='_blank' rel="noreferrer">
            <BsLinkedin className='fs-5'/>
          </a>
          <a className =" text-white " href="https://twitter.com/karn_kumr_" target='_blank' rel="noreferrer">
            <BsTwitter className='fs-5'/>
          </a>
        </div>
        </div>
      </div>
    </div>
   </footer>
   <footer className='py-4 align-items-center'>
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <p className="text-center mb-0 text-white">
            &copy; {new Date().getFullYear} Made By Karan
          </p>
        </div>
      </div>
    </div>
   </footer>
   </>
  )
}

export default Footer