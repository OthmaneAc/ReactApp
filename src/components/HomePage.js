import React from "react";
import '../HomePage.css';
import civilizationLogo from '../resources/civilizations.png'
import paysLogo from '../resources/pays.png'
function HomePage() {

    return (
        <div className="HomePage">
            <header className="HomePage-header">
                <div classe="box">

                    <img src={civilizationLogo} alt="civilizationLogo" />
                    <p><button className="button" onClick={() => {
                        window.location.pathname = "/civilizations/"
                    }}>
                        Civilisations
                    </button></p>

                    <img src={paysLogo} alt="paysLogo" />
                    <p><button className="button" onClick={() => {
                        window.location.pathname = "/countries/"
                    }}>
                        Pays
                    </button></p>

                </div>

            </header>
        </div>
    );
}

export default HomePage;