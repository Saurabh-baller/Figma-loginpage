import React from "react";
import "./index.css";

const Login2 = () => {
  return (
    <div className="login-page-2">
      <div className="row">
        <div className="col-md-7 d-flex align-items-center justify-content-center">
          <div className="text-part d-flex flex-column">
            <h1>Login</h1>
            <input type="text" placeholder="username" />
            <input type="text" placeholder="password" />
            <button>Login</button>
            <div className="d-flex justify-content-between mt-2 w-100 align-items-center">
              <div className="left-divider"></div>
              <p className="mt-3 mx-2">OR</p>
              <div className="right-divider"></div>
              
             
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <img
                className="mx-5"
                height="30"
                width="30"
                  src="data:image/png;base64,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"
                  alt=""
                />
                <img
                className="mx-5" 
                height="30"
                width="30"
                  src="data:image/png;base64,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"
               alt=""
               />
                
              </div>

              <a href="" className="mt-3 w-100 text-center">Not yet registered ? Click here to sign up</a>
          </div>
        </div>

        <div className="col-md-5 image-part">
         
          <img
          className="bird-image"
            src=" https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmlyZHxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          
        </div>
      </div>
    </div>
  );
};

export default Login2;
