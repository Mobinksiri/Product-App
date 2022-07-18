import React, { useEffect } from "react";
import styled from "styled-components";
import Container from "../../Reusable/Container";
import Typography from "../../Reusable/Typography";
import Question from "./Question";

const QuestionsStyle = styled.div`
   margin-top: 150px;

   .questions_box {
      &__head {
         margin-bottom: 50px;
         text-align: center;

         h2 {
            margin-bottom: 8px;
         }
      }
      &__questions {
         &___question:first-of-type {
            border-top: none;
            padding-top: 0;
            margin-top: 0;

            .paragraph_wrapper {
               height: 0;
            }
         }

         &___question {
            border-top: 1px solid #e7e7e7;
            padding-top: 16px;
            margin-top: 16px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            cursor: pointer;

            * {
               pointer-events: none;
            }

            &____head {
               display: flex;
               align-items: center;
               margin-bottom: 16px;

               @media screen and (max-width: 425px) {
                  align-items: flex-start;
               }

               &_____plus {
                  width: 24px;
                  height: 24px;
                  background-color: var(--primary);
                  border-radius: 50px;
                  position: relative;
                  margin-right: 16px;

                  span {
                     width: 12px;
                     height: 2px;
                     background-color: #fff;
                     display: inline-block;
                     position: absolute;
                     left: 50%;
                     top: 50%;
                     transform: translate(-50%, -50%);
                  }

                  span:last-of-type {
                     transform: translate(-50%, -50%) rotateZ(90deg);
                  }
               }

               .question_paragraph {
                  width: calc(100% - 40px);
               }
            }

            .paragraph_wrapper {
               transition: var(--transition) all;

               p {
                  line-height: 24px;
               }
            }
         }

         &___question:not(:first-of-type) {
            .paragraph_wrapper {
               height: 0;
            }
         }
      }
   }
`;

// components -
const Head = () => (
   <div className="questions_box__head">
      <Typography element="h2" changeMode={true}>
         Frequently asked question
      </Typography>
      <Typography element="paragraph2" changeMode={true}>
         Something is not clear? You need help? Check our FAQ section
      </Typography>
   </div>
);

const Questions = () => {
   return (
      <QuestionsStyle className="questions">
         <Container>
            <div className="questions_box">
               <Head />
               <div id="questions_wrapper" className="questions_box__questions">
                  <Question
                     className="first_question"
                     title="What are my payment option?"
                     paragraph2="After creating your account you will have an oppurtunity to create your first project that will be associated withthe collaborators e-mail. An invitation  will be sent automatically. Then, invited user will have to confirm his account by e-mail and finish userd onboarding.
                     After creating your account you will have an oppurtunity to create your first project that will be associated withthe collaborators e-mail. An invitation  will be sent automatically."
                  />
                  <Question
                     title="How can I invite collaborator to platform?"
                     paragraph2="After creating your account you will have an oppurtunity to create your first project that will be associated withthe collaborators e-mail. An invitation  will be sent automatically. Then, invited user will have to confirm his account by e-mail and finish userd onboarding."
                  />
                  <Question
                     title="Can I upgrade my plan?"
                     paragraph2="After creating your account you will have an oppurtunity to create your first project that will be associated withthe collaborators e-mail. An invitation  will be sent automatically. Then, invited user will have to confirm his account by e-mail and finish userd onboarding."
                  />
                  <Question
                     title="Can I cancel my plan at anytime?"
                     paragraph2="After creating your account you will have an oppurtunity to create your first project that will be associated withthe collaborators e-mail. An invitation  will be sent automatically. Then, invited user will have to confirm his account by e-mail and finish userd onboarding."
                  />
               </div>
            </div>
         </Container>
      </QuestionsStyle>
   );
};

export default Questions;
