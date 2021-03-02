import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Projects from "./pages/projects";

function App() {
  return (
    <Router>
      <div className="text-white">
        <Header />
        <Route exact path="/" component={Bio} />
        <Route exact path="/projects" component={Projects} />
      </div>
    </Router>

  );
}

export default App;
