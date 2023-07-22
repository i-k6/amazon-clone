import React from 'react';
import Breadcrumb from '../components/BreadCrumb';
import Meta from "../components/Meta";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <Breadcrumb title="Login" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <div className="auth-card">
                <h3 className='text-center'>Login</h3>
                <form action=" " className='d-flex flex-column gap-15'>
                  <div>
                    <input
                      type="email"
                      name='Email'
                      placeholder='Email'
                      className='form-control'
                    />
                  </div>
                  <div className='mt-1'>
                    <input
                      type="password"
                      name='Password'
                      placeholder='Password'
                      className='form-control'
                    />
                  </div>
                  <div className="forgot-password">
                    <Link to="/forgot-password">Forgot Password?</Link>
                  </div>
                  <div className="button-group">
                    <button className='button border-0'>Login</button>
                    <Link to="/signup" className='button signup text-white'>SignUp</Link>
                    {/* Add the same CSS classes to the SignUp button */}
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

export default Login;
