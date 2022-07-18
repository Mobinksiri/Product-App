import React from "react";
import Article from "../Pricing/Article/Article";
import EnterPrise from "../Pricing/EnterPrise/EnterPrise";
import Footer from "../Pricing/Footer/Footer";
import Header from "../Pricing/Header/Header";
import Questions from "../Pricing/Questions/Questions";

const Pricing = () => {
   return (
      <>
         <Header />
         <EnterPrise />
         <Article />
         <Questions />
         <Footer />
      </>
   );
};

export default Pricing;
