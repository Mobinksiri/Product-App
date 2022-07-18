import React from "react";
import styled from "styled-components";
import Container from "./Container";
import { ReactComponent as Logo } from "../../assets/footer/logo.svg";
import { ReactComponent as Instagram } from "../../assets/footer/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/footer/twitter.svg";
import { ReactComponent as Facebook } from "../../assets/footer/facebook.svg";
import Typography from "./Typography";
import Button from "./Button";

const FooterStyle = styled.div`
   .footer_box {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 25px;

      @media screen and (max-width: 800px) {
         flex-wrap: wrap;
      }

      @media screen and (max-width: 620px) {
         flex-direction: column;
         align-items: center;
      }

      @media screen and (max-width: 620px) {
         margin-bottom: 50px;
      }

      &__logoSocial {
         display: flex;
         flex-direction: column;
         align-items: center;

         @media screen and (max-width: 620px) {
            width: 100%;
            margin-bottom: 40px;
         }

         &___logo {
            display: flex;
            align-items: center;
            margin-bottom: 30px;

            svg {
               margin-right: 16px;
            }
         }

         &___social {
            display: flex;
            align-items: center;

            svg {
               width: 40px;
               height: 40px;
               margin-right: 16px;
            }

            svg:last-child {
               margin-right: 0;
            }
         }
      }

      &__navbar {
         display: flex;
         justify-content: center;

         @media screen and (max-width: 800px) {
            margin-bottom: 50px;
         }

         @media screen and (max-width: 620px) {
            width: 350px;
            justify-content: space-between;
            margin-bottom: 40px;
         }

         @media screen and (max-width: 500px) {
            width: 100%;
            justify-content: space-between;
            margin-bottom: 40px;
         }

         @media screen and (max-width: 425px) {
            flex-direction: column;
            align-items: center;
         }

         &___nav {
            margin-right: 110px;

            @media screen and (max-width: 1200px) {
               margin-right: 50px;
            }

            @media screen and (max-width: 1024px) {
               margin-right: 35px;
            }

            @media screen and (max-width: 800px) {
               margin-right: 120px;
            }

            @media screen and (max-width: 700px) {
               margin-right: 50px;
            }

            @media screen and (max-width: 620px) {
               margin-right: 0;
               display: flex;
               flex-direction: column;
               align-items: center;
            }

            @media screen and (max-width: 425px) {
               margin-bottom: 32px;
            }

            &____head {
               margin-bottom: 8px;
            }

            &____nav {
               margin-bottom: 4px;
            }
         }

         &___nav:last-child {
            margin-right: 0;

            @media screen and (max-width: 425px) {
               margin-bottom: 0;
            }
         }
      }

      &__newsLetter {
         max-width: 325px;

         @media screen and (max-width: 1200px) {
            max-width: 280px;
         }

         @media screen and (max-width: 1024px) {
            max-width: 200px;
         }

         @media screen and (max-width: 800px) {
            max-width: 345px;
         }

         @media screen and (max-width: 620px) {
            max-width: 380px;
            display: flex;
            align-items: center;
            flex-direction: column;
         }

         @media screen and (max-width: 500px) {
            max-width: 100%;
         }

         &___title {
            margin-bottom: 35px;

            @media screen and (max-width: 620px) {
               text-align: center;
            }

            @media screen and (max-width: 425px) {
               margin-bottom: 25px;
            }
         }

         input {
            width: 100%;
            background: #ffffff;
            border: 1px solid #bcd0e5;
            border-radius: 4px;
            outline: none;
            margin-bottom: 26px;
            height: 48px;
            filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));
            padding: 10px 15px;
            font-size: 16px;
            font-weight: 500;

            @media screen and (max-width: 425px) {
               margin-bottom: 22px;
            }
         }
      }
   }

   .copy_right {
      width: 100%;
      text-align: center;
   }
`;

// components --
const LogoSocial = () => (
   <div className="footer_box__logoSocial">
      <div className="footer_box__logoSocial___logo">
         <Logo />
         <Typography element="logo" changeMode={true}>
            Product
         </Typography>
      </div>
      <div className="footer_box__logoSocial___social">
         <Instagram />
         <Facebook />
         <Twitter />
      </div>
   </div>
);
const FooterNav = ({ navArr, head }) => (
   <div className="footer_box__navbar___nav">
      <Typography
         element="title5"
         changeMode={true}
         className="footer_box__navbar___nav____head"
      >
         {head}
      </Typography>
      {navArr.map((nav) => (
         <Typography
            element="paragraph2"
            changeMode={true}
            className="footer_box__navbar___nav____nav"
         >
            {nav}
         </Typography>
      ))}
   </div>
);
const NewsLetter = () => (
   <div className="footer_box__newsLetter">
      <Typography
         changeMode={true}
         element="title5"
         className="footer_box__newsLetter___title"
      >
         knowing you're always on the best energy deal.
      </Typography>
      <input type="email" placeholder="" />
      <Button type="primary" padding="7px 16px" radius="4px">
         Sign up Now
      </Button>
   </div>
);

const Footer = () => {
   const firstNav = ["About Us", "Blog", "Contact", "FAQ"];
   const secondNav = [
      "Disclaimer",
      "Financing",
      "Privacy Policy",
      "Terms Of Service",
   ];
   return (
      <FooterStyle className="footer">
         <Container>
            <div className="footer_box">
               <LogoSocial />
               <div className="footer_box__navbar">
                  <FooterNav head="Resource" navArr={firstNav} />
                  <FooterNav head="Legal Stuff" navArr={secondNav} />
               </div>
               <NewsLetter />
            </div>
            <Typography
               element="paragraph2"
               changeMode={true}
               className="copy_right"
            >
               Made With Love By Figmaland All Right Reserved
            </Typography>
         </Container>
      </FooterStyle>
   );
};

export default Footer;
