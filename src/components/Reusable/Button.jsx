import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ButtonStyle = styled.button`
   border: none;
   outline: none;
   font-weight: 600;
   font-size: 16px;
   border: ${(props) => props.border};
   background-color: ${(props) => props.background};
   text-transform: ${(props) => props.uppercase};
   color: ${(props) => props.color};
   padding: ${(props) => props.padding};
   border-radius: ${(props) => props.radius};
   transition: var(--transition) color;
   cursor: pointer;

   /* hover */
   &:hover {
      background-color: ${(props) =>
         props.type == "primary"
            ? "#007e70"
            : props.type == "secondary"
            ? "#f7f7f7"
            : null};
   }
`;

const Button = ({ type, children, uppercase, padding, radius }) => {
   // states -
   const [styles, setStyles] = useState({
      background: "",
      border: "",
      color: "",
   });

   // dark mode -
   const darkMode = useSelector((state) => state.darkMode);

   // styles set use props -
   const getStyleHandler = () => {
      switch (type) {
         case "primary":
            setStyles({
               border: "1px solid var(--primary)",
               background: "var(--primary)",
               color: "#fff",
            });
            break;
         case "outline":
            setStyles({
               border: "1px solid #BCD0E5",
               background: "transparent",
               color: darkMode.mode ? "#fff" : "var(--text-dark--blue)",
            });
            break;
         case "secondary":
            setStyles({
               border: "1px solid #fff",
               background: "#fff",
               color: "var(--primary)",
            });
            break;
      }
   };

   // use effect
   useEffect(() => {
      getStyleHandler();
   }, [darkMode]);

   return (
      <ButtonStyle
         border={styles.border}
         background={styles.background}
         color={styles.color}
         uppercase={uppercase === true ? "uppercase" : "inherit"}
         padding={padding}
         radius={radius}
         type={type}
      >
         {children}
      </ButtonStyle>
   );
};

export default Button;
