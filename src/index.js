import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

/*
  Beginner: 👶
  Intermediate: 👍
  Advanced: 💪
*/

const skills = [
  {
    skill: "C++",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "C#",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Java",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
  {
    skill: "HTML + CSS",
    level: "intermediate",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <>
      <Header />
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
    </>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };

  return (
    <header className="header">
      <h1>React Profile Card</h1>
    </header>
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
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
          key={skill.skill}
        />
      ))}
    </ul>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
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
