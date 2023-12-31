import React from 'react'
import  Breadcrumb from '../components/BreadCrumb';
import  Meta from "../components/Meta";

const Wishlist = () => {
  return (
    <>
    <Meta title = {"Wishlist"} />
    <Breadcrumb title= "Wishlist" />
    <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="wishlist-card position-relative">
                     <img   src="images/cross.svg" 
                            alt="cross"
                            className="position-absolute cross fluid " />
                        <div className="wishlist-card-image">
                            <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />
                        </div>
                        <div className=" px-2 py-3 ">
                        <h5 className="title">iWatch</h5>
                        <h6 className="price">₹20,000</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="wishlist-card position-relative">
                     <img   src="images/cross.svg" 
                            alt="cross"
                            className="position-absolute cross fluid " />
                        <div className="wishlist-card-image">
                            <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />
                        </div>
                        <div className=" px-2 py-3 ">
                        <h5 className="title">iWatch</h5>
                        <h6 className="price">₹20,000</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="wishlist-card position-relative">
                     <img   src="images/cross.svg" 
                            alt="cross"
                            className="position-absolute cross fluid " />
                        <div className="wishlist-card-image">
                            <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />
                        </div>
                        <div className=" px-2 py-3 ">
                        <h5 className="title">iWatch</h5>
                        <h6 className="price">₹20,000</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Wishlist