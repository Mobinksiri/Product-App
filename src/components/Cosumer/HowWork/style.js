import styled from "styled-components";

const HowWorkStyle = styled.div`
   .howWork_box {
      padding: 100px 0;

      @media screen and (max-width: 425px) {
         padding: 70px 0;
      }

      &__head {
         text-align: center;
         margin-bottom: 70px;
      }

      .two-column {
         margin-bottom: 100px;

         @media screen and (max-width: 768px) {
            margin-bottom: 70px;
         }

         .left {
            p {
               margin-bottom: 16px;
            }
            p:last-child {
               margin-bottom: 0;
            }
         }

         .right {
            @media screen and (max-width: 768px) {
               margin-bottom: 60px;
            }

            img {
               width: 100%;
            }
         }
      }

      .two-column:last-of-type {
         margin-bottom: 77px;

         @media screen and (max-width: 768px) {
            margin-bottom: 70px;
         }
      }

      .button {
         width: 100%;
         display: flex;
         justify-content: center;
      }
   }
`;

export default HowWorkStyle;
