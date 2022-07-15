import styled from "styled-components";

const ArticlesStyle = styled.div`
   padding-top: 150px;

   @media screen and (max-width: 425px) {
      padding-top: 50px;
   }

   .container {
      .articles_box {
         &__article {
            margin-bottom: 150px;

            @media screen and (max-width: 425px) {
               margin-bottom: 100px;
            }

            .two-column {
               .left {
                  p:first-of-type {
                     margin-bottom: 8px;
                  }
                  h2:first-of-type {
                     margin-bottom: 23px;
                  }
                  p:nth-of-type(2) {
                     margin-bottom: 30px;
                  }
                  p:nth-of-type(3) {
                     margin-bottom: 12px;
                  }
                  p:nth-of-type(4) {
                     margin-bottom: 25px;
                  }
                  p:nth-of-type(5) {
                     margin-bottom: 12px;
                  }

                  .char {
                     display: flex;
                     align-items: center;
                     margin-bottom: 30px;
                     max-width: 450px;

                     svg {
                        margin-right: 30px;
                        width: 35px;
                        height: 35px;
                     }

                     p {
                        margin-bottom: 0;
                        width: calc(100% - 35px);
                     }
                  }
               }

               .right {
                  width: 50%;

                  @media screen and (max-width: 768px) {
                     width: 100%;
                     margin-bottom: 50px;
                  }

                  img {
                     width: 100%;
                     object-fit: cover;
                  }
               }
            }
         }
      }
   }
`;

export default ArticlesStyle;
