import React from "react";
import Features from "../Cosumer/Features/Features";
import Header from "../Cosumer/Header/Header";
import HowWork from "../Cosumer/HowWork/HowWork";
import Offers from "../Cosumer/Offers/Offers";
import Footer from "../Cosumer/Footer/Footer";
import DocumentMeta from "react-document-meta";

const Customers = () => {
   return (
      <DocumentMeta title="Costumers">
         <Header />
         <Features />
         <HowWork />
         <Offers />
         <Footer />
      </DocumentMeta>
   );
};

export default Customers;
