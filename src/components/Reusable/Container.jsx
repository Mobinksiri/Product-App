import React from "react";
import styled from "styled-components";

const ContainerStyle = styled.div`
   max-width: 1110px;
   margin: 0 auto;

   @media screen and (max-width: 100px) {
   }
   @media screen and (max-width: 100px) {
   }
   @media screen and (max-width: 100px) {
   }
`;

const Container = ({ children }) => {
   return <ContainerStyle>{children}</ContainerStyle>;
};

export default Container;
