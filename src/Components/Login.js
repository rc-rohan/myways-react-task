import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

function Login() {
  return (
    <div className="login">
      <div className="login__modal">
        <Link to="/">
          <i className="bx bx-x closeIcon"></i>
        </Link>
        <h1>Login</h1>
        <form className="student-details">
          <h5 className="primary-text">Student</h5>
          <div className="inputFields">
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="password" />
          </div>
          <button className="btn-dark">Login</button>
          <Link to='/signUp'>
            <strong>New to MyWays? Sign Up here</strong>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
