import logo from './logo.svg';
import './App.css';
import HomePage from "./components/HomePage";
import Countries from "./components/CountryPage";
import Civilizations from "./components/CivilizationPage";
import {useState} from "react";
import Route from "./components/Route";

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <HomePage />
      </header>
    </div>
  );
}



export default () => {
    let [setCountry, setSelectedCountry] = useState("");
    let [setCivilization, setSelectedCivilisation] = useState("");

    return(
        <div>
            <Route path="/">
                <App />
            </Route>
            <Route path = "/countries/">
                <Countries setCountry = {setSelectedCountry} />
            </Route>
            <Route path = "/civilizations/">
                <Civilizations setCivilization = {setSelectedCivilisation} />
            </Route>
        </div>
    )
}
