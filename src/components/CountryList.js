import React,{useState,useEffect} from "react";


export default function CountryList({setCountry}) {

    let [countries, setCountries] = useState([]);
    let [selectedCountry, setSelectedCountry] = useState("");
    useEffect(() => {
        let lastCalled = true;


        const fetchCountry = () => {
            fetch(`https://battuta.medunes.net/api/country/all/?key={00ace2e9def4216fa779688eade79661}/`)
                .then((response) => response.json())
                .then((data) => lastCalled && setCountries(data.json.c));

        };
        fetchCountry();
        return () => {
            lastCalled = false
        };
    }, []);

    const handleSelection = (event) => {
        setCountry(event.target.value);
        setSelectedCountry(event.target.value);
    };

    return (
        <select value={selectedCountry} onChange={handleSelection}>
            {countries.map(({name}) => (
                <option key={`country-type-${name}`} value={name}>
                    {name}
                </option>
            ))}
        </select>
    );
};


















