import React,{useState,useEffect} from "react";


export default function CivilizationList({setCivilization}) {

    let [civilizations, setCivilizations] = useState([]);
    let [selectedValue, setSelectedValue] = useState("");
    useEffect(() => {
        let lastCalled = true;


        const fetchCountry = () => {
            fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations/`)
                .then((response) => response.json())
                .then((data) => lastCalled && setCivilizations(data.civilizations));

        };
        fetchCountry();
        return () => {
            lastCalled = false
        };
    }, []);

    const handleSelection = (event) => {
        setCivilization(event.target.value);
        setSelectedValue(event.target.value);
    };

    return (
        <select value={selectedValue} onChange={handleSelection}>
            {civilizations.map(({name}) => (
                <option key={`civilization-${name}`} value={name}>
                    {name}
                </option>
            ))}
        </select>
    )
}

