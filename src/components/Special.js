import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';


function Special() {
  return (

    
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="special-card">
        <div className="d-md-flex justify-content-between">
          <div className="mb-3 mb-md-0">
            <img src="images/watch.jpg" alt="watch" style={{ maxWidth: '100%' }} />
          </div>
          <div className="special-content justify-content-between">
            <h6 className="title">Samsung Smart Watch..</h6>
            <ReactStars count={5} size={24} edit={false} value={4} activeColor="#ffd700" />
            <p className="price">
              <span className="red-p">₹800</span> &nbsp; <strike>₹1000</strike>
            </p>
            <div className="prod-count my-3">
              <p>Products: 10</p>
            </div>
            <div className="text-center">
              <Link className="button">+Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Special;
