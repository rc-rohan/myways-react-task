import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";

function App() {
  return (
    <Router className="App">
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/signUp" component={SignUp} />
          <Route path="/logIn" component={Login} />
        </Switch>
        <Route path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
