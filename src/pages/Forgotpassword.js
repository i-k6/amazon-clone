import React from 'react';
import Breadcrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const Forgotpassword = () => {
  return (
    <>
      <Meta title={'Forgot Password'} />
      <Breadcrumb title="Forgot Password" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="auth-card p-4">
                <h3 className="text-center mb-4">Reset Your Password</h3>
                <p className="py-2 text-center mb-3 mt-2">
                  We will send you an email to reset your password
                </p>
                <form action=" " className="d-flex flex-column gap-3">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <div className="d-grid gap-2">
                      <button className="button btn-primary" type="submit">
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
                <div className="text-center mt-2">
                  <Link to="/login">Cancel</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgotpassword;
