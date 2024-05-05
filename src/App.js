import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Presentation from "./composants/Presentation";
import Famille1 from "./composants/Vocabulaire/Famille1";
import Vetements from "./composants/Vocabulaire/Vetements";
import Animaux from "./composants/Vocabulaire/Animaux";
import Instruments from "./composants/Vocabulaire/Instruments";
import Fruits from "./composants/Vocabulaire/Fruits";
import Vocabulaire from "./composants/Vocabulaire";
import Alphabet from "./composants/Alphabet";
import "./styles/General.css";
import SePresenter from "./composants/Vocabulaire/SePresenter";
import Nombres from "./composants/Nombres";
import Conversation from "./composants/Conversation";
import SePresenterConv from "./composants/Conversation/SePresenterConv";
import Lecons from "./composants/Lecons";
import TemplateLecon from "./composants/Lecons/Template";
import Soutenir from "./composants/Soutenir";
import SePresenterConv2 from "./composants/Conversation/SePresenterConv2";
import RestaurantConv from "./composants/Conversation/RestaurantConv";
import PasseTempsConv from "./composants/Conversation/PasseTempsConv";
import Paques from "./composants/Vocabulaire/Paques";
import Noel from "./composants/Vocabulaire/Noel";
import Hiver from "./composants/Vocabulaire/Hiver";
import Maison from "./composants/Vocabulaire/Maison";
import Jardin from "./composants/Vocabulaire/Jardin";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Presentation />} />
        <Route exact path="/alphabet" element={<Alphabet />} />
        <Route exact path="/nombres" element={<Nombres />} />
        <Route exact path="/lecons" element={<Lecons/>} />
        <Route exact path="/lecons/template" element={<TemplateLecon/>} />
        <Route exact path="/vocabulaire" element={<Vocabulaire />} />
        <Route exact path="/vocabulaire/famille" element={<Famille1 />} />
        <Route exact path="/vocabulaire/vetements" element={<Vetements />} />
        <Route exact path="/vocabulaire/animaux" element={<Animaux />} />
        <Route exact path="/vocabulaire/instruments" element={<Instruments />} />
        <Route exact path="/vocabulaire/fruits" element={<Fruits />} />
        <Route exact path="/vocabulaire/sepresenter" element={<SePresenter />} />
        <Route exact path="/vocabulaire/paques" element={<Paques />} />
        <Route exact path="/vocabulaire/noel" element={<Noel />} />
        <Route exact path="/vocabulaire/hiver" element={<Hiver />} />
        <Route exact path="/vocabulaire/maison" element={<Maison />} />
        <Route exact path="/vocabulaire/jardin" element={<Jardin />} />
        <Route exact path="/conversation" element={<Conversation />} />
        <Route exact path="/conversation/sepresenter" element={<SePresenterConv />} />
        <Route exact path="/conversation/sepresenter2" element={<SePresenterConv2 />} />
        <Route exact path="/conversation/restaurant" element={<RestaurantConv />} />
        <Route exact path="/conversation/passetemps" element={<PasseTempsConv />} />
        {/* <Route exact path="/exercices" element={<Exercices />} />
        <Route exact path="/exercices/prononciation" element={<Prononciation />} /> */}
        <Route exact path="/soutenir" element={<Soutenir />} />
      </Routes>
    </Router>
  ); 
}

export default App;
