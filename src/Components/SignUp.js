import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './SignUp.scss'

function SignUp() {
  const { state } = useLocation();
  console.log(state);
  const [modal, setModal] = useState(false);

  return (
    <div className={"signUp"}>
      <div className="modal">
        <Link to='/'>
          <i className="bx bx-x closeIcon"></i>
        </Link>
        <h1>Sign Up</h1>
        <h5>It's quick and easy</h5>
        <form className='form' onSubmit={(e)=>e.preventDefault()}>
          <div className="usernames">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Email" />
          <input type="password" name="password" id="" placeholder="Password" />
          <button className="btn-dark">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
