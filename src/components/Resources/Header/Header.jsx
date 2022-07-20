import React, { useEffect, useState } from "react";
import Container from "../../Reusable/Container";
import TwoColumn from "../../Reusable/TwoColumn";
import HeaderStyle from "./style";
import HeadImage from "../../../assets/Resources/header.png";
import HeadImageMobile from "../../../assets/Resources/header-mobile.png";
import Typography from "../../Reusable/Typography";
import { useForm } from "react-hook-form";
import Button from "../../Reusable/Button";
import Avatar1 from "../../../assets/reviews/avatar1.jpg";
import Avatar2 from "../../../assets/reviews/avatar2.jpg";
import Avatar3 from "../../../assets/reviews/avatar3.jpg";

// components -
const Information = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const onSubmit = (data) => {
      console.log(data);
   };
   return (
      <div className="left">
         <Typography element="h1" changeMode={true}>
            Great Business made with Product.
         </Typography>
         <Typography
            className="paragraph"
            element="paragraph2"
            changeMode={true}
         >
            Build better customer relationships easily messaging that provides a
            more personal experience for you and your customers.
         </Typography>
         <form
            onSubmit={handleSubmit(onSubmit)}
            className={errors.email ? "error form" : "form"}
         >
            <input
               {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+\.\S+$/,
               })}
               placeholder="Enter your email adress"
            />
            <Button type="primary" padding="13px 22px" radius="100px">
               Join Now
            </Button>
         </form>
         <div className="join_over">
            <div className="join_over__images">
               <img src={Avatar1} alt="profile" />
               <img src={Avatar2} alt="profile" />
               <img src={Avatar3} alt="profile" />
            </div>
            <Typography element="paragraph3" changeMode={true}>
               Join over <span>4,000+</span> other
            </Typography>
         </div>
      </div>
   );
};

const Header = () => {
   // get window width for change right image on two column division when window width lower than 425px
   const useWidth = () => {
      const [width, setWidth] = useState(0);
      const widthHandler = () => setWidth(window.innerWidth);
      useEffect(() => {
         widthHandler();
         window.addEventListener("resize", widthHandler);
         return () => window.removeEventListener("resize", widthHandler);
      }, [widthHandler]);
      return width;
   };
   const width = useWidth();

   return (
      <HeaderStyle className="header_resources">
         <Container>
            <div className="header_box">
               <TwoColumn>
                  <Information />
                  <div className="right">
                     <img
                        src={width < 768 ? HeadImageMobile : HeadImage}
                        alt="Resources"
                     />
                  </div>
               </TwoColumn>
            </div>
         </Container>
      </HeaderStyle>
   );
};

export default Header;
