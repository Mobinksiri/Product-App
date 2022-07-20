import styled from "styled-components";

const StoriesStyle = styled.div`
   padding-top: 66px;

   @media screen and (max-width: 425px) {
      padding-top: 45px;
   }

   .stories_box {
      &__head {
         text-align: center;
         margin-bottom: 32px;

         h2 {
            margin-bottom: 8px;
         }
      }

      &__ul {
         display: grid;
         grid-template-columns: repeat(3, 1fr);
         grid-gap: 32px;
         margin-bottom: 32px;

         @media screen and (max-width: 1200px) {
            grid-gap: 20px;
         }
         @media screen and (max-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
         }
         @media screen and (max-width: 600px) {
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 32px;
         }
      }

      &__more {
         display: flex;
         align-items: center;
         justify-content: center;
         cursor: pointer;

         svg {
            margin-left: 8px;
         }
      }
   }
`;

export default StoriesStyle;
