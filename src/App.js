import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router className="App">
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/" component={Home}/>
          <Route path="/about-us" />
          <Route path="/hire-right-talent" />
          <Route path="/find-matching-internship" />
          <Route path="/signUp" />
          <Route path="/logIn" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
