import React from "react";
import Articles from "../Home/Articles/Articles";
import Features from "../Home/Features/Features";
import Footer from "../Home/Footer/Footer";
import Header from "../Home/Header/Header";
import Price from "../Home/Price/Price";
import Reviews from "../Home/Reviews/Reviews";
import Section from "../Home/Section/Section";
import Stories from "../Home/Stories/Stories";
import DocumentMeta from "react-document-meta";

const Home = () => {
   return (
      <DocumentMeta title="Product App">
         <Header />
         <Features />
         <Articles />
         <Section />
         <Stories />
         <Price />
         <Reviews />
         <Footer />
      </DocumentMeta>
   );
};

export default Home;
