import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Exercices from "./composants/Exercices";
import Presentation from "./composants/Presentation";
import Prononciation from "./composants/Exercices/Prononciation";
import Famille1 from "./composants/Vocabulaire/Famille1";
import Vetements from "./composants/Vocabulaire/Vetements";
import Animaux from "./composants/Vocabulaire/Animaux";
import Instruments from "./composants/Vocabulaire/Instruments";
import Fruits from "./composants/Vocabulaire/Fruits";
import Vocabulaire from "./composants/Vocabulaire";
import Alphabet from "./composants/Alphabet";
import "./styles/General.css";
import SePresenter from "./composants/Vocabulaire/SePresenter";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Presentation />} />
        <Route exact path="/alphabet" element={<Alphabet />} />
        <Route exact path="/vocabulaire" element={<Vocabulaire />} />
        <Route exact path="/vocabulaire/famille" element={<Famille1 />} />
        <Route exact path="/vocabulaire/vetements" element={<Vetements />} />
        <Route exact path="/vocabulaire/animaux" element={<Animaux />} />
        <Route exact path="/vocabulaire/instruments" element={<Instruments />} />
        <Route exact path="/vocabulaire/fruits" element={<Fruits />} />
        <Route exact path="/vocabulaire/sepresenter" element={<SePresenter />} />
        <Route exact path="/exercices" element={<Exercices />} />
        <Route exact path="/exercices/prononciation" element={<Prononciation />} />
      </Routes>
    </Router>
  ); 
}

export default App;
