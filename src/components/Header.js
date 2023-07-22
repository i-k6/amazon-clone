import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch, BsList } from 'react-icons/bs';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className="header">
        <div className="container-xxl">
        <div className="row align-item-center">
          <div className="header-upper-content d-flex align-items-center justify-content-between">
            <div className="header-logo">
              <Link to="/">
                <img
                  className="header__logo img-fluid rounded-3"
                  alt="AmazonLogo"
                  src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
              </Link>
            </div>
            <div className="header-search col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search your product here.."
                  aria-label="Search your product here.."
                  aria-describedby="basic-addon2"
                />
                <span  className="input-group-text" id="basic-addon2" style={{ backgroundColor: '#febd69', color: '#3b4149',cursor: 'pointer'}}>
                  <BsSearch  className="fs-6" />
                </span>
              </div>
            </div>
            <div className="header-links">
              <div>
                <Link to="/compare-product" className="text-white">
                  <img src="/images/compare.svg" alt="Compare" />
                  <p className=" mb-0">
                    Compare<br/>
                    Product
                  </p>
                </Link>
              </div>
              <div>
                <Link to="/wishlist" className="text-white">
                  <img src="/images/wishlist.svg" alt="Wishlist" />
                  <p className="mb-0">
                    Favourite <br />
                    Wishlist
                  </p>
                </Link>
              </div>
              <div>
                <Link to="/login" className="text-white">
                  <img src="/images/user.svg" alt="User" />
                  <p className="mb-0">
                    User <br />
                    Login
                  </p>
                </Link>
              </div>
              <div>
                <Link to="/cart" className="text-white">
                  <img src="/images/cart.svg" alt="Cart" />
                  <div className="d-flex flex-column gap-10">
                    <span className="badge bg-white text-dark">1</span>
                    <p className="mb-0">CART</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="header-toggle" onClick={toggleMenu}>
              <BsList className="fs-4 text-white" />
            </div>
          </div>
          {showMenu && (
            <div className="header-links-responsive">
              <div>
                <Link to="/compare-product" className="text-white">
                  <img src="/images/compare.svg" alt="Compare" />
                  <p className="mb-0">
                    Compare<br />
                    Product
                  </p>
                </Link>
              </div>
              <div>
                <Link to="/wishlist" className="text-white">
                  <img src="/images/wishlist.svg" alt="Wishlist" />
                  <p className="mb-0">
                    Favourite <br />
                    Wishlist
                  </p>
                </Link>
              </div>
              <div>
                <Link to="/login" className="text-white">
                  <img src="/images/user.svg" alt="User" />
                  <p className="mb-0">
                    User <br />
                    Login
                  </p>
                </Link>
              </div>
              <div>
                <Link to="/cart" className="text-white">
                  <img src="/images/cart.svg" alt="Cart" />
                  <div className="d-flex flex-column gap-10">
                    <span className="badge bg-white text-dark">1</span>
                    <p className="mb-0">CART</p>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
        </div>
      </header>
      <header className="lower-header ">
        <div className="container-xxl">
          <div className="row">
          <div className="menu-bottom  d-flex align-items-center gap-30">
            <div>
              <div className="menu-links ">
                <div className="d-flex  align-items-center gap-15">
                  <NavLink className="text-white" to="/">Home</NavLink>
                  <NavLink className="text-white" to="/blogs">Blogs</NavLink>
                  <NavLink className="text-white" to="/contact">Contact</NavLink>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
