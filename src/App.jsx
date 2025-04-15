import React from "react";
import './App.css';

export default function App() {
  return (
    <main>
      <header className="fade-in">
        <h1>Enzo Tykalowitz</h1>
        <div className="links">
          <a href="https://github.com/enzotyka" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/enzo-tykalowitz-79889520a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </header>

      <section className="fade-in">
        <h2>Sobre Mim</h2>
        <p>
          Desenvolvedor front-end com foco em React. Formado em Análise e Desenvolvimento de Sistemas pelo SENAI e com cursos em React Native, AWS e Arquitetura de Redes. Buscando oportunidades para aplicar e expandir meus conhecimentos na prática.
        </p>
      </section>

      <section className="fade-in">
        <h2>Habilidades</h2>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>Git & GitHub</li>
          <li>Tailwind CSS</li>
        </ul>
      </section>

      <section className="fade-in">
        <h2>Projetos</h2>
        <div className="project-card">
          <h3>Projeto em construção</h3>
          <p>Em breve aqui estarão meus projetos usando React e outras tecnologias.</p>
        </div>
      </section>

      <section className="fade-in">
        <h2>Formação & Certificados</h2>
        <ul>
          <li>Graduação em Análise e Desenvolvimento de Sistemas - SENAI</li>
          <li>Curso de React Native - Udemy</li>
          <li>AWS Academy Graduate</li>
          <li>Curso de Arquitetura de Redes</li>
        </ul>
      </section>

      <section className="fade-in">
        <h2>Contato</h2>
        <p>Email: <span className="email">tykalowitz1@gmail.com</span></p>
        <p>Conecte-se comigo no <a href="https://www.linkedin.com/in/enzo-tykalowitz-79889520a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
      </section>
    </main>
  );
}