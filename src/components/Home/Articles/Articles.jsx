import React from "react";
import ArticlesStyle from "./style";
import Container from "../../Reusable/Container";
import TwoColumn from "../../Reusable/TwoColumn";
import Typography from "../../Reusable/Typography";
import Image1 from "../../../assets/articles/amico.png";
import Image2 from "../../../assets/articles/amico2.png";
import Image3 from "../../../assets/articles/amico3.png";
import { ReactComponent as Char1 } from "../../../assets/articles/char1.svg";
import { ReactComponent as Char2 } from "../../../assets/articles/char2.svg";
import { ReactComponent as Char3 } from "../../../assets/articles/char3.svg";

// articles bodies --
const ArticleOne = () => (
   <div className="left">
      <Typography changeMode={true} element="title2">
         Effortless Validation for
      </Typography>
      <Typography changeMode={true} element="h2">
         Management
      </Typography>
      <Typography changeMode={true} element="paragraph2">
         The Myspace page defines the individual, his or her characteristics,
         traits, personal choices and the overall personality of the person.
      </Typography>
      <Typography changeMode={true} element="title2">
         Accessory makers
      </Typography>
      <Typography changeMode={true} element="paragraph2">
         While most people enjoy casino gambling, sports betting, lottery and
         bingo playing for the fun
      </Typography>
      <Typography changeMode={true} element="title2">
         Alterationists
      </Typography>
      <Typography changeMode={true} element="paragraph2">
         If you are looking for a new way to promote your business that won’t
         cost you more money,
      </Typography>
   </div>
);
const ArticleTwo = () => (
   <div className="left">
      <Typography changeMode={true} element="title2">
         Easier decision making for
      </Typography>
      <Typography changeMode={true} element="h2">
         Customer Support
      </Typography>
      <Typography changeMode={true} element="paragraph2">
         The Myspace page defines the individual, his or her characteristics,
         traits, personal choices and the overall personality of the person.
      </Typography>
      <div className="char">
         <Char1 />
         <Typography changeMode={true} element="paragraph2">
            Never worry about overpaying for your energy again.
         </Typography>
      </div>
      <div className="char">
         <Char2 />
         <Typography changeMode={true} element="paragraph2">
            We will only switch you to energy companies that we trust and will
            treat you right
         </Typography>
      </div>
      <div className="char">
         <Char3 />
         <Typography changeMode={true} element="paragraph2">
            We track the markets daily and know where the savings are.
         </Typography>
      </div>
   </div>
);
const ArticleThree = () => (
   <div className="left">
      <Typography changeMode={true} element="title2">
         Optimisation for
      </Typography>
      <Typography changeMode={true} element="h2">
         Collaborative
      </Typography>
      <Typography changeMode={true} element="paragraph2">
         Few would argue that, despite the advancements of feminism over the
         past three decades, women still face a double standard when it comes to
         their behavior.
      </Typography>
      <Typography changeMode={true} element="title2">
         Accessory makers
      </Typography>
      <Typography changeMode={true} element="paragraph2">
         While most people enjoy casino gambling, sports betting, lottery and
         bingo playing for the fun
      </Typography>
      <Typography changeMode={true} element="title2">
         Alterationists
      </Typography>
      <Typography changeMode={true} element="paragraph2">
         If you are looking for a new way to promote your business that won’t
         cost you more money,
      </Typography>
   </div>
);

// components -
const Article = ({ reverse, left, right }) => {
   return (
      <div className="articles_box__article">
         <TwoColumn reverse={reverse}>
            {left}
            <div className="right">{right}</div>
         </TwoColumn>
      </div>
   );
};

const Articles = () => {
   return (
      <ArticlesStyle>
         <Container>
            <div className="articles_box">
               <Article
                  // reverse={true}
                  left={<ArticleOne />}
                  right={<img src={Image1} />}
               />
               <Article
                  reverse={true}
                  left={<ArticleTwo />}
                  right={<img src={Image2} />}
               />
               <Article
                  // reverse={true}
                  left={<ArticleThree />}
                  right={<img src={Image3} />}
               />
            </div>
         </Container>
      </ArticlesStyle>
   );
};

export default Articles;
