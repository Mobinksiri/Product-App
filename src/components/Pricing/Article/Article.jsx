import React from "react";
import styled from "styled-components";
import Container from "../../Reusable/Container";
import Typography from "../../Reusable/Typography";
import TwoColumn from "../../Reusable/TwoColumn";
import PricingImage from "../../../assets/articles/pricing.png";
import { ReactComponent as Svg1 } from "../../../assets/articles/item1.svg";
import { ReactComponent as Svg2 } from "../../../assets/articles/item2.svg";
import { ReactComponent as Svg3 } from "../../../assets/articles/item3.svg";

const ArticleStyle = styled.div`
   margin-top: 100px;

   @media screen and (max-width: 425px) {
      margin-top: 30px;
   }

   .article_box {
      &__title {
         text-align: center;
         margin-bottom: 56px;

         @media screen and (max-width: 768px) {
            margin-bottom: 30px;
         }
      }

      .two-column {
         .left {
            &_item {
               margin-bottom: 32px;

               &__head {
                  display: flex;
                  align-items: center;
                  margin-bottom: 16px;

                  svg {
                     margin-right: 16px;
                  }
               }

               .paragraph {
                  padding-left: 15px;
               }
            }

            &_item:last-of-type {
               margin-bottom: 0px;
            }
         }

         .right {
            @media screen and (max-width: 768px) {
               margin-bottom: 30px;
            }

            img {
               width: 100%;
            }
         }
      }
   }
`;

// components -
const Item = ({ svg, title, paragraph }) => (
   <div className="left_item">
      <div className="left_item__head">
         {svg}
         <Typography element="title1" changeMode={true}>
            {title}
         </Typography>
      </div>
      <Typography changeMode={true} className="paragraph" element="paragraph2">
         {paragraph}
      </Typography>
   </div>
);
const Left = () => (
   <div className="left">
      <Item
         title="Enterpreneur"
         svg={<Svg1 />}
         paragraph="Product is a great way to help medium and samall enterprise owners achieve their goals"
      />
      <Item
         title="Accountants"
         svg={<Svg2 />}
         paragraph="Whether you are working on contract with clients, or on other key accounting documents, Product is for you"
      />
      <Item
         title="Universities"
         svg={<Svg3 />}
         paragraph="Organize university projects and have documents easily graded online with Product"
      />
   </div>
);

const Article = () => {
   return (
      <ArticleStyle>
         <Container>
            <div className="article_box">
               <Typography
                  className="article_box__title"
                  element="h2"
                  changeMode={true}
               >
                  Product is being used with great effects alongside:
               </Typography>
               <TwoColumn reverse={true}>
                  <Left />
                  <div className="right">
                     <img src={PricingImage} alt="" />
                  </div>
               </TwoColumn>
            </div>
         </Container>
      </ArticleStyle>
   );
};

export default Article;
