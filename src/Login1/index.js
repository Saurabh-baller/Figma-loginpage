import React from "react";
import "./index.css";

const Login1 = () => {
  return (
    <div className="login-page-1">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="text-part d-flex flex-column">
            <h1>Login</h1>
            <input type="text" placeholder="username" />
            <input type="text" placeholder="password" />
            <button>Login</button>
            <div className="d-flex justify-content-between mt-2">
              <a href="google.com">Forgot password</a>
              <a href="google.com">Register</a>
            </div>
          </div>
        </div>

        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            src="https://img.freepik.com/free-vector/hamburger_53876-25481.jpg?w=2000"
             alt=""
          />
        </div>
      </div>
      <div className="login-page-1-reactangle">

      </div>
    </div>
  );
};

export default Login1;
