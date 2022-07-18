import React from "react";
import styled from "styled-components";
import Typography from "./Typography";
import Button from "./Button";
import PosterScreen from "../../assets/poster/screen.png";

const PosterStyle = styled.div`
   display: flex;
   justify-content: center;

   .poster_box {
      padding: 0px 26px;
      background-color: var(--primary);
      width: 968px;
      display: flex;
      border-radius: 32px;
      align-items: center;

      @media screen and (max-width: 800px) {
         flex-direction: column-reverse;
         align-items: center;
         width: 100%;
      }

      @media screen and (max-width: 550px) {
         padding: 10px;
         border-radius: 22px;
      }

      &__desc {
         padding: 49px 0 49px 25px;

         @media screen and (max-width: 550px) {
            padding: 0 20px 20px;
         }

         h2 {
            margin-bottom: 40px;
            color: #fff;
            font-weight: 600;

            @media screen and (max-width: 550px) {
               margin-bottom: 20px;
               font-size: 26px;
               line-height: 40px;
            }
         }
      }

      &__image {
         img {
            max-height: 350px;
            @media screen and (max-width: 550px) {
               width: 100%;
            }
         }
      }
   }
`;

// components -
const Desc = () => (
   <div className="poster_box__desc">
      <Typography element="h2" changeMode={false}>
         Join 100 Compannies who boost their business with Product
      </Typography>
      <Button type="secondary" radius="4px" padding="10px 27px">
         Get This
      </Button>
   </div>
);

const Poster = () => {
   return (
      <PosterStyle className="poster">
         <div className="poster_box">
            <Desc />
            <div className="poster_box__image">
               <img src={PosterScreen} alt="" />
            </div>
         </div>
      </PosterStyle>
   );
};

export default Poster;
