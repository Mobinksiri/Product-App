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

               .swiper-wrapper {
                  .swiper-slide {
                     /* margin-right: 32px; */

                     .stories_box__items___story {
                        display: flex;
                        flex-direction: column;
                        border: 1px solid #dedede;
                        border-radius: 8px;
                        user-select: none;
                        background-color: #fff;

                        &____image {
                           height: 200px;
                           overflow: hidden;
                           border-radius: 8px 8px 0 0;

                           img {
                              width: 100%;
                              height: 100%;
                              object-fit: cover;
                           }
                        }

                        &____desc {
                           padding: 24px;

                           p {
                              margin-bottom: 12px;

                              span {
                                 font-size: 16px;
                                 font-weight: 700;
                                 color: var(--text-dark--blue);
                                 line-height: 28px;
                              }
                           }

                           h3 {
                              cursor: pointer;

                              &:hover {
                                 color: var(--primary);
                              }

                              @media screen and (max-width: 425px) {
                                 font-size: 20px;
                              }
                           }
                        }
                     }
                  }
               }
            }
         }
      }
   }
`;

export default StoriesStyle;
