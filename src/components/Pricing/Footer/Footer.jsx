import React from "react";
import styled from "styled-components";
import Container from "../../Reusable/Container";
import Poster from "../../Reusable/Poster";
import FooterComponent from "../../Reusable/Footer";

const FooterStyle = styled.div`
   padding-top: 150px;

   @media screen and (max-width: 425px) {
      padding-top: 80px;
   }

   .poster {
      padding-bottom: 150px;

      @media screen and (max-width: 425px) {
         padding-bottom: 100px;
      }
   }

   .footer {
      padding-bottom: 50px;
   }
`;

const Footer = () => {
   return (
      <FooterStyle>
         <Container>
            <Poster />
            <FooterComponent />
         </Container>
      </FooterStyle>
   );
};

export default Footer;
