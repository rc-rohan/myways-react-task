import { useState } from 'react';
import SignUp from './SignUp'
import Login from './Login'
import './Home.scss'

function Home() {
  const [signUpClicked, setSignUpClicked] = useState(false)
  const [loginClicked, setLoginClicked] = useState(false)

  return (
    <div className="home">
      <h1 className="home__tagline">Apply and hear back every time</h1>
      <p className="home__description">
        Exploring internships or jobs? Say good-bye to the typical job portals
        and use the power of Artificial Intelligence to become successful,
        faster.
      </p>
      <button
        className="modal-pop-up btn-dark"
        onClick={() => setSignUpClicked(!signUpClicked)}
      >
        <strong>Get Started</strong>
      </button>
      {signUpClicked && <SignUp />}
      {loginClicked && <Login />}
    </div>
  );
}

export default Home
