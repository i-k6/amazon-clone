import React from 'react'
import  Breadcrumb from '../components/BreadCrumb';
import  Meta from "../components/Meta";
const Signup = () => {
  return (
    <>
    <Meta title = {"Sign Up"} />
    <Breadcrumb title= "Sign Up" />
    <div className="login-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">  
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className='text-center'>Create an 
                        account</h3>
                    <form action=" " className='d-flex flex-column gap-15'>
                        <div>
                        <input type="text" 
                                name='Name' 
                                placeholder='Name*' 
                                className='form-control' 
                                required
                            />
                        </div>
                        <div>
                        <input type="tel" 
                                name='Phone' 
                                placeholder='Number*' 
                                className='form-control'
                                required 
                            />
                        </div>
                        <div>
                        <input type="Email" 
                                name='Email' 
                                placeholder='Email*' 
                                className='form-control' 
                                required
                            />
                        </div>
                        <div className='mt-1'>
                        <input  type="Password" 
                                name='Password' 
                                placeholder='Password*' 
                                className='form-control'
                                required
                            />
                    </div>
                    <div>
                        <div className="d-flex justify-content-center gap-15 align-items-center">
                            <button className='button border-0 mt-3'>Sign Up</button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
    </div>
    
    </>
  )
}

export default Signup