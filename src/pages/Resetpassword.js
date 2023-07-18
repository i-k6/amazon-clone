import React from 'react'
import  Breadcrumb from '../components/BreadCrumb';
import  Meta from "../components/Meta";

const Resetpassword = () => {
  return (
    <>
    <Meta title = {"Reset Password"} />
    <Breadcrumb title= "Reset Password" />
    <div className="login-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className='text-center'>Reset Password</h3>
                    <form action=" " className='d-flex flex-column gap-15'>
                        <div>
                        <input type="Password" 
                                name='Password' 
                                placeholder='Password*' 
                                className='form-control'
                                required 
                            />
                        </div>
                        <div>
                        <input type="password" 
                                name='cnfpassword' 
                                placeholder='Confirm Password*' 
                                className='form-control'
                                required 
                            />
                        </div>
                    <div>
                        <div className="d-flex justify-content-center flex-column gap-15 align-items-center">
                        <button className='button border-0' type='submit'>Submit</button>                            </div>
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

export default Resetpassword