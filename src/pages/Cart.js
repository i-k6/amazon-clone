import React from 'react'
import  Breadcrumb from '../components/BreadCrumb';
import  Meta from "../components/Meta";
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <>
    <Meta title = {"Cart"} />
    <Breadcrumb title= "Cart" />
    <section className="cart-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="cart-header d-flex justify-content-between align-items-center">
              <h4  className='cart-col-1'>Product</h4>
              <h4  className='cart-col-2'>Price</h4>
              <h4  className='cart-col-3'>Quantity</h4>
              <h4  className='cart-col-4'>Total</h4>
            </div>
            <div className="cart-header d-flex mb-3 justify-content-between align-items-center">
              <div className='cart-col-1 gap-15 d-flex align-item-center'>
                <div className='w-25'>
                  <img className ="img-fluid" src="/images/watch.jpg" alt="watch" />
                </div>
                <div className='w-75'>
                  <h5 className="title">Samsung <br />Smart Watch</h5>
                  <p className="color">Gray</p>
                </div>
              </div>
              <div className='cart-col-2'>
                <h5 className="price">$1000</h5>
              </div>
              <div className='cart-col-3 d-flex slign-items-center gap-15'>
                <div>
                  <input className='form-control' 
                  type="number" 
                  name=""
                  min={1}
                  max={10} 
                  id="" />
                </div>
                <div className='align-items-center'>
                  <AiFillDelete className='text-danger' cursor="pointer"/>
                </div>
              </div>
              <div className='cart-col-4'>
              <h5 className="price">$1000</h5>
              </div>
            </div>
            <div>
              <div className="col-12 py-2 mt-4">
               <div className='d-flex justify-content-between align-items-baseline'>
               <Link to="/" className='button'>
                  Continue Shopping
                </Link>
                <div className='d-flex flex-column align-items-end'>
                  <h4>Subtotal</h4>
                  <p>$1000</p>
                  <Link  className='button'>
                    Checkout
                  </Link>
                </div>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Cart