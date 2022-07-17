import React, { useEffect, useState } from "react";
import StoriesStyle from "./style";
import Container from "../../Reusable/Container";
import Typography from "../../Reusable/Typography";
import Story1 from "../../../assets/stories/story1.jpg";
import Story2 from "../../../assets/stories/story2.jpg";
import Story3 from "../../../assets/stories/story3.jpg";

// swiper imports --
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// components --
const Head = () => (
   <div className="stories_box__head">
      <Typography element="h2" changeMode={true}>
         Contents Strategies
      </Typography>
      <Typography element="paragraph2" changeMode={true}>
         We focus on ergonomics and meeting you where you work. It's only a
         keystroke away.
      </Typography>
   </div>
);
const Story = ({ date, image, title, owner }) => (
   <div className="stories_box__items___story">
      <div className="stories_box__items___story____image">
         <img src={image} alt="" />
      </div>
      <div className="stories_box__items___story____desc">
         <Typography element="paragraph2" changeMode={false}>
            By <span>{owner}</span> | {date}
         </Typography>
         <Typography element="h3" changeMode={false}>
            {title}
         </Typography>
      </div>
   </div>
);
const StoriesItems = ({ width }) => (
   <div className="stories_box__items">
      <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         spaceBetween={
            width < 1024 && width > 768
               ? 32
               : width < 768 && width > 425
               ? 20
               : width < 425
               ? 16
               : 32
         }
         slidesPerView={
            width <= 1024 && width > 768
               ? 2
               : width <= 768 && width > 610
               ? 2
               : width <= 610
               ? 1
               : 3
         }
         grabCursor={true}
         pagination={{ clickable: true }}
      >
         <SwiperSlide>
            <Story
               image={Story1}
               date="03 March 2019"
               title="Increasing Prosperity With Positive Thinking"
               owner="Wahid Ari"
            />
         </SwiperSlide>
         <SwiperSlide>
            <Story
               image={Story2}
               date="03 March 2019"
               title="Success Steps For Your Personal Or Business"
               owner="Wahid Ari"
            />
         </SwiperSlide>
         <SwiperSlide>
            <Story
               image={Story3}
               date="03 March 2019"
               title="Motivation Is The First Step To Success"
               owner="Wahid Ari"
            />
         </SwiperSlide>
         <SwiperSlide>
            <Story
               image={Story1}
               date="03 March 2019"
               title="Increasing Prosperity With Positive Thinking"
               owner="Wahid Ari"
            />
         </SwiperSlide>
         <SwiperSlide>
            <Story
               image={Story2}
               date="03 March 2019"
               title="Success Steps For Your Personal Or Business"
               owner="Wahid Ari"
            />
         </SwiperSlide>
      </Swiper>
   </div>
);

const Stories = () => {
   // get window width
   const useWidth = () => {
      const [width, setWidth] = useState(0);
      const handleResize = () => setWidth(window.innerWidth);
      useEffect(() => {
         handleResize();
         window.addEventListener("resize", handleResize);
         return () => window.removeEventListener("resize", handleResize);
      }, [handleResize]);
      return width;
   };
   const width = useWidth();
   const breakpointDesktop = 1024;
   const breakpointTablet = 768;
   const breakpointMobile = 425;

   return (
      <StoriesStyle className="stories">
         <Container>
            <div className="stories_box">
               <Head />
               <StoriesItems width={width} />
            </div>
         </Container>
      </StoriesStyle>
   );
};

export default Stories;
