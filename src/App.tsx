import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";

function App() {
  return (
    <Router>
      <Header title="Excuse Generator" />
      <Routes>
        <Route path="/" />
        <Route path="/about" />
      </Routes>
    </Router>
  );
}

export default App;
