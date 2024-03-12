import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Exercices from "./composants/Exercices";
import Presentation from "./composants/Presentation";
import Prononciation from "./composants/Exercices/Prononciation";
import Apprendre from "./composants/Vocabulaire";
import Famille1 from "./composants/Vocabulaire/Famille1";
import Vetements from "./composants/Vocabulaire/Vetements";
import Animaux from "./composants/Vocabulaire/Animaux";
import Instruments from "./composants/Vocabulaire/Instruments";
import Fruits from "./composants/Vocabulaire/Fruits";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Presentation />} />
        <Route exact path="/vocabulaire" element={<Apprendre />} />
        <Route exact path="/vocabulaire/famille" element={<Famille1 />} />
        <Route exact path="/vocabulaire/vetements" element={<Vetements />} />
        <Route exact path="/vocabulaire/animaux" element={<Animaux />} />
        <Route exact path="/vocabulaire/instruments" element={<Instruments />} />
        <Route exact path="/vocabulaire/fruits" element={<Fruits />} />
        <Route exact path="/exercices" element={<Exercices />} />
        <Route exact path="/exercices/prononciation" element={<Prononciation />} />
      </Routes>
    </Router>
  );
}

export default App;
