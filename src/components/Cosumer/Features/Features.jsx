import React from "react";
import styled from "styled-components";
import Container from "../../Reusable/Container";
import Typography from "../../Reusable/Typography";
import ThreeColumn from "../../Reusable/ThreeColumn";

import { ReactComponent as Icon1 } from "../../../assets/costumer-features/icon1.svg";
import { ReactComponent as Icon2 } from "../../../assets/costumer-features/icon2.svg";
import { ReactComponent as Icon3 } from "../../../assets/costumer-features/icon3.svg";

const FeaturesStyle = styled.div`
   margin-top: 117px;
   background: #f5f5f5;
   transition: var(--transition) background;

   @media screen and (max-width: 425px) {
      margin-top: 35px;
   }

   .features_box {
      padding: 50px 0;

      @media screen and (max-width: 425px) {
         padding: 30px 0;
      }

      &__head {
         margin-bottom: 50px;
         text-align: center;

         @media screen and (max-width: 425px) {
            margin-bottom: 40px;
         }
      }

      .threeColumn {
         .item {
            padding: 32px 37px 34px 37px;
            border: 1px solid #dedede;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;

            @media screen and (max-width: 1024px) {
               padding: 23px;
            }

            @media screen and (max-width: 768px) {
               padding: 30px 35px 32px 35px;
            }

            svg {
               margin-bottom: 32px;
            }

            h3 {
               margin-bottom: 16px;
               line-height: 30px;
               font-size: 22px;
            }
         }
      }
   }
`;

// components -
const Item = ({ icon, title, paragraph }) => (
   <div className="item">
      {icon}
      <Typography element="h3" changeMode={true}>
         {title}
      </Typography>
      <Typography element="paragraph2" changeMode={true}>
         {paragraph}
      </Typography>
   </div>
);

const Features = () => {
   return (
      <FeaturesStyle className="consumer_features">
         <Container>
            <div className="features_box">
               <Typography
                  className="features_box__head"
                  element="h2"
                  changeMode={true}
               >
                  Why Choose Product?
               </Typography>
               <ThreeColumn gap="30px">
                  <Item
                     title="Special Business"
                     icon={<Icon1 />}
                     paragraph="Product helps you see how many 
                     more days you need to work 
                     to reach your financial goal 
                     for the month and year."
                  />
                  <Item
                     title="Instant Result"
                     icon={<Icon2 />}
                     paragraph="Product helps you see how many 
                     more days you need to work 
                     to reach your financial goal 
                     for the month and year."
                  />
                  <Item
                     title="Fastest way to organize"
                     icon={<Icon3 />}
                     paragraph="Product helps you see how many 
                     more days you need to work 
                     to reach your financial goal 
                     for the month and year."
                  />
               </ThreeColumn>
            </div>
         </Container>
      </FeaturesStyle>
   );
};

export default Features;
