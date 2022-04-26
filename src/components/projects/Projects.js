import Card from "./Card";
import classes from "./Projects.module.css";
import port from "../../assets/portfolioExample.PNG";
import food from "../../assets/imgonline-com-ua-resize-YCKPUPRZph7t61X.png";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className={classes.header}>
        My Recent <span className={classes.spn}>Works</span>
      </h1>
      <div className={classes.container}>
        <Card
          image={port}
          heading={"Personal Portfolio Site"}
          para="An ongoing project of creating my own portfolio website from scratch, by using ReactJS. I have also used few packages, like typewriter-effect in this project."
          link={"https://github.com/adhwaryujha/portfolio-page.git"}
        />
        <Card
          image={food}
          heading={"Food ordering App"}
          para="A responsive food-ordering app, build using different concepts of ReactJS."
          link={"https://github.com/adhwaryujha/food-order-app.git"}
        />
      </div>
    </section>
  );
};

export default Projects;
