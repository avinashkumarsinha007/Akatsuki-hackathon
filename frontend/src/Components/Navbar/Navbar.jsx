import React, { useState } from "react";
import {
  ContainerOne,
  ContainerThree,
  ContainerTwo,
  NavContainer,
  H4,
  ContainerFour,
} from "./NavbarStyle";
import logo from "../imgs/mind.svg";
import Button from "@material-ui/core/Button";
import DehazeIcon from "@material-ui/icons/Dehaze";
import CloseIcon from "@material-ui/icons/Close";
import Fade from "react-reveal/Fade";
import styles from "./navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { signupSuc } from "../../Redux/SignUp/action";
import { loginSuc } from "../../Redux/LogIn/action";
import { Link, Redirect } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export const Navbar = ({ them, handleToggle }) => {
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleChange = () => {
    setToggle((pre) => !pre);
  };

  const changeBack = () => {
    if (window.scrollY >= 115) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBack);

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.login.isAuth);
  const username = isAuth ? "Hello User" : "SignIn";
  const profile = isAuth ? "Profile" : "";

  return (
    <>
      <NavContainer className={navbar ? styles.active : styles.nav}>
        <ContainerOne>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <h2>
              Akatsuki
              <img src={logo} height="25px" />
            </h2>
          </Link>
        </ContainerOne>
        <ContainerTwo>
          <Link to="about" style={{ textDecoration: "none", color: "inherit" }}>
            <h4>About</h4>
          </Link>
          <Link to="our-impact" style={{ textDecoration: "none", color: "inherit" }}>
            <h4>Our Impact</h4>{" "}
          </Link>
          <Link to="contact-us" style={{ textDecoration: "none", color: "inherit" }}>
            <h4>ContactUs</h4>
          </Link>
          <Link
            to="new-login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h4>{username}</h4>
          </Link>
          <Link
            to="profile"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h4>{profile}</h4>
          </Link>
        </ContainerTwo>
        <ContainerThree>
          <Button disableRipple onClick={handleChange}>
            {toggle ? <CloseIcon /> : <DehazeIcon />}
          </Button>
        </ContainerThree>
      </NavContainer>
      <ContainerFour className={toggle ? "show" : "hide"}>
        <Fade top>
          <Link to="#" style={{ textDecoration: "none", color: "inherit" }}>
            {" "}
            <H4 onClick={() => setToggle((pre) => !pre)}>About</H4>
          </Link>{" "}
        </Fade>
        <Fade top>
          <Link to="#" style={{ textDecoration: "none", color: "inherit" }}>
            {" "}
            <H4 onClick={() => setToggle((pre) => !pre)}>Our Impact</H4>
          </Link>
        </Fade>
        <Fade top>
          <Link to="#" style={{ textDecoration: "none", color: "inherit" }}>
            {" "}
            <H4 onClick={() => setToggle((pre) => !pre)}>SignIn</H4>
          </Link>
        </Fade>
        <Fade top>
          <Link to="#" style={{ textDecoration: "none", color: "inherit" }}>
            {" "}
            <H4 onClick={() => setToggle((pre) => !pre)}>Contactus</H4>
          </Link>
        </Fade>
      </ContainerFour>
    </>
  );
};
