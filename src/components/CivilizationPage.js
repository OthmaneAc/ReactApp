import React, {useState} from "react";
import CountryList from "./CivilizationList";
import '../CivilizationPage.css';


export default function CivilizationPage({setCivilization}) {
    let [selectedCivilization, setSelectedCivilization] = useState("");

    return (
        <div className="CivilizationPage">
            <header className="CivilizationPage-header">
                <CountryList setCivilization={setSelectedCivilization} />
            </header>
        </div>
    )
}

