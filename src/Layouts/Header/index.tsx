import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

type Pages = "Home" | "Projects" | "About" | "Contact";
type Props = {
    selectPage: Pages
};

export default function Header({ selectPage }: Props) {
    const navigate = useNavigate();
    function navigation(page: Pages) {
        // Converte a página para o nome da rota
        const route = (page === "Home") ? "" : page.toLowerCase();
        navigate(`/${route}`);
    }

    function getClassItem(page: Pages) {
        return (selectPage === page) ? "item-header item-header-select " : "item-header"
    }

    return (
        <div className="content-header">
            <div className={getClassItem("Home")} onClick={() => navigation("Home")}>
                <span>Home</span>
            </div>

            <div className={getClassItem("Projects")} onClick={() => navigation("Projects")}>
                <span>Projetos</span>
            </div>

            <div className={getClassItem("About")} onClick={() => navigation("About")}>
                <span>Sobre</span>
            </div>

            <div className={getClassItem("Contact")} onClick={() => navigation("Contact")}>
                <span>Contato</span>
            </div>
        </div>
    );
}