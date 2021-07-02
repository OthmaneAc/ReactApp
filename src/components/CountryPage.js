import React, {useState} from "react";
import CountryList from "./CountryList";
import '../CountryPage.css';


export default function CountryPage() {
    let [selectedCountry, setSelectedCountry] = useState("");

    return (
    <div className="CountryPage">
        <header className="CountryPage-header">
            <CountryList setCountry={setSelectedCountry} />
        </header>
    </div>
    )
}

