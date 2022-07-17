import styled from "styled-components";

const PriceListStyle = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   position: relative;

   @media screen and (max-width: 800px) {
      flex-wrap: wrap;

      .priceList_item:last-child {
         margin-bottom: 0;
      }
   }

   &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      height: 1px;
      background: rgba(188, 208, 229, 0.496913);
      z-index: -1;

      @media screen and (max-width: 800px) {
         display: none;
      }
   }

   .priceList_item {
      width: 30%;
      padding: 24px 0 32px 0;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 8px;
      background-color: #fff;

      @media screen and (max-width: 1200px) {
         width: 31%;
      }
      @media screen and (max-width: 1024px) {
         width: 32%;
      }
      @media screen and (max-width: 800px) {
         width: 48%;
         margin-bottom: 25px;
      }
      @media screen and (max-width: 550px) {
         width: 100%;
         margin-bottom: 32px;
      }

      h3 {
         margin-bottom: 8px;
      }

      p {
         margin-bottom: 16px;
      }

      p:last-of-type {
         margin-bottom: 32px;
      }

      &__price {
         display: flex;
         align-items: center;
         margin-bottom: 16px;

         h1 {
            font-size: 76px;
            line-height: 100px;
            letter-spacing: 0.2px;
            margin-right: 8px;
            color: var(--primary);
         }

         &___date {
            h3 {
               margin-bottom: 4px;
               line-height: 24px;
               color: var(--primary);
            }

            p {
               margin-bottom: 0 !important;
               color: #afafaf;
            }
         }
      }

      /* p:nth-of-type(n + 2):nth-of-type(-n + 3) {
         margin-bottom: 16px;
      }

      p:nth-of-type(4) {
         margin-bottom: 32px;
      } */
   }

   .priceList_item__active {
      background: #02897a;

      .priceList_item__price {
         h1 {
            color: #fff;
         }

         .priceList_item__price___date {
            h3 {
               color: #fff;
            }
            p {
               color: #e0e0e0;
            }
         }
      }

      * {
         color: #fff;
      }

      button {
         color: var(--primary) !important;
      }
   }
`;

export default PriceListStyle;
