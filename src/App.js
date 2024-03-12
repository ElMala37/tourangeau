import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Exercices from "./composants/Exercices";
import Presentation from "./composants/Presentation";
import Prononciation from "./composants/Exercices/Prononciation";
import Apprendre from "./composants/Apprendre";
import Famille1 from "./composants/Apprendre/Famille1";
import Vetements from "./composants/Apprendre/Vetements";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Presentation />} />
        <Route exact path="/apprendre" element={<Apprendre />} />
        <Route exact path="/apprendre/famille" element={<Famille1 />} />
        <Route exact path="/apprendre/vetements" element={<Vetements />} />
        <Route exact path="/exercices" element={<Exercices />} />
        <Route exact path="/exercices/prononciation" element={<Prononciation />} />
      </Routes>
    </Router>
  );
}

export default App;
