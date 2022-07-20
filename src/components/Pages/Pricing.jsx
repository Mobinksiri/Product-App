import React from "react";
import Article from "../Pricing/Article/Article";
import EnterPrise from "../Pricing/EnterPrise/EnterPrise";
import Footer from "../Pricing/Footer/Footer";
import Header from "../Pricing/Header/Header";
import Questions from "../Pricing/Questions/Questions";
import DocumentMeta from "react-document-meta";

const Pricing = () => {
   return (
      <DocumentMeta title="Pricing">
         <Header />
         <EnterPrise />
         <Article />
         <Questions />
         <Footer />
      </DocumentMeta>
   );
};

export default Pricing;
