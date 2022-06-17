import React from "react";

import "./style.css";
import github from "../../Assets/github.svg";
import linkedin from "../../Assets/linkedin.svg";

export default function Footer() {
    // Define os links externos para redirecionamento
    function go(local: "linkedin" | "github") {
        const links = {
            "linkedin": "https://www.linkedin.com/in/bruno-santos/",
            "github": "https://github.com/BrunoSantosPK"
        };
        window.open(links[local], "_blank");
    }

    return (
        <div className="content-footer">
            <div className="image-footer" onClick={() => go("github")}>
                <img src={github} alt="Logo do github com link para redirecionamento" />
            </div>

            <div className="image-footer" onClick={() => go("linkedin")}>
                <img src={linkedin} alt="Logo do linkedin com link para redirecionamento" />
            </div>
        </div>
    );
}