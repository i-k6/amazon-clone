import React from 'react'
import  Breadcrumb from '../components/BreadCrumb';
import  Meta from "../components/Meta";

function CompareProduct() {
  return (
   <>
       <Meta title = {"Compare Products"} />
    <Breadcrumb title= "Compare Products" />
    <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" alt="cross"
                         className="position-absolute cross fluid " />
                        <div className="product-card-image">
                            <img src="images/watch.jpg" alt="watch" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">iWatch</h5>
                            <h6 className=" mb-3 mt-3 price">₹20,000</h6>
                                <div>
                                    <div className="product-detail">
                                        <h5>Brand</h5>
                                        <p>Apple</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Availability</h5>
                                        <p>In-Stock</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Type</h5>
                                        <p>Watch</p>
                                    </div>
                                </div>

                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" alt="cross"
                         className="position-absolute cross fluid " />
                        <div className="product-card-image">
                            <img src="images/watch.jpg" alt="watch" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">iWatch</h5>
                            <h6 className=" mb-3 mt-3 price">₹20,000</h6>
                                <div>
                                    <div className="product-detail">
                                        <h5>Brand</h5>
                                        <p>Apple</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Availability</h5>
                                        <p>In-Stock</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Type</h5>
                                        <p>Watch</p>
                                    </div>
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

export default CompareProduct