import React from "react";
import styled from "styled-components";

const ContainerStyle = styled.div`
   max-width: 1110px;
   margin: 0 auto;

   @media screen and (max-width: 1200px) {
      max-width: 900px;
   }
   @media screen and (max-width: 1024px) {
      max-width: 750px;
   }
   @media screen and (max-width: 800px) {
      max-width: 100%;
      padding: 0 27px;
   }
`;

const Container = ({ children }) => {
   return <ContainerStyle className="container">{children}</ContainerStyle>;
};

export default Container;
