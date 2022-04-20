// import { Fragment } from "react";
import "./App.css";
import NavBar from "./components/nav/NavBar";
import About from "./components/about/About";
import Header from "./components/header/Header";

const App = () => {
  return (
    <main className="mainimage">
      <NavBar />
      <Header />
      <About />
    </main>
  );
};

export default App;
