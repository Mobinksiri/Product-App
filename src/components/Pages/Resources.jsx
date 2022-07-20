import React from "react";
import Contact from "../Resources/Contact/Contact";
import Header from "../Resources/Header/Header";
import Stories from "../Resources/Stories/Stories";
import Footer from "../Resources/Footer/Footer";
import DocumentMeta from "react-document-meta";

const Resources = () => {
   return (
      <DocumentMeta title="Resources">
         <Header />
         <Stories />
         <Contact />
         <Footer />
      </DocumentMeta>
   );
};

export default Resources;
