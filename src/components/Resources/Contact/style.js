import styled from "styled-components";

const ContactStyle = styled.div`
   padding-top: 100px;

   .contact_box {
      max-width: 870px;
      margin: 0 auto;
      padding-top: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media screen and (max-width: 425px) {
         padding-top: 10px;
      }

      &__head {
         text-align: center;
         margin-bottom: 56px;
         display: flex;
         flex-direction: column;
         align-items: center;

         h2 {
            margin-bottom: 17px;
         }
         p {
            margin-bottom: 65px;
            max-width: 312px;

            @media screen and (max-width: 425px) {
               margin-bottom: 40px;
            }
         }

         &___social {
            display: flex;
            align-items: center;

            svg {
               margin: 0 11px;
            }
         }
      }

      iframe {
         width: 100%;
         height: 330px;
         border-radius: 2px;
         margin-bottom: 60px;

         @media screen and (max-width: 425px) {
            height: 380px;
         }
      }

      &__form {
         padding: 52px 50px;
         border-radius: 45px;
         width: 100%;
         border: 1px solid #dddddd;
         display: flex;
         align-items: center;
         flex-direction: column;
         transition: var(--transition) background, var(--transition) border;

         @media screen and (max-width: 525px) {
            padding: 0;
            border: none;
            border-radius: 0;
         }

         h3 {
            margin-bottom: 45px;

            @media screen and (max-width: 425px) {
               margin-bottom: 30px;
            }
         }

         .input {
            margin-bottom: 45px;
            width: 100%;

            @media screen and (max-width: 425px) {
               margin-bottom: 30px;
            }

            .error-text {
               font-weight: 400;
               font-size: 13px;
               line-height: 16px;
               letter-spacing: 0.1px;
               color: #ff3333;
               margin-left: 15px;
               margin-top: 6px;
            }

            input {
               background: #f5f5f5;
               width: 100%;
               border: 1px solid #e8e8e8;
               border-radius: 39px;
               height: 54px;
               padding: 19px 20px;
               outline: none;
               font-weight: 400;
               font-size: 15px;
               line-height: 16px;
               letter-spacing: 0.1px;
               color: #22343d;

               &::placeholder {
                  font-weight: 400;
                  font-size: 15px;
                  line-height: 16px;
                  letter-spacing: 0.1px;
                  color: #22343d;
               }
            }
         }

         .error {
            input {
               border: 1px solid #ff3333;
            }
         }

         textarea {
            background: #f5f5f5;
            border: 1px solid #e8e8e8;
            outline: none;
            width: 100%;
            resize: vertical;
            height: 200px;
            max-height: 300px;
            padding: 23px 20px;
            font-weight: 400;
            font-size: 15px;
            line-height: 16px;
            letter-spacing: 0.1px;
            color: #22343d;
            margin-bottom: 45px;

            @media screen and (max-width: 425px) {
               margin-bottom: 30px;
            }
         }

         .button {
            width: 100%;
         }
      }
   }
`;

export default ContactStyle;
