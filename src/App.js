import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Exercices from "./composants/Exercices";
import Lecons from "./composants/Lecons";
import Presentation from "./composants/Presentation";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Presentation />} />
        <Route exact path="/lecons" element={<Lecons />} />
        <Route exact path="/exercices" element={<Exercices />} />
      </Routes>
    </Router>
  );
}

export default App;
