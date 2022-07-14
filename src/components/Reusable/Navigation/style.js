import styled from "styled-components";

const NavigationStyle = styled.div`
   .navigation_container {
      max-width: 1150px;
      margin: 0 auto;

      @media screen and (max-width: 1200px) {
         max-width: 950px;
      }
      @media screen and (max-width: 1024px) {
         max-width: 850px;
      }
      @media screen and (max-width: 900px) {
         max-width: 730px;
      }
      @media screen and (max-width: 800px) {
         max-width: 100%;
         padding: 0 27px;
      }
   }

   .navigation_box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 19px 0;

      &__logo {
         display: flex;
         align-items: center;
         text-decoration: none;

         #logo_svg {
            margin-right: 16px;
         }
      }

      &__navbar {
         display: flex;
         align-items: center;

         &___navItems {
            display: flex;
            list-style: none;

            &____nav {
               margin-right: 22px;

               a {
                  color: var(--text-dark--blue);
                  font-size: 16px;
                  line-height: 28px;
                  font-weight: 400;
                  text-decoration: none;
                  transition: var(--transition);
               }
            }

            #product,
            #customers,
            #pricing,
            #resources {
               a {
                  font-weight: 600;
               }
            }
         }

         &___buttons {
            display: flex;
            align-items: center;

            button {
               margin-right: 22px;
            }

            #mode_svg {
               cursor: pointer;
               width: 32px;
               height: 32px;
               border-radius: 50%;
               padding: 6px;
               background-color: #f3f3f3;
               transition: var(--transition);

               &:hover {
                  background-color: #f0f0f0;
               }
            }
         }
      }

      &__hamburger {
         &___icon {
            position: relative;
            width: 28px;
            height: 22px;
            cursor: pointer;
            display: block;
            transition: var(--transition);

            &____side {
               position: absolute;
               height: 3px;
               border-radius: 30px;
               width: 100%;
               background-color: #173a56;
               left: 0;
               transition: var(--transition);
            }

            &____side:nth-of-type(1) {
               top: 0;
            }
            &____side:nth-of-type(2) {
               top: 9.5px;
            }
            &____side:nth-of-type(3) {
               bottom: 0;
            }
         }

         .navigation_box__hamburger___icon____active {
            transform: rotateZ(90deg);

            .navigation_box__hamburger___icon____side:nth-of-type(1) {
               top: 9.5px;
               transform: rotateZ(45deg);
            }
            .navigation_box__hamburger___icon____side:nth-of-type(2) {
               opacity: 0;
            }
            .navigation_box__hamburger___icon____side:nth-of-type(3) {
               top: 9.5px;
               transform: rotateZ(-45deg);
            }
         }

         &___overlay {
            position: fixed;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.08);
            opacity: 0;
            top: 0;
            left: 0;
            pointer-events: none;
         }

         &___overlay____active {
            background-color: rgba(0, 0, 0, 0.08);
            opacity: 1;
            pointer-events: visible;
         }

         &___items {
            position: fixed;
            right: -35%;
            top: 0;
            height: 100%;
            width: 35%;
            background-color: white;
            border-left: 1px solid rgba(0, 0, 0, 0.1);
            list-style: none;
            transition: var(--transition);

            @media screen and (max-width: 900px) {
               width: 45%;
               right: -45%;
            }

            @media screen and (max-width: 700px) {
               width: 55%;
               right: -55%;
            }

            @media screen and (max-width: 500px) {
               width: 80%;
               right: -80%;
            }

            &____head {
               display: flex;
               justify-content: space-between;
               width: 100%;
               padding: 12px;
               margin-bottom: 16px;

               .material-symbols-rounded {
                  font-variation-settings: "FILL" 0, "wght" 600, "GRAD" 0,
                     "opsz" 48;
                  font-size: 30px;
                  color: var(--text-dark--blue);
                  cursor: pointer;
                  transition: var(--transition);
               }

               #mode_svg {
                  cursor: pointer;
                  width: 32px;
                  height: 32px;
                  border-radius: 50%;
                  padding: 6px;
                  background-color: #f3f3f3;
                  transition: var(--transition);

                  &:hover {
                     background-color: #f0f0f0;
                  }
               }
            }

            &____nav {
               a {
                  display: block;
                  padding: 12px 15px;
                  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
                  color: var(--text-dark--blue);
                  font-size: 16px;
                  line-height: 28px;
                  font-weight: 400;
                  text-decoration: none;
                  transition: var(--transition);

                  &:hover {
                     background-color: rgba(0, 0, 0, 0.01);
                  }
               }
            }

            #product,
            #customers,
            #pricing,
            #resources {
               a {
                  border-left: 3px solid #0289799a;
                  font-weight: 600;
                  background-color: rgba(0, 0, 0, 0.01);
               }
            }

            &____buttons {
               padding: 12px;
               margin-top: 12px;

               button:first-child {
                  margin-right: 12px;
               }
            }
         }

         &___items____active {
            right: 0;
         }
      }
   }
`;

export default NavigationStyle;
