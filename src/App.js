import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Exercices from './composants/Exercices';
import Acceuil from './composants/Accueil';
import Lecons from './composants/Lecons';


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/lecons" element={<Lecons />} />
          <Route exact path="/exercices" element={<Exercices />} />
          <Route exact path="/" element={<Acceuil />} />
        </Routes>
      </Router>
  );
}

export default App;
