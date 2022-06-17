import React from "react";
import Header from "../../Layouts/Header";
import "../../global.css";

export default function Contact() {
    return (
        <div className="site">
            <Header selectPage="Contact" />
            <div className="header"></div>
            <div className="content">
                <h1>Página de contato</h1>
            </div>
            <div className="footer"></div>
        </div>
    );
}