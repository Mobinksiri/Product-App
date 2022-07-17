import styled from "styled-components";

const PriceStyled = styled.div`
   padding-top: 150px;

   @media screen and (max-width: 425px) {
      padding-top: 60px;
   }

   .price_box {
      &__head {
         display: flex;
         align-items: center;
         flex-direction: column;
         margin-bottom: 50px;

         h2 {
            margin-bottom: 8px;
         }
      }
   }
`;

export default PriceStyled;
