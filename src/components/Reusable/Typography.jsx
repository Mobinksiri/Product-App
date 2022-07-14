import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const TypographyStyle = styled.div`
   font-weight: ${(props) => props.weight};
   font-size: ${(props) => props.size};
   line-height: ${(props) => props.height};
   text-transform: ${(props) => props.uppercase};
   transition: var(--transition);
   color: ${(props) =>
      props.mode && !props.changeMode
         ? "var(--text-dark--blue)"
         : !props.mode
         ? "var(--text-dark--blue)"
         : "#fff"};
`;

const Typography = ({ element, children, uppercase, changeMode }) => {
   // states -
   const [styles, setStyles] = useState({
      weight: "",
      size: "",
      height: "",
   });

   // dark mode -
   const darkMode = useSelector((state) => state.darkMode);
   const dispatch = useDispatch();

   // styles set use props -
   const getStyleHandler = () => {
      switch (element) {
         case "h1":
            setStyles({
               weight: "700",
               size: "40px",
               height: "60px",
            });
            break;
         case "h2":
            setStyles({
               weight: "700",
               size: "32px",
               height: "48px",
            });
            break;
         case "h3":
            setStyles({
               weight: "700",
               size: "24px",
               height: "40px",
            });
            break;
         case "logo":
            setStyles({
               weight: "700",
               size: "30px",
               height: "28px",
            });
            break;
      }
   };

   useEffect(() => {
      getStyleHandler();
   }, []);

   return (
      <TypographyStyle
         uppercase={uppercase === true ? "uppercase" : "inherit"}
         as={element == "logo" ? "h1" : element}
         height={styles.height}
         size={styles.size}
         weight={styles.weight}
         mode={darkMode.mode}
         changeMode={changeMode}
      >
         {children}
      </TypographyStyle>
   );
};

export default Typography;
