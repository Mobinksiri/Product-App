import styled from "styled-components";

const HeaderEl = styled.div`
   margin-top: 25px;

   .container {
      .two-column {
         .left {
            display: flex;
            flex-flow: column;

            h1 {
               margin-bottom: 18px;
            }

            p {
               margin-bottom: 45px;
            }

            .get-started {
               display: flex;

               @media screen and (max-width: 375px) {
                  flex-direction: column;
               }

               button {
                  @media screen and (max-width: 425px) {
                     padding: 14px 24px;
                  }

                  @media screen and (max-width: 375px) {
                     margin-bottom: 16px;
                  }
               }

               a {
                  margin-left: 30px;
                  display: flex;
                  align-items: center;
                  color: var(--primary);

                  @media screen and (max-width: 425px) {
                     margin-left: 16px;
                  }

                  svg {
                     margin-right: 9px;
                  }

                  p {
                     color: var(--primary);
                     font-weight: 600;
                     margin-bottom: 0;
                  }
               }
            }
         }
         .right {
            img {
               width: 100%;
            }
         }
      }
   }
`;

export default HeaderEl;
