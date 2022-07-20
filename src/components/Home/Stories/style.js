import styled from "styled-components";

const StoriesStyle = styled.div`
   padding-top: 150px;

   @media screen and (max-width: 425px) {
      padding-top: 100px;
   }

   .container {
      .stories_box {
         &__head {
            margin-bottom: 32px;

            @media screen and (max-width: 425px) {
               margin-bottom: 40px;
            }

            h2 {
               margin-bottom: 8px;

               @media screen and (max-width: 425px) {
                  font-size: 28px;
               }
            }
         }

         &__items {
            .swiper {
               @media screen and (max-width: 425px) {
                  overflow: visible;
               }

               .swiper-pagination {
                  position: static;
                  margin-top: 64px;

                  @media screen and (max-width: 425px) {
                     margin-top: 34px;
                  }

                  .swiper-pagination-bullet-active {
                     background: var(--primary);
                  }

                  span {
                     width: 15px;
                     height: 15px;
                     background: #efefef;
                     opacity: 1;
                     transition: var(--transition) background;

                     @media screen and (max-width: 425px) {
                        width: 10px;
                        height: 10px;
                     }
                  }
               }
            }
         }
      }
   }
`;

export default StoriesStyle;
