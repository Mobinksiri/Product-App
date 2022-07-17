import styled from "styled-components";

const ReviewsStyle = styled.div`
   padding-top: 150px;

   @media screen and (max-width: 425px) {
      padding-top: 100px;
   }

   .reviews_box {
      &__head {
         display: flex;
         flex-direction: column;
         align-items: center;
         margin-bottom: 50px;

         @media screen and (max-width: 425px) {
            margin-bottom: 30px;
         }

         h2,
         p {
            text-align: center;
         }

         h2 {
            margin-bottom: 8px;
         }

         p {
            max-width: 580px;
         }
      }

      .item {
         background: #ffffff;
         border: 1px solid #dedede;
         border-radius: 5px;
         padding: 28px;

         &_rate {
            margin-bottom: 16px;

            span {
               color: #f3cd03;
               font-size: 30px;
               user-select: none;
            }
         }

         .review {
            margin-bottom: 16px;
            color: #737373;
         }

         &_profile {
            display: flex;
            align-items: center;

            img {
               width: 50px;
               height: 50px;
               object-fit: cover;
               border-radius: 50px;
               margin-right: 14px;
            }

            &__desc {
               p:first-child {
                  color: var(--primary);
               }
            }
         }
      }
   }
`;

export default ReviewsStyle;
