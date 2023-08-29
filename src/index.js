import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="gnome.jpg" alt="gnome child" />;
}

function Intro() {
  return (
    <div>
      <h1>Rhyan Lugo Crespo</h1>
      <p>
        Computer Science student at the University of Florida with a planned
        graduation of Fall 2023. When not coding or working on school, I like to
        play video games, play ttrpgs, read, and cook.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="C++" color="gray" />
      <Skill skill="C#" color="green" />
      <Skill skill="Java" color="red" />
      <Skill skill="HTML + CSS" color="purple" />
      <Skill skill="Javascript/Typescript" color="orange" />
      <Skill skill="React" color="blue" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
