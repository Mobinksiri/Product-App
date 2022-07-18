import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const TypographyStyle = styled.div`
   font-weight: ${(props) => props.$weight};
   font-size: ${(props) => props.$size};
   line-height: ${(props) => props.$lineHeight};
   text-transform: ${(props) => props.$uppercase};
   transition: var(--transition) color;
   color: ${(props) =>
      props.$mode && !props.$changeMode
         ? "var(--text-dark--blue)"
         : !props.$mode
         ? "var(--text-dark--blue)"
         : "#fff"};

   @media screen and (max-width: 425px) {
      font-size: ${(props) => (props.element == "h1" ? "34px" : null)};
      line-height: ${(props) => (props.element == "h1" ? "45px" : null)};
   }
`;

const Typography = ({
   element,
   children,
   uppercase,
   changeMode,
   className,
}) => {
   // states -
   const [styles, setStyles] = useState({
      weight: "",
      size: "",
      height: "",
   });

   // dark mode -
   const darkMode = useSelector((state) => state.darkMode);

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
         case "h5":
            setStyles({
               weight: "700",
               size: "16px",
               height: "28px",
            });
            break;
         case "logo":
            setStyles({
               weight: "700",
               size: "30px",
               height: "28px",
            });
            break;
         case "paragraph1":
            setStyles({
               weight: "400",
               size: "18px",
               height: "28px",
            });
            break;
         case "paragraph2":
            setStyles({
               weight: "400",
               size: "16px",
               height: "26px",
            });
            break;
         case "title1":
            setStyles({
               weight: "600",
               size: "22px",
               height: "33px",
            });
            break;
         case "title2":
            setStyles({
               weight: "600",
               size: "16px",
               height: "24px",
            });
            break;
         case "title3":
            setStyles({
               weight: "500",
               size: "16px",
               height: "24px",
            });
            break;
         case "title4":
            setStyles({
               weight: "500",
               size: "14px",
               height: "24px",
            });
            break;
         case "title5":
            setStyles({
               weight: "500",
               size: "20px",
               height: "30px",
            });
            break;
      }
   };

   useEffect(() => {
      getStyleHandler();
   }, []);

   return (
      <TypographyStyle
         className={className}
         $uppercase={uppercase ? "uppercase" : "inherit"}
         element={element}
         as={
            element == "logo"
               ? "h1"
               : element == "paragraph1" ||
                 element == "paragraph2" ||
                 element == "title1" ||
                 element == "title2" ||
                 element == "title3" ||
                 element == "title4" ||
                 element == "title5"
               ? "p"
               : element
         }
         $lineHeight={styles.height}
         $size={styles.size}
         $weight={styles.weight}
         $mode={darkMode.mode}
         $changeMode={changeMode}
      >
         {children}
      </TypographyStyle>
   );
};

export default Typography;
