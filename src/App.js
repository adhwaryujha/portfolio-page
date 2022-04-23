// import { Fragment } from "react";
import "./App.css";
import NavBar from "./components/nav/NavBar";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <main>
      <Header />
      <NavBar />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};

export default App;
