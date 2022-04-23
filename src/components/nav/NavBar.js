import classes from "./NavBar.module.css";
import { GoHome } from "react-icons/go";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { TiMessages } from "react-icons/ti";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { useState } from "react";

const NavBar = () => {
  const [isActive, setIsActive] = useState(0);

  return (
    <nav className={classes.navBar}>
      <a
        className={isActive === 0 && classes.active}
        onClick={() => setIsActive(0)}
        href="#"
      >
        <GoHome />
      </a>
      <a
        className={isActive === 1 && classes.active}
        onClick={() => setIsActive(1)}
        href="#about"
      >
        <FaUserAlt />
      </a>
      <a
        className={isActive === 2 && classes.active}
        onClick={() => setIsActive(2)}
        href="#experience"
      >
        <BsFillBookmarkStarFill />
      </a>
      <a
        className={isActive === 3 && classes.active}
        onClick={() => setIsActive(3)}
        href="#projects"
      >
        <AiOutlineFundProjectionScreen />
      </a>
      <a
        className={isActive === 4 && classes.active}
        onClick={() => setIsActive(4)}
        href="#contact"
      >
        <TiMessages />
      </a>
    </nav>
  );
};

export default NavBar;
