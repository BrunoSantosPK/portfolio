import React from "react";
import Header from "../../Layouts/Header";
import "../../global.css";

export default function About() {
    return (
        <div className="site">
            <Header selectPage="About" />
            <div className="header"></div>
            <div className="content">
                <h1>Página sobre</h1>
            </div>
            <div className="footer"></div>
        </div>
    );
}