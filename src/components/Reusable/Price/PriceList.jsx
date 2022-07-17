import React from "react";
import Typography from "../Typography";
import Button from "../Button";
import PriceListStyle from "./style";

// components --
const Price = ({ title, price, operators, className, buttonType }) => (
   <div className={`priceList_item ${className ? className : ""}`}>
      <Typography element="h3" changeMode={false}>
         {title}
      </Typography>
      <Typography element="paragraph2" changeMode={false}>
         Brief price description
      </Typography>
      <div className="priceList_item__price">
         <h1 className="number">{price}</h1>
         <div className="priceList_item__price___date">
            <Typography element="h3" changeMode={false}>
               $
            </Typography>
            <Typography element="paragraph2" changeMode={false}>
               Per / month
            </Typography>
         </div>
      </div>
      <Typography element="paragraph2" changeMode={false}>
         {operators}
      </Typography>
      <Typography element="paragraph2" changeMode={false}>
         Notifications
      </Typography>
      <Typography element="paragraph2" changeMode={false}>
         Landing Pages
      </Typography>
      <Button
         type={buttonType == "primary" ? "primary" : "secondary"}
         padding="11px 18px"
         radius="8px"
      >
         Order Now
      </Button>
   </div>
);

const PriceList = () => {
   return (
      <PriceListStyle>
         <Price
            buttonType="primary"
            title="Free"
            price="0"
            operators="Only 2 Operators"
         />
         <Price
            className="priceList_item__active"
            title="Standard"
            price="5"
            operators="5+ Operators"
         />
         <Price
            buttonType="primary"
            title="Premium"
            price="10"
            operators="10+ Operators"
         />
      </PriceListStyle>
   );
};

export default PriceList;
