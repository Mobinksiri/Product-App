import React from "react";
import styled from "styled-components";

const TwoColumnEl = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-direction: ${(props) => (props.$reverse ? "row-reverse" : null)};

   @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
   }

   .left {
      width: 43%;

      @media screen and (max-width: 1024px) {
         width: 48%;
      }

      @media screen and (max-width: 800px) {
         width: 53%;
      }

      @media screen and (max-width: 768px) {
         width: 100%;
      }
   }

   .right {
      width: 53%;

      @media screen and (max-width: 1024px) {
         width: 48%;
      }

      @media screen and (max-width: 800px) {
         width: 43%;
      }

      @media screen and (max-width: 768px) {
         width: 100%;
         margin-bottom: 15px;
      }
   }
`;

const TwoColumn = ({ children, reverse }) => {
   return (
      <TwoColumnEl $reverse={reverse} className="two-column">
         {children}
      </TwoColumnEl>
   );
};

export default TwoColumn;
