import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Navbar from "./Components/Navbar";
import Home from './Components/Home'
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

function App() {
  return (
    <Router className="App">
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/signUp" component={SignUp}/>
          <Route path="/logIn"  component={Login}/>
          <Route path="/about-us" />
          <Route path="/hire-right-talent" />
          <Route path="/find-matching-internship" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
