import React from "react";
import FeaturesStyle from "./style";
import Container from "./../../Reusable/Container";
import Typography from "../../Reusable/Typography";
import Button from "../../Reusable/Button";
// icons import
import FeatureIcon1 from "../../../assets/features/icon.png";
import FeatureIcon2 from "../../../assets/features/icon2.png";
import FeatureIcon3 from "../../../assets/features/icon3.png";
import FeatureIcon4 from "../../../assets/features/icon4.png";
import Background from "../../../assets/features/Bg.png";
import Background_dark from "../../../assets/features/Bg_dark.png";
// ------------------

// features array
const featuresArr = [
   {
      title: "First click tests",
      paragraph: "While most people enjoy casino gambling,",
      icon: FeatureIcon1,
   },
   {
      title: "Design surveys",
      paragraph: "Sports betting, lottery and bingo playing for the fun",
      icon: FeatureIcon2,
   },
   {
      title: "Preference tests",
      paragraph: "The Myspace page defines the individual.",
      icon: FeatureIcon3,
   },
   {
      title: "Five second tests",
      paragraph: "Personal choices and the overall personality of the person. ",
      icon: FeatureIcon4,
   },
];

// components --
const Head = () => (
   <div className="features_box__head">
      <Typography changeMode={true} element="h2">
         Product was Built Specifically for You
      </Typography>
   </div>
);
const Items = () => (
   <div className="features_box__items">
      <ul className="features_box__items___ul">
         {featuresArr.map((item, index) => {
            return (
               <li key={index} className="features_box__items___ul____item">
                  <img src={item.icon} alt="Feature" />
                  <Typography changeMode={true} element="title1">
                     {item.title}
                  </Typography>
                  <Typography changeMode={true} element="paragraph2">
                     {item.paragraph}
                  </Typography>
               </li>
            );
         })}
      </ul>
   </div>
);

const Features = () => {
   return (
      <FeaturesStyle
         img={Background}
         img_dark={Background_dark}
         className="features"
      >
         <Container>
            <div className="features_box">
               <div className="ellipse"></div>
               <div className="ellipse_dark"></div>
               <Head />
               <Items />
               <div className="button">
                  <Button
                     radius="4px"
                     padding="15px 30px"
                     type="primary"
                     uppercase={true}
                  >
                     SIGN UP NOW
                  </Button>
               </div>
            </div>
         </Container>
      </FeaturesStyle>
   );
};

export default Features;
