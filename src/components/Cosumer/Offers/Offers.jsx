import React from "react";
import styled from "styled-components";
import Container from "../../Reusable/Container";
import Offer1 from "../../../assets/cosumers_offers/offer1.png";
import Offer2 from "../../../assets/cosumers_offers/offer2.png";
import Typography from "../../Reusable/Typography";

const OffersStyle = styled.div`
   padding: 50px 0;
   position: relative;

   .offers_box {
      .ellipse {
         background: linear-gradient(
            180deg,
            #f5f5f5 0%,
            rgba(245, 245, 245, 0) 100%
         );
         width: 100%;
         height: 100%;
         position: absolute;
         left: 0;
         top: 0;
         z-index: -1;
      }

      &__head {
         text-align: center;
         max-width: 540px;
         margin: 0 auto;
         margin-bottom: 90px;

         @media screen and (max-width: 425px) {
            margin-bottom: 70px;
         }
      }

      &__offers {
         display: flex;
         justify-content: space-around;

         @media screen and (max-width: 768px) {
            justify-content: space-between;
         }

         @media screen and (max-width: 650px) {
            flex-direction: column;

            &___offer:first-of-type {
               margin-bottom: 66px;
            }
         }

         &___offer {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 20px;

            * {
               width: fit-content;
            }

            &____categories {
               display: flex;
               flex-direction: column;
               align-items: center;
               margin-bottom: 12px;

               p {
                  margin-bottom: 5px !important;
                  color: var(--text-dark--blue) !important;
               }
            }

            img {
               width: 150px;
               height: 150px;
               margin-bottom: 27px;
            }

            p:first-of-type {
               margin-bottom: 16px;
               color: #000;
            }
            p:last-of-type {
               color: #000;
            }
         }
      }
   }
`;

// components -
const Head = () => (
   <div className="offers_box__head">
      <Typography element="h2" changeMode={true}>
         Join thousand of other who have already received offers
      </Typography>
   </div>
);

const Offer = ({ image, title, categories, paragraph }) => (
   <div className="offers_box__offers___offer">
      <img src={image} alt={title} />
      <Typography element="title1" changeMode={true}>
         {title}
      </Typography>
      <div className="offers_box__offers___offer____categories">
         {categories.map((category) => (
            <Typography key={category} element="paragraph1" changeMode={true}>
               {category}
            </Typography>
         ))}
      </div>
      <Typography element="title3" changeMode={true}>
         {paragraph}
      </Typography>
   </div>
);

const Offers = () => {
   return (
      <OffersStyle className="offers">
         <Container>
            <div className="offers_box">
               <div className="ellipse"></div>
               <Head />
               <div className="offers_box__offers">
                  <Offer
                     image={Offer1}
                     title="Business"
                     paragraph="Find the best business product"
                     categories={[
                        "Cash Flow",
                        "Asset Backed",
                        "Receivables Finance",
                     ]}
                  />
                  <Offer
                     image={Offer2}
                     title="Enterprise"
                     paragraph="Find the best business product"
                     categories={[
                        "Site Acquisition",
                        "Bridge",
                        "Development Finance",
                     ]}
                  />
               </div>
            </div>
         </Container>
      </OffersStyle>
   );
};

export default Offers;
