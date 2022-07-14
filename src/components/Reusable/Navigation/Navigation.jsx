import React, { useEffect, useState } from "react";
import NavigationStyle from "./style";
import Button from "../../Reusable/Button";
import Typography from "../../Reusable/Typography";
import { ReactComponent as Mode } from "../../../assets/navigation/mode_button.svg";
import { ReactComponent as LogoSvg } from "../../../assets/navigation/logo.svg";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeMode } from "../../../redux/darkModeReducer";
// ----------------------

// navbar items array
const navItems = ["Product", "Customers", "Pricing", "Resources"];

// components --
const Logo = () => (
   <NavLink to="/" className="navigation_box__logo">
      <LogoSvg id="logo_svg" />
      <Typography changeMode={true} element="logo">
         Product
      </Typography>
   </NavLink>
);
const Navbar = ({ path, darkModeChangeHandler }) => (
   <div className="navigation_box__navbar">
      {/* ul list */}
      <ul className="navigation_box__navbar___navItems">
         {navItems.map((nav) => {
            return (
               <li
                  id={
                     path.includes(nav.toLowerCase())
                        ? nav.toLowerCase()
                        : path == "/" && nav.toLowerCase() == "product"
                        ? "product"
                        : null
                  }
                  key={nav}
                  className="navigation_box__navbar___navItems____nav"
               >
                  <NavLink
                     to={
                        nav.toLowerCase() == "product"
                           ? "/"
                           : `/${nav.toLowerCase()}`
                     }
                  >
                     {nav}
                  </NavLink>
               </li>
            );
         })}
      </ul>

      {/* buttons */}
      <div className="navigation_box__navbar___buttons">
         <Button radius="4px" type="outline" padding="9px 23px">
            Sign In
         </Button>
         <Button radius="4px" type="primary" padding="9px 23px">
            Sign Up
         </Button>
         <Mode onClick={darkModeChangeHandler} id="mode_svg" />
      </div>
   </div>
);
const HamburgerMenu = ({
   path,
   hamburgerActiveHandler,
   active,
   onClick,
   darkModeChangeHandler,
}) => (
   <div className="navigation_box__hamburger">
      {/* icon */}
      <div
         className={`${
            active
               ? "navigation_box__hamburger___icon navigation_box__hamburger___icon____active"
               : "navigation_box__hamburger___icon"
         }`}
         onClick={hamburgerActiveHandler}
      >
         <div className="navigation_box__hamburger___icon____side"></div>
         <div className="navigation_box__hamburger___icon____side"></div>
         <div className="navigation_box__hamburger___icon____side"></div>
      </div>

      {/* navigation menu overlay */}
      <div
         onClick={onClick}
         className={
            active
               ? "navigation_box__hamburger___overlay navigation_box__hamburger___overlay____active"
               : "navigation_box__hamburger___overlay"
         }
      ></div>

      {/* hamburger menu */}
      <div
         className={
            active
               ? "navigation_box__hamburger___items navigation_box__hamburger___items____active"
               : "navigation_box__hamburger___items"
         }
      >
         {/* head */}
         <div className="navigation_box__hamburger___items____head">
            <span onClick={onClick} className="material-symbols-rounded">
               close
            </span>
            <Mode onClick={darkModeChangeHandler} id="mode_svg" />
         </div>

         {/* items */}
         {navItems.map((nav) => {
            return (
               <li
                  id={
                     path.includes(nav.toLowerCase())
                        ? nav.toLowerCase()
                        : path == "/" && nav.toLowerCase() == "product"
                        ? "product"
                        : null
                  }
                  key={nav}
                  className="navigation_box__hamburger___items____nav"
               >
                  <NavLink
                     to={
                        nav.toLowerCase() == "product"
                           ? "/"
                           : `/${nav.toLowerCase()}`
                     }
                  >
                     {nav}
                  </NavLink>
               </li>
            );
         })}

         {/* buttons */}
         <div className="navigation_box__hamburger___items____buttons">
            <Button radius="4px" type="outline" padding="9px 23px">
               Sign In
            </Button>
            <Button radius="4px" type="primary" padding="9px 23px">
               Sign Up
            </Button>
         </div>
      </div>
   </div>
);

const Navigation = () => {
   const [hamburgerMode, setHamburgerMode] = useState(false);
   const [hamburgerActive, setHamburgerActive] = useState(false);

   const dispatch = useDispatch();

   const location = useLocation();

   // get window width to responsive navigation --
   const getWidthHandler = () => {
      if (window.innerWidth > 1024) {
         setHamburgerMode(true);
      } else {
         setHamburgerMode(false);
      }
   };

   // function get open or close hamburger menu --
   const hamburgerActiveHandler = () => {
      setHamburgerActive(!hamburgerActive);
   };

   useEffect(() => {
      getWidthHandler();
      window.addEventListener("resize", getWidthHandler);
      return () => window.removeEventListener("resize", getWidthHandler());
   }, []);

   return (
      <NavigationStyle className="navigation">
         <div className="navigation_container">
            <div className="navigation_box">
               <Logo />
               {hamburgerMode ? (
                  <Navbar
                     darkModeChangeHandler={() => dispatch(changeMode())}
                     path={location.pathname}
                  />
               ) : (
                  <HamburgerMenu
                     darkModeChangeHandler={() => dispatch(changeMode())}
                     active={hamburgerActive}
                     hamburgerActiveHandler={hamburgerActiveHandler}
                     path={location.pathname}
                     onClick={() => {
                        hamburgerActiveHandler();
                     }}
                  />
               )}
            </div>
         </div>
      </NavigationStyle>
   );
};

export default Navigation;
