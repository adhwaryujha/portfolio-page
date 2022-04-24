import classes from "./About.module.css";
import image from "../../assets/about.png";

const About = () => {
  return (
    <section id="about" className={classes.about}>
      <h1>About ME</h1>
      <div>
        <div className={classes.paragraph}>
          <p>
            Hi!!! I am Adhwaryu, a software engineer, a cricket lover, and a
            wanderer. By wanderer I mean a man who is constantly exploring and
            learning new things.
          </p>{" "}
        </div>
        <img src={image} alt="coder" />
      </div>
    </section>
  );
};

export default About;
