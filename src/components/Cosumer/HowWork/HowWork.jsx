import React from "react";
import Container from "../../Reusable/Container";
import TwoColumn from "../../Reusable/TwoColumn";
import Typography from "../../Reusable/Typography";
import Button from "../../Reusable/Button";
import HowWorkStyle from "./style";
import Step1Image from "../../../assets/consumer_howWork/mac1.png";
import Step2Image from "../../../assets/consumer_howWork/mac2.png";
import Step3Image from "../../../assets/consumer_howWork/mac3.png";

// components -
const Item = ({ reverse, image, title, head, paragraph }) => (
   <TwoColumn reverse={reverse}>
      <div className="left">
         <Typography uppercase={true} element="title5" changeMode={true}>
            {title}
         </Typography>
         <Typography element="title6" changeMode={true}>
            {head}
         </Typography>
         <Typography element="paragraph2" changeMode={true}>
            {paragraph}
         </Typography>
      </div>
      <div className="right">
         <img src={image} alt={head} />
      </div>
   </TwoColumn>
);

const HowWork = () => {
   return (
      <HowWorkStyle>
         <Container>
            <div className="howWork_box">
               <Typography
                  className="howWork_box__head"
                  element="h2"
                  changeMode={true}
               >
                  How Product Work?
               </Typography>
               <Item
                  image={Step1Image}
                  reverse={true}
                  title="step 1"
                  paragraph="Completing our easy step-by-step application form gives you access to multiple business with multiple products. We analyse your business through our proprietary credit analysis technology "
                  head="Apply for a product"
               />
               <Item
                  image={Step2Image}
                  title="step 2"
                  paragraph="Product will contactting you instantly to receive payment of the Application Fee. if no offer of product is available, your fee will be fully refunded."
                  head="Pay fully refundable"
               />
               <Item
                  image={Step3Image}
                  reverse={true}
                  title="step 3"
                  paragraph="Product will continue to liase between borrower and manager to procees and complete a quick and efficient settlement"
                  head="Completion"
               />
               <div className="button">
                  <Button type="primary" padding="11px 18px" radius="8px">
                     Get in touch with us
                  </Button>
               </div>
            </div>
         </Container>
      </HowWorkStyle>
   );
};

export default HowWork;
