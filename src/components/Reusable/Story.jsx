import React from "react";
import styled from "styled-components";
import Typography from "./Typography";

const StoryStyle = styled.div`
   display: flex;
   flex-direction: column;
   border: 1px solid #dedede;
   border-radius: 8px;
   user-select: none;
   background-color: #fff;

   .image {
      height: 200px;
      overflow: hidden;
      border-radius: 8px 8px 0 0;

      img {
         width: 100%;
         height: 100%;
         object-fit: cover;
      }
   }

   .desc {
      padding: 24px;

      p {
         margin-bottom: 12px;

         span {
            font-size: 16px;
            font-weight: 700;
            color: var(--text-dark--blue);
            line-height: 28px;
         }
      }

      h3 {
         cursor: pointer;

         &:hover {
            color: var(--primary);
         }

         @media screen and (max-width: 425px) {
            font-size: 20px;
         }
      }
   }
`;

const Story = ({ date, image, title, owner }) => {
   return (
      <StoryStyle className="story">
         <div className="image">
            <img src={image} alt="" />
         </div>
         <div className="desc">
            <Typography element="paragraph2" changeMode={false}>
               By <span>{owner}</span> | {date}
            </Typography>
            <Typography element="h3" changeMode={false}>
               {title}
            </Typography>
         </div>
      </StoryStyle>
   );
};

export default Story;
