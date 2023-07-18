import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import Special from '../components/Special'
const Home = () => {
  return (
    <>
    <section className="home-wrapper-1 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative "
            >
              <img src="images/main-banner-1.jpg"
                className='img-fluid rounded-3'
               alt="main banner" />

                <div className="main-banner-content position-absolute">
                <h4>Go For The Pro</h4>
                <h5>iPhone 14Pro</h5>
                <p>From 1,100,00 to 1,20,000</p>
                <Link className='button'>Buy Now</Link>
               </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex gap-8 flex-wrap justify-content-between align-items-center">
            <div className="small-banner position-relative ">
              <img src="images/catbanner-01.jpg"
                className='img-fluid rounded-3'
               alt="small banner" />

                <div className="small-banner-content position-absolute">
                <h4>Best Seller</h4>
                <h5>iPhone 14Pro</h5>
                <p>From 1,100,00 <br /> to 1,20,000</p>
               </div>
            </div>
            <div className="small-banner position-relative ">
              <img src="images/catbanner-02.jpg"
                className='img-fluid rounded-3'
               alt="small banner" />

                <div className="small-banner-content position-absolute">
                <h4>Go For The Pro</h4>
                <h5>iPhone Watch</h5>
                <p>From 1,100,00 <br />to 1,20,000</p>
               </div>
            </div> <div className="small-banner position-relative ">
              <img src="images/catbanner-03.jpg"
                className='img-fluid rounded-3'
               alt="small banner" />

                <div className="small-banner-content position-absolute">
                <h4>Go For The Pro</h4>
                <h5>iPad Mini</h5>
                <p>From 1,100,00 <br /> to 1,20,000</p>
               </div>
            </div> <div className="small-banner position-relative ">
              <img src="images/catbanner-04.jpg"
                className='img-fluid rounded-3'
               alt="small banner" />

                <div className="small-banner-content position-absolute">
                <h4>Sounds Good!</h4>
                <h5>Apple Headset</h5>
                <p>From 1,100,00 <br />to 1,20,000</p>
               </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-15">
                <img src="images/service.png" alt="services" />
                <h6>Free Shipping</h6>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="images/service-02.png" alt="services" />
                <h6>Daily Discounts</h6>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="images/service-03.png" alt="services" />
                <h6>Support 24/7</h6>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="images/service-04.png" alt="services" />
                <h6>Affordable Prices</h6>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="images/service-05.png" alt="services" />
                <h6>Secure Payments</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex  flex-wrap justify-content-between align-items-center">
              <div className='d-flex align-items-center'>
                <div>
                 <h6>Cameras</h6>
                 <p>10 Items</p>
                 </div>
                <img src="images/camera.jpg" alt="Camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                 <h6>Laptop</h6>
                 <p>10 Items</p>
                 </div>
                <img src="images/laptop.jpg" alt="Camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                 <h6>Smart TV</h6>
                 <p>10 Items</p>
                 </div>
                <img src="images/tv.jpg" alt="Camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                 <h6>Headphones</h6>
                 <p>10 Items</p>
                 </div>
                <img src="images/Headphone.jpg" alt="Camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                 <h6>Cameras</h6>
                 <p>10 Items</p>
                 </div>
                <img src="images/camera.jpg" alt="Camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                 <h6>Laptop</h6>
                 <p>10 Items</p>
                 </div>
                <img src="images/laptop.jpg" alt="Camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                 <h6>Smart TV</h6>
                 <p>10 Items</p>
                 </div>
                <img src="images/tv.jpg" alt="Camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                 <h6>Headphones</h6>
                 <p>10 Items</p>
                 </div>
                <img src="images/Headphone.jpg" alt="Camera" />
              </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    <section className="Featured-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collections</h3>
          </div>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </section>
    <section className="special-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
        <div className="col-12">
            <h3 className="section-heading">Special Collections</h3>
          </div>
        </div>
        <div className="row">
          <Special/>
          <Special/>
          <Special/>
        </div>
      </div>
    </section>
    <section className="marquee-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-07.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="blog-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home