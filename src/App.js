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
import Verbes from "./composants/Verbes";
// import VerbeTemplate from "./composants/Verbes/VerbeTemplate";
import Soutenir from "./composants/Soutenir";
import SePresenterConv2 from "./composants/Conversation/SePresenterConv2";
import RestaurantConv from "./composants/Conversation/RestaurantConv";
import PasseTempsConv from "./composants/Conversation/PasseTempsConv";
import Paques from "./composants/Vocabulaire/Paques";
import Noel from "./composants/Vocabulaire/Noel";
import Hiver from "./composants/Vocabulaire/Hiver";
import Maison from "./composants/Vocabulaire/Maison";
import Jardin from "./composants/Vocabulaire/Jardin";
import Dictionnaire from "./composants/Dictionnaire";
import Etre from "./composants/Verbes/Etre";
import Avoir from "./composants/Verbes/Avoir";
import Faire from "./composants/Verbes/Faire";
import Croire from "./composants/Verbes/Croire";
import Savoir from "./composants/Verbes/Savoir";
import Devoir from "./composants/Verbes/Devoir";
import SeLever from "./composants/Verbes/SeLever";
import Pouvoir from "./composants/Verbes/Pouvoir";
import Vouloir from "./composants/Verbes/Vouloir";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Presentation />} />
        <Route exact path="/alphabet" element={<Alphabet />} />
        <Route exact path="/nombres" element={<Nombres />} />
        <Route exact path="/dictionnaire" element={<Dictionnaire />} />
        <Route exact path="/verbes" element={<Verbes/>} />
        {/* <Route exact path="/verbes/template" element={<VerbeTemplate/>} /> */}
        <Route exact path="/verbes/eter" element={<Etre/>} />
        <Route exact path="/verbes/havouere" element={<Avoir/>} />
        <Route exact path="/verbes/faizer" element={<Faire/>} />
        <Route exact path="/verbes/crerre" element={<Croire/>} />
        <Route exact path="/verbes/asçaouere" element={<Savoir/>} />
        <Route exact path="/verbes/douere" element={<Devoir/>} />
        <Route exact path="/verbes/se_ghlevair" element={<SeLever/>} />
        <Route exact path="/verbes/poyeire" element={<Pouvoir/>} />
        <Route exact path="/verbes/veulouere" element={<Vouloir/>} />
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
