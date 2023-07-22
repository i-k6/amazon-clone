import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <div className="col-md-4 col-lg-3  d-flex justify-content-center">
      <div className="card product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link to="#">
            <img src="images/wish.svg" alt="wishlist" />
          </Link>
        </div>
        <div className="product-image">
          <img src="images/watch.jpg" className="img-fluid" alt="product_image" />
          <img src="images/watch-1.jpg" className="img-fluid" alt="product_image" />
        </div>
        <div className="product-details">
          <h6 className="brand">Quartz</h6>
          <h5 className="product-title">Best products</h5>
          <ReactStars count={5} size={24} edit={false} value={4} activeColor="#ffd700" />
          <p className="price">₹100</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link to="#">
              <img src="images/prodcompare.svg" alt="pcompare" />
            </Link>
            <Link to="#">
              <img src="images/view.svg" alt="view" />
            </Link>
            <Link to="#">
              <img src="images/add-cart.svg" alt="add_cart" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
