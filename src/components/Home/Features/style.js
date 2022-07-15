import styled from "styled-components";

const FeaturesStyle = styled.div`
   margin-top: 110px;

   .container {
      .features_box {
         padding-bottom: 90px;
         position: relative;

         @media screen and (max-width: 600px) {
            padding-bottom: 50px;
         }

         @media screen and (max-width: 425px) {
            padding-bottom: 40px;
         }

         .ellipse,
         .ellipse_dark {
            width: 2323.56px;
            height: 389.09px;
            position: absolute;
            bottom: 0;
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
            justify-content: center;
            margin-bottom: 70px;

            h2 {
               max-width: 530px;
               text-align: center;
            }
         }

         &__items {
            margin-bottom: 34px;

            &___ul {
               display: flex;
               align-items: flex-start;
               justify-content: space-between;
               list-style: none;

               @media screen and (max-width: 1200px) {
                  flex-wrap: wrap;
               }

               @media screen and (max-width: 800px) {
                  justify-content: space-around;
               }

               @media screen and (max-width: 700px) {
                  justify-content: space-between;
               }

               @media screen and (max-width: 620px) {
                  flex-direction: column;
                  align-items: center;
               }

               &____item {
                  width: 240px;

                  @media screen and (max-width: 1200px) {
                     margin-bottom: 50px;
                  }

                  @media screen and (max-width: 800px) {
                     width: 40%;
                  }

                  @media screen and (max-width: 700px) {
                     width: 50%;
                  }

                  @media screen and (max-width: 620px) {
                     width: 240px;
                     display: flex;
                     flex-direction: column;
                     align-items: center;
                     margin-bottom: 32px;

                     p {
                        text-align: center;
                     }
                  }

                  @media screen and (max-width: 350px) {
                     width: 100%;
                  }

                  img {
                     margin-bottom: 30px;
                  }

                  p:first-of-type {
                     margin-bottom: 13px;
                  }
               }
            }
         }
         .button {
            display: flex;
            justify-content: center;
         }
      }
   }
`;

export default FeaturesStyle;
