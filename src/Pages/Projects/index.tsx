import React from "react";
import Header from "../../Layouts/Header";
import "../../global.css";

export default function Projects() {
    return (
        <div className="site">
            <Header selectPage="Projects" />
            <div className="header"></div>
            <div className="content">
                <h1>Página Projetos</h1>
            </div>
            <div className="footer"></div>
        </div>
    );
}