import React from "react";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";

import "./style.css";
import "../../global.css";

import prioreScreen from "../../Assets/PrioreWeb/Screen-02.png";
import archerScreen from "../../Assets/Archer/Tela-02.jpg";
import cincopqScreen from "../../Assets/5PQs/Tela-02.png";
import massaMolarScreen from "../../Assets/MassaMolar/Tela-01.png";
import vaporizaScreen from "../../Assets/Vaporiza/Tela-07.png";

export default function Projects() {

    return (
        <div className="site">
            <Header selectPage="Projects" />

            <div className="container-projects">
                <div className="area-project">
                    <div className="area-project-figures">
                        <img src={prioreScreen} alt="Tela de abertura de exemplo do Priore versão web" />
                    </div>

                    <div className="area-project-text">
                        <p>A versão web do Priore não apenas implementa funcionalidades da aplicação desktop, como amplia o público e melhora o rol de ferramentas. Desde a sua epigênese em 2020, muitas mudanças comportamentais em relação aos webapps ocorreram, mas o conteúdo desse projeto ainda continua. Como recurso educacional de código livre para ensino superior e médio, Priore democratiza o acesso aos artefatos de cálculo mais robustos, até então disponíveis apenas em softwares de simulações com alto valor de licenciamento.</p>
                        <p>Ferramentas: React.js, TypeScript e Node.js.</p>
                        <p>Aplicação disponível <a href="https://priore.netlify.app" target="_blank" rel="noreferrer">aqui</a>.</p>
                        <p>Repositório <a href="https://github.com/BrunoSantosPK/PrioreSite" target="_blank" rel="noreferrer">aqui</a>.</p>
                    </div>
                </div>

                <div className="area-project">
                    <div className="area-project-figures">
                        <img src={archerScreen} alt="Tela de menu do aplicativo Archer" />
                    </div>

                    <div className="area-project-text">
                        <p>Esta aplicação nasceu com o objetivo de aproximar prestadores de serviços de seus clientes. Para além da intermediação, Archer possui um grande foco na criação de portfólio e no sistema de recomendações. Os comentários e a reputação são mais bem pontuadas do que o próprio preço, uma vez que foi entendido que os clientes buscam a resolução dos problemas de forma eficiente acima do custo.</p>
                        <p>Ferramentas: PHP, JavaScript e ReactNative.</p>
                        <p>Aplicação disponível <a href="https://play.google.com/store/apps/details?id=br.com.sieg.archerapp" target="_blank" rel="noreferrer">aqui</a>.</p>
                        <p>Repositório <a href="https://github.com/BrunoSantosPK/AppArcher" target="_blank" rel="noreferrer">aqui</a>.</p>
                    </div>
                </div>

                <div className="area-project">
                    <div className="area-project-figures">
                        <img src={cincopqScreen} alt="Tela de registro de relatórios do aplicativo 5PQs" />
                    </div>

                    <div className="area-project-text">
                        <p>Esta aplicação surgiu de uma dor de trabalhadores em fábricas. O processo de análise de falhas geralmente envolve a execução da metodologia dos 5 Porquês, que se torna insumo, ao longo do tempo, para a avaliação criteriosa de todo o sistema operacional. O aplicativo permite a execução fácil do processo, armazenando e organizando os dados para consulta posterior. Um desafio foi disponibilizar dentro do app uma forma de mudar o tema (claro ou escuro) para se adequar ao ambiente em que estiver sendo utilizado, uma vez que o chão de fábrica pode ser aberto ou fechado.</p>
                        <p>Ferramentas: React Native e JavaScript.</p>
                        <p>Aplicação disponível <a href="https://play.google.com/store/apps/details?id=br.com.sieg.cincopqs" target="_blank" rel="noreferrer">aqui</a>.</p>
                        <p>Repositório <a href="https://github.com/BrunoSantosPK/PP_CincoPQ_Public" target="_blank" rel="noreferrer">aqui</a>.</p>
                    </div>
                </div>

                <div className="area-project">
                    <div className="area-project-figures">
                        <img src={massaMolarScreen} alt="Tela de abertura do aplicativo Massa Molar" />
                    </div>

                    <div className="area-project-text">
                        <p>O compartilhamento do conhecimento, sobretudo no Brasil, é a chave para a transformação da sociedade. Esta aplicação surge com esta meta, de construir um ecossistema de Recursos Educacionais Abertos para o ensino básico de ciência. Diferente de outras aplicações em que a finalidade sobrepõe a experiência do usuário, um REA precisa ter UX como ponto principal, sendo este o grande desafio deste aplicativo.</p>
                        <p>Ferramentas: React Native, JavaScript, Node.js e TypeScript.</p>
                        <p>Aplicação disponível <a href="https://play.google.com/store/apps/details?id=br.com.sieg.formulaquimica" target="_blank" rel="noreferrer">aqui</a>.</p>
                        <p>Repositório <a href="https://github.com/BrunoSantosPK/REA_MassaMolar_Public" target="_blank" rel="noreferrer">aqui</a>.</p>
                    </div>
                </div>

                <div className="area-project">
                    <div className="area-project-figures">
                        <img src={vaporizaScreen} alt="Tela de abertura do aplicativo Massa Molar" />
                    </div>

                    <div className="area-project-text">
                        <p>Esta aplicação desktop foi concebida para controle de consumo de vapor em unidades industriais. A partir da descrição de consumo para produção de cada produto, o sistema consegue gerar relatórios de produção e planejamento, no sentido de melhor alocar os recursos disponíveis em função do gasto energético.</p>
                        <p>Ferramentas: Electron.js, JavaScript, HTML5 e CSS3.</p>
                        <p>Repositório <a href="https://github.com/BrunoSantosPK/vaporiza" target="_blank" rel="noreferrer">aqui</a>.</p>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
}