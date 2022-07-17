import React from "react";
import Articles from "../Home/Articles/Articles";
import Features from "../Home/Features/Features";
import Header from "../Home/Header/Header";
import Price from "../Home/Price/Price";
import Section from "../Home/Section/Section";
import Stories from "../Home/Stories/Stories";

const Home = () => {
   return (
      <>
         <Header />
         <Features />
         <Articles />
         <Section />
         <Stories />
         <Price />
      </>
   );
};

export default Home;
