import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Exercices from "./composants/Exercices";
import Lecons from "./composants/Lecons";
import Presentation from "./composants/Presentation";
import Prononciation from "./composants/Exercices/Prononciation";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Presentation />} />
        <Route exact path="/lecons" element={<Lecons />} />
        <Route exact path="/exercices" element={<Exercices />} />
        <Route exact path="/exercices/prononciation" element={<Prononciation />} />
      </Routes>
    </Router>
  );
}

export default App;
