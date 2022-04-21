import classes from "./Header.module.css";
import cv from "../../assets/Adhwaryu Jha Resume.pdf";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import avatar from "../../assets/Web-development,-programmer-engineering-and-coding-website-on-augmented-reality-interface-screens-on-transparent-background-PNG.png";

const Header = () => {
  return (
    <header className={classes.container}>
      <div className={classes.container__intro}>
        <h3>Hello I'm</h3>
        <h1>Adhwaryu Jha</h1>
        <h5>Software Engineer</h5>
      </div>
      <div className={classes.links}>
        <a className={classes.links__btn1} href={cv} download>
          Download CV
        </a>
        <a className={classes.links__btn2} href="#contact">
          Let's Talk
        </a>
      </div>
      <div className={classes.image}>
        <img className={classes.pic} src={avatar} alt="Avatar" />
      </div>
    </header>
  );
};

export default Header;
