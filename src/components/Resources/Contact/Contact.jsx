import React from "react";
import ContactStyle from "./style";
import Container from "../../Reusable/Container";
import Typography from "../../Reusable/Typography";
import Button from "../../Reusable/Button";
import { ReactComponent as Instagram } from "../../../assets/footer/instagram.svg";
import { ReactComponent as Facebook } from "../../../assets/footer/facebook.svg";
import { ReactComponent as Twitter } from "../../../assets/footer/twitter.svg";
import { useForm } from "react-hook-form";

// components -
const Head = () => (
   <div className="contact_box__head">
      <Typography element="h2" changeMode={true}>
         Contact Us
      </Typography>
      <Typography element="paragraph1" changeMode={true}>
         Need more detailed information? Get in touch with us.
      </Typography>
      <div className="contact_box__head___social">
         <Instagram />
         <Facebook />
         <Twitter />
      </div>
   </div>
);
const Form = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => {
      console.log(data);
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="contact_box__form">
         <Typography element="h3" changeMode={true}>
            Send a Message
         </Typography>
         <div className="input">
            <input {...register("Name")} placeholder="You Name" />
         </div>
         <div className={errors.Email ? "input error" : "input"}>
            <input
               {...register("Email", {
                  required: true,
                  pattern: /^\S+@\S+\.\S+$/,
               })}
               placeholder="You Email"
               className={errors.Email ? "error" : ""}
            />
            {errors.Email && errors.Email.type == "required" ? (
               <p className="error-text">email is required!</p>
            ) : errors.Email && errors.Email.type == "pattern" ? (
               <p className="error-text">email is wrong!</p>
            ) : (
               ""
            )}
         </div>
         <textarea {...register("Your Message")} placeholder="You Message" />
         <div className="button">
            <Button type="primary" padding="18px 54px" radius="35px">
               Send
            </Button>
         </div>
      </form>
   );
};

const Contact = () => {
   return (
      <ContactStyle className="contact">
         <Container>
            <div className="contact_box">
               <Head />
               <iframe
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=hayes%20valley&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
               />
               <Form />
            </div>
         </Container>
      </ContactStyle>
   );
};

export default Contact;
