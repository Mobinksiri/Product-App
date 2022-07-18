import React from "react";
import styled from "styled-components";
import Button from "../../Reusable/Button";
import Container from "../../Reusable/Container";
import Typography from "../../Reusable/Typography";

const EnterPriseStyle = styled.div`
   margin-top: 150px;
   position: relative;

   @media screen and (max-width: 425px) {
      margin-top: 100px;
   }

   .enterprise_box {
      padding: 50px 0;

      .ellipse {
         background: linear-gradient(
            180deg,
            #f7f7f7 0%,
            rgba(247, 247, 247, 0) 100%
         );
         width: 100%;
         height: 100%;
         position: absolute;
         top: 0;
         left: 0;
         z-index: -1;
      }

      &__content {
         text-align: center;
         margin-bottom: 50px;

         p:first-of-type {
            margin-bottom: 16px;
         }

         h1 {
            margin-bottom: 16px;
         }

         p:last-of-type {
            margin-bottom: 32px;
         }
      }
   }
`;

// components -
const Content = () => (
   <div className="enterprise_box__content">
      <Typography element="title2" uppercase={true} changeMode={true}>
         ENTERPRISE
      </Typography>
      <Typography element="h1" changeMode={true}>
         Are you interested in a custom tailored plan?
      </Typography>
      <Typography element="title3" changeMode={true}>
         Product is a set of advanced features for really large teams with
         projects.
      </Typography>
      <Button type="primary" radius="8px" padding="11px 18px">
         Get in touch with us
      </Button>
   </div>
);

const EnterPrise = () => {
   return (
      <EnterPriseStyle className="enterprise">
         <Container>
            <div className="enterprise_box">
               <div className="ellipse"></div>
               <Content />
            </div>
         </Container>
      </EnterPriseStyle>
   );
};

export default EnterPrise;
