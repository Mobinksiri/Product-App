import React from "react";
import ThreeColumn from "../../Reusable/ThreeColumn";
import Typography from "../../Reusable/Typography";
import Container from "../../Reusable/Container";
import ReviewsStyle from "./style";
import Avatar1 from "../../../assets/reviews/avatar1.jpg";
import Avatar2 from "../../../assets/reviews/avatar2.jpg";
import Avatar3 from "../../../assets/reviews/avatar3.jpg";

// components --

const Head = () => (
   <div className="reviews_box__head">
      <Typography element="h2" changeMode={true}>
         What Clients Say
      </Typography>
      <Typography element="paragraph2" changeMode={true}>
         Problems trying to resolve the conflict between the two major realms of
         Classical physics: Newtonian mechanics
      </Typography>
   </div>
);

const Item = ({ paragraph, image, name, job }) => (
   <div className="item">
      <div className="item_rate">
         <span className="material-symbols-rounded">star</span>
         <span className="material-symbols-rounded">star</span>
         <span className="material-symbols-rounded">star</span>
         <span className="material-symbols-rounded">star</span>
         <span className="material-symbols-rounded">grade</span>
      </div>
      <Typography className="review" element="paragraph2" changeMode={false}>
         {paragraph}
      </Typography>
      <div className="item_profile">
         <img src={image} alt="avatar" />
         <div className="item_profile__desc">
            <Typography element="title2">{name}</Typography>
            <Typography element="title4">{job}</Typography>
         </div>
      </div>
   </div>
);

const Reviews = () => {
   return (
      <ReviewsStyle>
         <Container>
            <div className="reviews_box">
               <Head />
               <ThreeColumn gap="60px">
                  <Item
                     paragraph="Product helps you see how many 
                  more days you need to work to 
                  reach your financial goal."
                     name="Wahid Ari"
                     job={"Designer"}
                     image={Avatar1}
                  />
                  <Item
                     paragraph="Product helps you see how many 
                  more days you need to work to 
                  reach your financial goal."
                     name="Wahid Ari"
                     job={"Designer"}
                     image={Avatar2}
                  />
                  <Item
                     paragraph="Product helps you see how many 
                  more days you need to work to 
                  reach your financial goal."
                     name="Wahid Ari"
                     job={"Designer"}
                     image={Avatar3}
                  />
               </ThreeColumn>
            </div>
         </Container>
      </ReviewsStyle>
   );
};

export default Reviews;
