import React from "react";
import TwoColumn from "../../Reusable/TwoColumn";
import Container from "../../Reusable/Container";
import HeaderEl from "./style";
import Typography from "../../Reusable/Typography";
import SocialImage from "../../../assets/home-header/amico.png";
import Button from "../../Reusable/Button";
import { ReactComponent as PlaySvg } from "../../../assets/home-header/play.svg";

// components --
const Left = () => (
   <div className="left">
      <Typography changeMode={true} element="h1">
         Work at the speed of thought
      </Typography>
      <Typography changeMode={true} element="paragraph1">
         Tools, tutorials, design and innovation experts, all in one place! The
         most intuitive way to imagine your next user experience.
      </Typography>
      <div className="get-started">
         <Button type="primary" radius="4px" padding="15px 36px">
            Get started
         </Button>
         <a className="play" href="">
            <PlaySvg />
            <Typography element="paragraph2">Watch the Video</Typography>
         </a>
      </div>
   </div>
);

const Header = () => {
   return (
      <HeaderEl>
         <Container>
            <TwoColumn reverse={false}>
               <Left />
               <div className="right">
                  <img src={SocialImage} alt="social media" />
               </div>
            </TwoColumn>
         </Container>
      </HeaderEl>
   );
};

export default Header;
