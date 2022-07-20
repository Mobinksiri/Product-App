import React from "react";
import Container from "../../Reusable/Container";
import Typography from "../../Reusable/Typography";
import StoriesStyle from "./style";
import Story from "../../Reusable/Story";
import Story1 from "../../../assets/resources-stories/story1.jpg";
import Story2 from "../../../assets/resources-stories/story2.jpg";
import Story3 from "../../../assets/resources-stories/story3.jpg";
import Story4 from "../../../assets/resources-stories/story4.jpg";
import Story5 from "../../../assets/resources-stories/story5.jpg";
import Story6 from "../../../assets/resources-stories/story6.jpg";
import { ReactComponent as Arrow } from "../../../assets/resources-stories/circle_right.svg";

// components --
const Head = () => (
   <div className="stories_box__head">
      <Typography element="h2" changeMode={true}>
         Latest Stories
      </Typography>
      <Typography element="paragraph2" changeMode={true}>
         We focus on ergonomics and meeting you where you work. It's only a
         keystroke away.
      </Typography>
   </div>
);
const StoriesUl = () => {
   return (
      <div className="stories_box__ul">
         <Story
            image={Story1}
            date="03 March 2019"
            owner="Wahid Ari"
            title="Increasing Prosperity With Positive Thinking"
         />
         <Story
            image={Story2}
            date="03 March 2019"
            owner="Wahid Ari"
            title="Motivation Is The First Step To Success"
         />
         <Story
            image={Story3}
            date="03 March 2019"
            owner="Wahid Ari"
            title="Success Steps For Your Personal Or Business"
         />
         <Story
            image={Story4}
            date="03 March 2019"
            owner="Wahid Ari"
            title="Increasing Prosperity With Positive Thinking"
         />
         <Story
            image={Story5}
            date="03 March 2019"
            owner="Wahid Ari"
            title="Motivation Is The First Step To Success"
         />
         <Story
            image={Story6}
            date="03 March 2019"
            owner="Wahid Ari"
            title="Success Steps For Your Personal Or Business"
         />
      </div>
   );
};

const Stories = () => {
   return (
      <StoriesStyle>
         <Container>
            <div className="stories_box">
               <Head />
               <StoriesUl />
               <div className="stories_box__more">
                  <Typography element="question" changeMode={true}>
                     More Stories
                  </Typography>
                  <Arrow />
               </div>
            </div>
         </Container>
      </StoriesStyle>
   );
};

export default Stories;
