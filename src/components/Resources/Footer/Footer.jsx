import React from "react";
import styled from "styled-components";
import Container from "../../Reusable/Container";
import FooterComponent from "../../Reusable/Footer";

const FooterStyle = styled.div`
   padding-top: 150px;
   padding-bottom: 20px;

   @media screen and (max-width: 425px) {
      padding-top: 100px;
   }
`;

const Footer = () => {
   return (
      <FooterStyle>
         <Container>
            <FooterComponent />
         </Container>
      </FooterStyle>
   );
};

export default Footer;
