import styled from "styled-components";

const HeaderStyle = styled.div`
   padding-top: 76px;

   @media screen and (max-width: 425px) {
      padding-top: 40px;
   }

   .header_box {
      .two-column {
         align-items: flex-start;

         @media screen and (max-width: 768px) {
            flex-direction: column;
         }

         .right {
            @media screen and (max-width: 768px) {
               margin-bottom: 0;
            }

            img {
               width: 100%;
            }
         }

         .left {
            @media screen and (max-width: 768px) {
               margin-bottom: 50px;
               display: flex;
               flex-direction: column;
               align-items: center;
            }

            h1 {
               line-height: 60px;
               margin-bottom: 24px;

               @media screen and (max-width: 768px) {
                  text-align: center;
               }

               @media screen and (max-width: 425px) {
                  line-height: 50px;
                  margin-bottom: 16px;
               }
            }

            .paragraph {
               margin-bottom: 24px;

               @media screen and (max-width: 768px) {
                  text-align: center;
               }
               @media screen and (max-width: 425px) {
                  margin-bottom: 19px;
               }
            }

            form.form {
               margin-bottom: 24px;
               max-width: 470px;
               height: 66px;
               display: flex;
               align-items: center;
               border: 1px solid #eaeaea;
               border-radius: 100px;
               padding: 8px;
               position: relative;
               transition: var(--transition) border;

               @media screen and (max-width: 768px) {
                  max-width: inherit;
                  width: 80%;
               }

               @media screen and (max-width: 600px) {
                  max-width: inherit;
                  width: 100%;
               }

               input {
                  border: none;
                  outline: none;
                  width: 100%;
                  height: 100%;
                  background-color: transparent;
                  padding: 25px 27px;
                  font-size: 16px;
                  font-weight: 400;
                  line-height: 16px;
                  letter-spacing: -3%;
                  color: var(--text-dark--blue);
                  transition: var(--transition) color;

                  &::placeholder {
                     font-size: 16px;
                     font-weight: 400;
                     line-height: 16px;
                     letter-spacing: -3%;
                     color: var(--text-dark--blue);
                     transition: var(--transition) color;
                  }

                  @media screen and (max-width: 425px) {
                     padding: 25px 20px;
                  }
               }

               button {
                  position: absolute;
                  right: 8.33px;
                  top: 9px;

                  @media screen and (max-width: 425px) {
                     padding: 13px 17px;
                  }
               }
            }

            .error {
               border: 1px solid #b00020 !important;
            }

            .join_over {
               display: flex;
               align-items: center;

               @media screen and (max-width: 600px) {
                  width: 100%;
               }

               &__images {
                  display: flex;
                  margin-right: 9px;

                  img:nth-of-type(1) {
                     border: 4px solid #fff;
                     margin-left: 0;
                  }
                  img:nth-of-type(2) {
                     border: 4px solid #fff;
                  }
                  img:nth-of-type(3) {
                     border: 4px solid #f4f9fa;
                  }

                  img {
                     width: 50px;
                     height: 50px;
                     object-fit: cover;
                     border-radius: 50px;
                     margin-left: -15px;
                  }
               }

               p {
                  span {
                     color: var(--primary);
                     font-weight: 500;
                  }
               }
            }
         }
      }
   }
`;

export default HeaderStyle;
