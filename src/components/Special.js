import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
function Special() {
  return (
    <div className="col-4">
        <div className="special-card">
            <div className="d-flex justify-content-between">
                <div>
                    <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className='special-content justify-content-between'>
                    <h5>Samsung</h5>
                    <h6 className="title">
                        Samsung Smart Watch..
                    </h6>
                    <ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    value="4"
                    activeColor="#ffd700"/>
                    <p className="price">
                        <span className="red-p">₹800</span> &nbsp; <strike>₹1000</strike>
                    </p>
                    <div className="prod-count my-3">
                    <p>Products:10</p>
                </div>
                <Link className="button ">
                    Add to Cart
                </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Special