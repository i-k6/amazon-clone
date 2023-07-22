import React from 'react'
import  Breadcrumb from '../components/BreadCrumb';
import  Meta from "../components/Meta";

const Shipping = () => {
  return (
    <>
    <Meta title = {"Shipping Policy"} />
    <Breadcrumb title= "Shipping Policy" />
    <section className="policy-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="policy">
                    <h1>Shipping and Delivery</h1> 
                    <p class="lead"> Items "Fulfilled by Amazon" (FBA) are offered by a  <span id="GUID-BD755754-03D8-4626-A865-B1A3718A1AFA__GUID-9E13BF3D-5C52-45AC-8C79-573AFFC75119">third-party</span> seller, but packed and shipped to you from an Amazon Fulfillment Center.</p>
                    <p> <span>International shipping may not be available for all items.</span></p>
                    <p>
                      <span>
                      When we ship your order, we indicate the carrier company, shipping date and estimated delivery date on Your Account page and in the shipment confirmation email. You can track your package in Your Orders.

                      Sometimes we will send you the exact product you ordered from the inventory of another seller when it is closer to you (with both sellers' consent, of course). When we do this, we'll notify you in your shipping confirmation email and you can view information about both sellers in your order Invoice, which you can find on Your Orders.

                      We also handle all customer service and product returns for "Fulfilled by Amazon" items.
                      </span>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Shipping