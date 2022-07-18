import React from "react";
import styled from "styled-components";
import Container from "../../Reusable/Container";
import Typography from "../../Reusable/Typography";
import PriceList from "../../Reusable/Price/PriceList";

const HeaderStyle = styled.div`
   margin-top: 50px;

   .header_box {
      &__head {
         text-align: center;
         margin-bottom: 50px;

         p:first-of-type {
            margin-bottom: 32px;
         }

         h1 {
            margin-bottom: 16px;
         }
      }
   }
`;

// components -
const Head = () => (
   <div className="header_box__head">
      <Typography element="title2" uppercase={true} changeMode={true}>
         PRICING
      </Typography>
      <Typography element="h1" changeMode={true}>
         Let’s get some real work done here.
      </Typography>
      <Typography element="title3" changeMode={true}>
         Prodict is your perfect solution for working. Get started now for free
      </Typography>
   </div>
);

const Header = () => {
   return (
      <HeaderStyle>
         <Container>
            <div className="header_box">
               <Head />
               <PriceList />
            </div>
         </Container>
      </HeaderStyle>
   );
};

export default Header;
