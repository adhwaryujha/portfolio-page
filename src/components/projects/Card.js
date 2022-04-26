import classes from "./Card.module.css";
import { GoLinkExternal } from "react-icons/go";

const Card = (props) => {
  return (
    <div className={classes.container}>
      <img src={props.image} />
      <h4>{props.heading}</h4>
      <p>{props.para}</p>
      <a className={classes.bttn} href={props.link}>
        {" "}
        <GoLinkExternal /> GitHub
      </a>
    </div>
  );
};

export default Card;
