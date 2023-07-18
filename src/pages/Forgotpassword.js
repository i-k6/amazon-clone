import React from 'react'
import  Breadcrumb from '../components/BreadCrumb';
import  Meta from "../components/Meta";
import { Link } from 'react-router-dom';

const Forgotpassword = () => {
  return (
    <>
    <Meta title = {"Forgot Password"} />
    <Breadcrumb title= "Forgot Password" />
    <div className="login-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className='text-center'>Reset Your Password</h3>
                        <p className='py-2 text-center mb-3 mt-2'>
                          We will send you email to reset your password
                        </p>
                    <form action=" " className='d-flex flex-column gap-15'>
                        <div>
                        <input type="Email" 
                                name='Email' 
                                placeholder='Email' 
                                className='form-control' 
                            />
                        </div>
                    <div>
                        <div className="d-flex justify-content-center flex-column gap-15 align-items-center">
                        <button className='button border-0' type='submit'>Reset</button>
                        <Link to="/login" className='mt-2'>Cancel</Link>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
    </div>
    </>
  )
}

export default Forgotpassword