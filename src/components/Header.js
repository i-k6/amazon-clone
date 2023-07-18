import React from 'react'
import { NavLink, Link} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
const Header = () => {
  return (
    <>
    <header className="header-upper py-4">
      <div className="container-xxl">
        <div className="row align-item-center">
          <div className="col-2">
          <img
          className="header__logo mt-2 img-fluid rounded-3"
          alt='AmazonLogo'
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
          </div>
            <div className="col-5">
            <div class="input-group">
              <input type="text" 
              class="form-control py-2 mt-2" 
              placeholder="Search your product here.." 
              aria-label="Search your product here.." 
              aria-describedby="basic-addon2 "/>
              <span class="input-group-text mt-2" id="basic-addon2">
                <BsSearch className='fs-6 '/>
                </span>
            </div>
            </div>
            <div className="col-5">
              <div className="header-upper-Links d-flex align-items-center justify-content-between">
                <div>
                  <Link to="/compare-product" className='d-flex align-items-center gap-10 text-white'>
                  <img src="/images/compare.svg" alt="Compare"/>
                  <p className='mb-0'>
                    Compare<br/>Product
                  </p>
                  </Link>
                </div>
                <div>
                  <Link to='/wishlist' className='d-flex align-items-center gap-10 text-white'>
                  <img src="/images/wishlist.svg" alt="Wishlist"/>
                  <p className='mb-0'>
                    Favourite <br />Wishlist
                  </p>
                  </Link>
                </div>
                <div>
                  <Link to='/login' className='d-flex align-items-center gap-10 text-white'>
                  <img src="/images/user.svg" alt="User"/>
                  <p className='mb-0'>
                    User <br />Login
                  </p>
                  </Link>
                </div>
                <div>
                  <Link to='/cart' className='d-flex align-items-center gap-10 text-white'>
                  <img src="/images/cart.svg" alt="Cart"/>
                  <div className="d-flex flex-column gap-10">
                    <span className="badge bg-white text-dark">0</span>
                    <p className="mb-0">CART</p>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </div>
    </header>
    <header className="header-bottom py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="menu-bottom d-flex align-items-center gap-30">
              <div>
              <div className="dropdown">
              <button class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" 
              type="button" 
              data-bs-toggle="dropdown" 
              data-bs-auto-close="true" 
              aria-expanded="false">
                <span className="me-5 block-inline align-items-center">
                SHOW CATEGORIES
                </span>
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item text-white" href="#">Menu item</Link></li>
                <li><Link className="dropdown-item text-white" href="#">Menu item</Link></li>
                <li><Link className="dropdown-item text-white" href="#">Menu item</Link></li>
              </ul>
            </div>
              </div>
              <div className="menu-links">
                <div className="d-flex align-items-center gap-15 ">
                  <NavLink to= "/">Home</NavLink>
                  <NavLink to= "/blogs">Blogs</NavLink>
                  <NavLink to= "/Contact">Contact</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}

export default Header