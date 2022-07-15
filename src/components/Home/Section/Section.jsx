import React from "react";
import SectionStyle from "./style";
import Container from "../../Reusable/Container";
import Typography from "../../Reusable/Typography";
import Button from "../../Reusable/Button";
import Avatar1 from "../../../assets/sections/Avator1.png";
import Avatar2 from "../../../assets/sections/Avator2.png";
import Avatar3 from "../../../assets/sections/Avator3.png";
import Avatar4 from "../../../assets/sections/Avator4.png";
import Ellipse from "../../../assets/sections/Bg.png";
import Ellipse_dark from "../../../assets/sections/Bg-dark.png";

// components --
const Head = () => (
   <div className="section_box__head">
      <Typography changeMode={true} element="h2">
         Quick & Easy Process
      </Typography>
      <Typography changeMode={true} element="paragraph2">
         Do you require some help for your project: Conception workshop,
         prototyping, marketing strategy, landing page, Ux/UI?
      </Typography>
   </div>
);
const Item = ({ image, title, reverse }) => (
   <div className="section_box__sections___item">
      <div className="section_box__sections___item____image">
         <img src={image} alt="avatar" />
      </div>
      <div className="section_box__sections___item____title">
         <Typography element="title3">{title}</Typography>
      </div>
   </div>
);
const Sections = () => (
   <div className="section_box__sections">
      <Item title="I can take care of your pitch" image={Avatar1} />
      <Item title="I can prototype your app" image={Avatar2} />
      <Item title="I can design you website" image={Avatar3} />
      <Item title="I can help marketing strategy" image={Avatar4} />
   </div>
);

const Section = () => {
   return (
      <SectionStyle className="section" img={Ellipse} img_dark={Ellipse_dark}>
         <Container>
            <div className="section_box">
               <div className="ellipse"></div>
               <div className="ellipse_dark"></div>
               <Head />
               <Sections />
               <div className="button">
                  <Button radius="4px" padding="14px 30px" type="primary">
                     Contact our expert
                  </Button>
               </div>
            </div>
         </Container>
      </SectionStyle>
   );
};

export default Section;
