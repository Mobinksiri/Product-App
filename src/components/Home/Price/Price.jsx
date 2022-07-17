import React from "react";
import Typography from "../../Reusable/Typography";
import PriceStyled from "./style";
import Container from "../../Reusable/Container";
import PriceList from "../../Reusable/Price/PriceList";

// components --
const Head = () => (
   <div className="price_box__head">
      <Typography element="h2" changeMode={true}>
         Price Table
      </Typography>
      <Typography element="title3" changeMode={true}>
         We offer competitive price
      </Typography>
   </div>
);

const Price = () => {
   return (
      <PriceStyled className="price">
         <Container>
            <div className="price_box">
               <Head />
               <PriceList />
            </div>
         </Container>
      </PriceStyled>
   );
};

export default Price;
