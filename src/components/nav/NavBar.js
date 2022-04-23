import { Fragment } from "react";
import { GoHome } from "react-icons/go";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { TiMessages } from "react-icons/ti";
import { BsFillBookmarkStarFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav>
      <a href="#">
        <GoHome />
      </a>
      <a href="#about">
        <FaUserAlt />
      </a>
      <a href="#experience">
        <BsFillBookmarkStarFill />
      </a>
      <a href="#projects">
        <AiOutlineFundProjectionScreen />
      </a>
      <a href="#contact">
        <TiMessages />
      </a>
    </nav>
  );
};

export default NavBar;
