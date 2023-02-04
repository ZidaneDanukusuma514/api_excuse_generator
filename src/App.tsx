import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";

function App() {
  return (
    <Router>
      <Header title="Excuse Generator" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" />
      </Routes>
    </Router>
  );
}

export default App;
