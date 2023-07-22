import React from 'react';
import Breadcrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const Resetpassword = () => {
  return (
    <>
      <Meta title={'Reset Password'} />
      <Breadcrumb title="Reset Password" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="auth-card p-4">
                <h3 className="text-center mb-4">Reset Password</h3>
                <form action=" " className="d-flex flex-column gap-3">
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password*"
                      className="form-control"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="cnfpassword"
                      placeholder="Confirm Password*"
                      className="form-control"
                      required
                    />
                  </div>
                  <div>
                    <div className="d-grid gap-2">
                      <button className="button btn-primary" type="submit">
                        Submit
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

export default Resetpassword;
