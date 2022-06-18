import React from "react";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";

import "./style.css";
import "../../global.css";

import prioreScreen1 from "../../Assets/PrioreWeb/Screen-01.png";
import archerScreen1 from "../../Assets/Archer/Tela-01.jpg";

export default function Projects() {
    return (
        <div className="site">
            <Header selectPage="Home" />

            <div className="container-projects">
                <div className="area-project">
                    <div className="area-project-figures">
                        <img src={prioreScreen1} alt="Tela de abertura do priore" />
                    </div>

                    <div className="area-project-text">
                        <p>A versão web do Priore não apenas implementa funcionalidades da aplicação desktop, como amplia o público e melhora o rol de ferramentas. Desde a sua epigênese em 2020, muitas mudanças comportamentais em relação aos webapps ocorreram, mas o conteúdo desse projeto ainda continua. Como recurso educacional de código livre para ensino superior e médio, Priore democratiza o acesso aos artefatos de cálculo mais robustos, até então disponíveis apenas em softwares de simulações com alto valor de licenciamento.</p>
                        <p>Aplicação disponível <a href="https://priore.netlify.app" target="_blank">aqui</a>.</p>
                        <p>Repositório <a href="https://github.com/BrunoSantosPK/PrioreSite" target="_blank">aqui</a>.</p>
                    </div>
                </div>

                <div className="area-project">
                    

                    <div className="area-project-text">
                        <p>A versão web do Priore não apenas implementa funcionalidades da aplicação desktop, como amplia o público e melhora o rol de ferramentas. Desde a sua epigênese em 2020, muitas mudanças comportamentais em relação aos webapps ocorreram, mas o conteúdo desse projeto ainda continua. Como recurso educacional de código livre para ensino superior e médio, Priore democratiza o acesso aos artefatos de cálculo mais robustos, até então disponíveis apenas em softwares de simulações com alto valor de licenciamento.</p>
                        <p>Aplicação disponível <a href="https://priore.netlify.app" target="_blank">aqui</a>.</p>
                        <p>Repositório <a href="https://github.com/BrunoSantosPK/PrioreSite" target="_blank">aqui</a>.</p>
                    </div>

                    <div className="area-project-figures">
                        <img src={archerScreen1} alt="Tela de abertura do priore" />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}