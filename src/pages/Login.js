import React from 'react'
import  Breadcrumb from '../components/BreadCrumb';
import  Meta from "../components/Meta";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
    <Meta title = {"Login"} />
    <Breadcrumb title= "Login" />
    <div className="login-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className='text-center'>Login</h3>
                    <form action=" " className='d-flex flex-column gap-15'>
                        <div>
                        <input type="Email" 
                                name='Email' 
                                placeholder='Email' 
                                className='form-control' 
                            />
                        </div>
                        <div className='mt-1'>
                        <input  type="Password" 
                                name='Password' 
                                placeholder='Password' 
                                className='form-control'
                            />
                    </div>
                    <div>
                    <Link to="/forgot-password" className='mt-2'>Forgot Password?</Link>
                        <div className="d-flex justify-content-center gap-15 align-items-center">
                            <button className='button border-0 mt-3'>Login</button>
                            <Link to="/signup" className='button signup textwhite mt-3'>SignUp</Link>
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

export default Login