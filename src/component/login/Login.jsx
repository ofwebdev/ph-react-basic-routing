import React from "react";
import "./login.scss";

function Login() {
  return (
    <div className="login-form">
      <input type="text" placeholder="Email or phone" />
      <input type="password" placeholder="Password" />

      <button className="btn login_btn">Login</button>
    </div>
  );
}

export default Login;
