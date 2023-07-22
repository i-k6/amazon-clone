import React from 'react';
import Breadcrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const Signup = () => {
  return (
    <>
      <Meta title={'Sign Up'} />
      <Breadcrumb title="Sign Up" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="auth-card p-4">
                <h3 className="text-center mb-4">Create an account</h3>
                <form action=" " className="d-flex flex-column gap-3">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name*"
                      className="form-control"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Number*"
                      className="form-control"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password*"
                      className="form-control"
                      required
                    />
                  </div>
                  <div>
                    <div className="d-grid gap-2">
                      <button className="button btn-primary mt-3" type="submit">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
