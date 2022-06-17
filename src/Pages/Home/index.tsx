import React from "react";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";

import "./style.css";
import "../../global.css";
import logo from "../../Assets/logo.png";

export default function Home() {
    return (
        <div className="site">
            <Header selectPage="Home" />
            
            <div className="description-home">
                <div className="col-1">
                    <h1>Desenvolvimento de Sistemas</h1>
                    <h4>Transformando a imaginação em realidade</h4>
                </div>

                <div className="col-2">
                    <img src={logo} alt="Logo com nome do desenvolvedor, Bruno Santos" />
                </div>
            </div>

            <Footer />
        </div>
    );
}