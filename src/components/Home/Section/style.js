import styled from "styled-components";

const SectionStyle = styled.div`
   .section_box {
      padding-top: 60px;
      position: relative;

      .ellipse,
      .ellipse_dark {
         width: 2323.56px;
         height: 389.09px;
         position: absolute;
         top: 0;
         left: 50%;
         transform: translateX(-50%);
         z-index: -1;
         pointer-events: none;
         transition: var(--transition) all;
         background-repeat: no-repeat;
         background-position: center;
      }

      .ellipse {
         background-image: url(${(props) => props.img});
      }

      .ellipse_dark {
         opacity: 0;
         background-image: url(${(props) => props.img_dark});
      }

      &__head {
         display: flex;
         flex-direction: column;
         align-items: center;
         margin-bottom: 32px;

         * {
            width: fit-content;
            text-align: center;
         }

         h2 {
            margin-bottom: 16px;
         }

         p {
            max-width: 540px;
         }
      }

      &__sections {
         display: flex;
         flex-wrap: wrap;
         justify-content: space-around;
         margin-bottom: 48px;

         @media screen and (max-width: 1024px) {
            justify-content: space-between;
         }

         @media screen and (max-width: 768px) {
            justify-content: center;

            &___item:nth-of-type(3) {
               flex-direction: row !important;

               .section_box__sections___item____image {
                  margin-right: 16px !important;
                  margin-left: 0 !important;
               }

               .section_box__sections___item____title {
                  &::before {
                     left: 32px !important;
                     right: inherit !important;
                  }
                  &::after {
                     left: 32px !important;
                     right: inherit !important;
                  }
               }
            }

            &___item:nth-of-type(4) {
               flex-direction: row-reverse !important;

               .section_box__sections___item____image {
                  margin-left: 16px !important;
                  margin-right: 0 !important;
               }

               .section_box__sections___item____title {
                  &::before {
                     left: inherit !important;
                     right: 32px !important;
                  }
                  &::after {
                     left: inherit !important;
                     right: 32px !important;
                  }
               }
            }
         }

         @media screen and (max-width: 425px) {
            margin-bottom: 32px;
         }

         &___item {
            display: flex;
            align-items: center;
            width: 420px;

            @media screen and (max-width: 1024px) {
               max-width: 45%;
            }

            @media screen and (max-width: 768px) {
               max-width: 420px;
               margin-bottom: 24px;
            }

            @media screen and (max-width: 425px) {
               margin-bottom: 32px !important;
            }

            &____image {
               margin-right: 16px;

               @media screen and (max-width: 425px) {
                  width: 75px;
                  height: 73px;

                  img {
                     width: 100%;
                     height: 100%;
                  }
               }
            }

            &____title {
               box-shadow: 0px 2px 15px rgba(23, 58, 86, 0.1);
               background-color: #fff;
               border-radius: 26.5px;
               padding: 15px 22px;
               position: relative;
               display: flex;
               justify-content: center;

               @media screen and (max-width: 425px) {
                  padding: 10px 18px;
                  width: calc(100% - 75px);
                  border-radius: 13px;
               }

               @media screen and (max-width: 1024px) {
                  border-radius: 18px;
               }

               p {
                  color: #2f281e;

                  @media screen and (max-width: 425px) {
                     font-size: 14px !important;
                  }
               }

               &::before {
                  content: "";
                  width: 17px;
                  height: 17px;
                  border-radius: 50%;
                  background-color: #fff;
                  position: absolute;
                  bottom: -6px;
                  left: 32px;
                  /* z-index: -1; */
               }

               &::after {
                  content: "";
                  width: 9px;
                  height: 9px;
                  border-radius: 50%;
                  background-color: #fff;
                  position: absolute;
                  bottom: -17px;
                  left: 22px;
                  box-shadow: 0px 2px 15px rgba(23, 58, 86, 0.1);
                  /* z-index: -1; */
               }
            }
         }

         &___item:nth-of-type(1),
         &___item:nth-of-type(2) {
            margin-bottom: 24px;
         }

         &___item:nth-of-type(2),
         &___item:nth-of-type(3) {
            flex-direction: row-reverse;

            .section_box__sections___item____image {
               margin-right: 0px;
               margin-left: 16px;
            }

            .section_box__sections___item____title {
               &::after {
                  left: inherit;
                  right: 22px;
               }
               &::before {
                  left: inherit;
                  right: 32px;
               }
            }
         }
      }

      .button {
         display: flex;
         justify-content: center;
      }
   }
`;

export default SectionStyle;
