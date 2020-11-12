import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1 className="home__tagline">Apply and hear back every time</h1>
      <p className="home__description">
        Exploring internships or jobs? Say good-bye to the typical job portals
        and use the power of Artificial Intelligence to become successful,
        faster.
      </p>
      <Link to="/signUp">
        <button className=" btn-dark">
          <strong>Get Started</strong>
        </button>
      </Link>
    </div>
  );
}

export default Home;
