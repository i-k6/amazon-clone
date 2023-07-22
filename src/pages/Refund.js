import React from 'react'
import  Breadcrumb from '../components/BreadCrumb';
import  Meta from "../components/Meta";

const Refund = () => {
  return (
    
    <>
    <Meta title = {"Refund Policy"} />
    <Breadcrumb title= "Refund Policy" />
    <section className="policy-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="policy">
                    <h1>Amazon.in Refund Policy</h1>
                    <p>
                      <strong id="isPasted">Disclaimer:</strong>&nbsp;In the event of any discrepancy or conflict, the English version will prevail over the translation.
                    </p>
                    <span>Once we receive your return or the seller notifies us of receipt of return, as the case may be, a refund is issued to the original payment method (in case of pre-paid transactions) or to your bank account / as Amazon Pay balance (in case of Pay on Delivery orders).</span>
                    
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Refund