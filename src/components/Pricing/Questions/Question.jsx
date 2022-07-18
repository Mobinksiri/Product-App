import React, { useEffect } from "react";
import Typography from "../../Reusable/Typography";

const Question = ({ title, paragraph2, className }) => {
   // click to remove all questions height and set height to clicked element
   const clickHandler = (e) => {
      // remove all
      const questions = document.querySelector("#questions_wrapper");
      const questionsArray = Array.from(questions.children);
      for (let i = 0; i < questionsArray.length; i++) {
         const element = questionsArray[i];
         element.children[1].style.height = "0";
         element.classList.remove("active");
      }

      // set new
      e.target.classList.add("active");
      const wrapper = e.target.children[1];
      const paragraph = wrapper.children[0];
      wrapper.style.height = paragraph.clientHeight + "px";
   };

   useEffect(() => {
      const firstQuestion = document.querySelector(".first_question");
      firstQuestion.children[1].style.height =
         firstQuestion.children[1].children[0].clientHeight + "px";
   }, []);

   return (
      <div
         onClick={clickHandler}
         className={`
         questions_box__questions___question ${className ? className : ""}
         `}
      >
         <div className="questions_box__questions___question____head">
            <div className="questions_box__questions___question____head_____plus">
               <span></span>
               <span></span>
            </div>
            <Typography
               className="question_paragraph"
               element="question"
               changeMode={true}
            >
               {title}
            </Typography>
         </div>
         <div className="paragraph_wrapper">
            <Typography
               className="paragraph"
               changeMode={true}
               element="paragraph2"
            >
               {paragraph2}
            </Typography>
         </div>
      </div>
   );
};

export default Question;
