import React from "react";
import styled from "styled-components";

const ThreeColumnStyle = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-column-gap: ${(props) => props.gap};

   @media screen and (max-width: 1200px) {
      grid-column-gap: 30px;
   }

   @media screen and (max-width: 1024px) {
      grid-column-gap: 20px;
   }

   @media screen and (max-width: 768px) {
      grid-gap: 30px;
      grid-template-columns: repeat(2, 1fr);

      .item:nth-of-type(1) {
         grid-column: 1/2;
         grid-row: 1/2;
      }
      .item:nth-of-type(2) {
         grid-column: 2/3;
         grid-row: 1/2;
      }
      .item:nth-of-type(3) {
         grid-column: 1/2;
         grid-row: 2/3;
      }
   }

   @media screen and (max-width: 550px) {
      grid-template-columns: repeat(1, 1fr);

      .item:nth-of-type(2) {
         grid-column: 1/2;
         grid-row: 2/3;
      }
      .item:nth-of-type(3) {
         grid-row: 3/4;
      }
   }

   .item {
      width: 100%;
   }
`;

const ThreeColumn = ({ children, gap }) => {
   return (
      <ThreeColumnStyle gap={gap} className="threeColumn">
         {children}
      </ThreeColumnStyle>
   );
};

export default ThreeColumn;
