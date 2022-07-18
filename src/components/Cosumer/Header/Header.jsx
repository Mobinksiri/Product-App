import React from "react";
import styled from "styled-components";
import Container from "../../Reusable/Container";
import Typography from "../../Reusable/Typography";
import { ReactComponent as Airbnb } from "../../../assets/costumers-brands/airbnb.svg";
import { ReactComponent as Google } from "../../../assets/costumers-brands/google.svg";
import { ReactComponent as Microsoft } from "../../../assets/costumers-brands/microsoft.svg";
import { ReactComponent as Fedex } from "../../../assets/costumers-brands/fedex.svg";

const HeaderStyle = styled.div`
   margin-top: 100px;

   @media screen and (max-width: 425px) {
      margin-top: 50px;
   }

   .header_box {
      max-width: 850px;
      margin: 0 auto;

      h1 {
         width: 100%;
         text-align: center;
         margin-bottom: 50px;
      }

      &__brands {
         display: flex;
         align-items: center;

         @media screen and (max-width: 600px) {
            flex-wrap: wrap;
            justify-content: space-between;
         }

         svg {
            margin-right: 64px;

            @media screen and (max-width: 800px) {
               margin-right: 30px;
            }

            @media screen and (max-width: 600px) {
               width: 45%;
               margin-right: 0;
               margin-bottom: 50px;
            }

            @media screen and (max-width: 425px) {
               width: 40%;
            }
         }

         svg:last-child {
            margin-right: 0;
         }
      }
   }
`;

const Header = () => {
   return (
      <HeaderStyle>
         <Container>
            <div className="header_box">
               <Typography element="h1" changeMode={true}>
                  Our Clients
               </Typography>
               <div className="header_box__brands">
                  <Airbnb />
                  <Google />
                  <Microsoft />
                  <Fedex />
               </div>
            </div>
         </Container>
      </HeaderStyle>
   );
};

export default Header;
