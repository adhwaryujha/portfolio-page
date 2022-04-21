import classes from "./Header.module.css";
import cv from "../../assets/Adhwaryu Jha Resume.pdf";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import avatar from "../../assets/Web-development,-programmer-engineering-and-coding-website-on-augmented-reality-interface-screens-on-transparent-background-PNG.png";

const Header = () => {
  return (
    <header className={classes.container}>
      <div>
        <h5>Hello I'm</h5>
        <h1 className={classes.headerOne}>Adhwaryu Jha</h1>
        <h5>Software Engineer</h5>
      </div>
      <div>
        <a className="btn btn-primary" href={cv} download>
          Download CV
        </a>
        <a className="btn btn-info" href="#contact">
          Let's Talk
        </a>
      </div>
      <div>
        <img src={avatar} alt="Avatar" />
      </div>
    </header>
  );
};

export default Header;
