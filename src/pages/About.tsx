import styled from "styled-components";
import { fadeIn, useScrollAnimation } from "../animation";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
// img
import { aboutImages } from "../imgUrl";
//components
import Gallery from "../components/Gallery";
import Map from "../components/Map";

import { useEffect } from "react";
import { Helmet } from "react-helmet";

const StyledAbout = styled(motion.div)`
  padding: 8rem 0rem 0rem 0rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const StyledDisplayPicContainer = styled.div`
  position: absolute;
  background-image: url(${aboutImages.display});
  background-repeat: no-repeat;
  background-size: 90%;
  background-position: center;
  width: 80%;
  max-width: 2200px;
  min-width: 800px;
  height: clamp(170px, 20vw, 600px);
  overflow: visible;
  position: relative;
  background-attachment: fixed;
  @media (max-width: 1100px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-attachment: local;
  }
`;
const StyledTitle = styled(motion.div)`
  h2 {
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 1);
    font-size: clamp(1rem, 5vw, 4rem);
    text-align: left;
  }
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 15%;
  margin-top: 5%;
  padding-bottom: 10rem;
  @media (max-width: 1800px) {
    left: 20%;
    top: 25%;
    margin: 0 auto;
    max-width: 80%;
    flex-direction: row;
    h2 {
      font-size: 2.5rem;
      padding: 0.4rem;
    }
  }
  @media (max-width: 1800px) {
    top: 40%;
    left: 0;
    margin: 0 auto;
    max-width: 50%;
    flex-direction: row;
    h2 {
      padding: 0.4rem;
    }
  }
`;
interface StyledColoredPProps {
  $bgColor?: string;
  $fontColor?: string;
  $isActive?: boolean;
  $transparentRate?: string;
  $transparentDirection?: string;
}
const StyledDescription = styled.div<StyledColoredPProps>`
  display: flex;
  justify-content: space-between;
  gap: clamp(1rem, 1vw, 3rem);
  width: 80%;
  height: auto;
  background-color: ${(props) => props.$bgColor};
  background: ${(props) =>
    props.$isActive
      ? `linear-gradient(to ${props.$transparentDirection}, ${props.$bgColor} ${props.$transparentRate}%, transparent ${props.$transparentRate}%)`
      : ""};
  max-width: 2200px;
  min-width: 300px;
  flex-wrap: wrap;
  text-align: center;
  padding: 4rem 0rem;
  @media (max-width: 1800px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 8vw;
    background-color: ${(props) => props.$bgColor};
    margin: 0;
    padding: 0;
  }
`;
interface StyledDescriptionTextProps {
  $textwidth?: string;
  $h3fontcolor?: string;
  $pfontcolor?: string;
}
const StyledDescriptionText = styled.div<StyledDescriptionTextProps>`
  width: ${(props) => props.$textwidth || "100%"};
  padding: 0rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  h3 {
    font-size: clamp(1vw, 2.7rem, 4rem);
    color: ${(props) => props.$h3fontcolor || "black"};
  }
  p {
    font-size: 1.3rem;
    padding: 1rem 0rem 5rem 0rem;
    line-height: 2;
    color: ${(props) => props.$pfontcolor || "black"};
  }
  @media (max-width: 1800px) {
    width: 100%;
    padding: 0.5rem;
    h3 {
      font-size: 1.8rem;
    }
    p {
      padding: 1rem;
    }
  }
`;

const TomoBackground = styled(motion.h1)`
  font-size: 7rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.08);
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  text-align: center;
  z-index: -1;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const StyledCraft = styled.img`
  z-index: 1;
  width: 21%;
  height: auto;
  border-radius: 5px;
  object-fit: cover;
  min-width: 420px;
  flex-shrink: 1;
  @media (max-width: 1800px) {
    margin: 0 auto;
    /* width: 100%; */
  }
`;
const StyledCombinedImg = styled(motion.div)`
  display: flex;
  width: 47%;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  height: auto;
  position: relative;
  img {
    width: 50%;
    height: auto;
    object-fit: cover;
    position: relative;
    max-width: 500px;
    max-height: 350px;
  }
  img:first-child {
    border-radius: 5px;
    top: 70px;
    right: 30px;
  }
  img:last-child {
    border-radius: 5px;
    top: -10px;
    right: 0px;
  }
  @media (max-width: 1800px) {
    flex-direction: column;
    width: 100%;
    img {
      width {
        width: 80%;
        max-width: none;
      }
    }
    img:first-child {
      border-radius: 5px;
      top: 0px;
      right: 0px;
    }
    img:last-child {
      border-radius: 5px;
      top: 0px;
      right: 0px;
      margin-bottom: 1rem;
    }
  }
`;
const StyledSushiDescription = styled.div`
  background-image: url(${aboutImages.food2});
  background-size: cover;
  background-position: center;
  height: auto;
  display: flex;
  justify-content: space-between;
  gap: clamp(1rem, 1vw, 3rem);
  width: 80%;
  max-width: 2200px;
  flex-wrap: wrap;
  text-align: center;
  padding: 3rem;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
  @media (max-width: 1800px) {
    width: 100%;
  }
`;
const StyledSushiImg = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  height: auto;
  min-height: 800px;
  img {
    width: 90%;
    height: auto;
    object-fit: cover;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;
const StyledSushiText = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  h3 {
    font-size: 2.7rem;
    color: white;
  }
  p {
    color: white;
  }
  button {
    margin: 5rem;
    color: white;
    font-size: 1.7rem;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    padding: 1rem;
    border-color: white;
    transition: all 0.3s ease;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-color: #ffa46f;
      color: #ffa46f;
    }
    &:active {
      transform: scale(0.95);
    }
  }
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
const StyledFront = styled.div`
  display: flex;
  width: 80%;
  max-width: 2200px;
  min-width: 300px;
  max-height: 800px;
  position: relative;
  align-items: center;
  justify-content: space-between;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffa46f;
    z-index: -1;
    clip-path: polygon(0 0, 85% 0, 85% 50%, 0 50%);
  }

  img {
    position: relative;
    top: 50px;
    left: -10%;
    height: auto;
    max-height: 800px;
    margin: 3rem 0rem 0rem 6rem;
    width: 75%;
    object-fit: contain;
  }

  @media (max-width: 2000px) {
    width: 80%;
    padding: 2rem;
    gap: 2rem;
    &::before {
      clip-path: polygon(0 0, 100% 0, 100% 30%, 0 30%);
      background: #ffa46f;
    }

    img {
      width: 45%;
      max-height: 450px;
      margin: 0 auto;
      left: 0;
      top: 0;
    }
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    &::before {
      clip-path: polygon(0 0, 100% 0, 100% 30%, 0 30%);
      background: #ffa46f;
    }
    img {
      width: 100%;
      max-height: 450px;
      margin: 0 auto;
      left: 0;
      top: 0;
    }
  }
`;

const StyledOpeningHour = styled.div`
  left: -8%;
  position: relative;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 20%;
  height: auto;
  max-height: 400px;
  background-color: rgb(119, 62, 62);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);

  h2 {
    padding-bottom: 1rem;
    font-size: 2rem;
  }
  h3 {
    font-size: 1.4rem;
  }

  @media (max-width: 2000px) {
    width: 45%;
    max-width: 400px;
    padding: 2rem;
    max-height: unset;

    h2 {
      font-size: 1.8rem;
    }
    h3 {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 1300px) {
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 80%;
    max-width: 700px;
    padding: 2rem;
    margin: 0 auto;
    left: 0;
    h2 {
      font-size: 1.8rem;
    }
    h3 {
      font-size: 1.2rem;
    }
  }
`;

const StyledMap = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

function About() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // picContainer animation
  const { ref: scrollRef, smoothBgY } = useScrollAnimation();
  return (
    <>
      <Helmet>
        <title>Tomo | About</title>
      </Helmet>
      <StyledAbout
        variants={fadeIn}
        initial="hidden"
        animate="zeroEightShow"
        exit={{ opacity: 0 }}
      >
        <StyledDisplayPicContainer
          ref={scrollRef}
          style={{ backgroundPositionY: `${smoothBgY.get()}px` }}
        >
          <StyledTitle
            variants={fadeIn}
            initial="hidden"
            animate="oneAndHalfShow"
          >
            <h2>Best</h2>
            <h2>Quality</h2>
            <h2>Foods</h2>
          </StyledTitle>
        </StyledDisplayPicContainer>
        <StyledDescription>
          <StyledDescriptionText $textwidth="70%" $h3fontcolor="#FFA46F">
            <TomoBackground
              variants={fadeIn}
              initial="hidden"
              animate="leftToRight"
            >
              Tomo
            </TomoBackground>
            <h3>Welcome to Tomo,</h3>
            <h3>where freshness meets craftsmanship.</h3>
            <p>
              We take pride in using the finest ingredients to create authentic
              Japanese flavors. Our sushi is handcrafted by skilled chefs,
              ensuring perfect balance and texture in every bite. From classic
              nigiri to creative rolls, each piece is a work of art. We also
              offer fresh salads made with crisp seasonal vegetables, paired
              with Japanese fried chicken, tempura, and more for a delicious
              twist. At Tomo, freshness is our promise, and quality is our
              craft.Join us for an unforgettable taste of Japan!
            </p>

            <Gallery />
          </StyledDescriptionText>
          <StyledCraft src={aboutImages.craft} alt="craft" />
        </StyledDescription>
        <StyledDescription
          $bgColor="#FFA46F"
          $isActive={true}
          $transparentRate="85"
          $transparentDirection="right"
        >
          <StyledDescriptionText
            $h3fontcolor="white"
            $textwidth="50%"
            $pfontcolor="white"
          >
            <div>
              <h3>Craft your own</h3>
              <p>
                At Tomo, we offer a unique and customizable Japanese salad
                experience. Our salad is divided into two delicious bases: a
                rice and vegetable salad or a soba and vegetable salad. Both
                options can be paired with a variety of authentic Japanese
                dishes. With endless combinations to choose from, our salad
                allows customers to create their perfect meal, satisfying every
                taste and preference. Whether you're looking for something light
                or rich in flavor, Tomo has something for everyone.
              </p>
            </div>
          </StyledDescriptionText>
          <StyledCombinedImg>
            <img src={aboutImages.bowl} alt="bowl" />
            <img src={aboutImages.soba} alt="soba" />
          </StyledCombinedImg>
        </StyledDescription>
        <StyledSushiDescription>
          <StyledSushiImg>
            <img src={aboutImages.service} alt="service" />
          </StyledSushiImg>
          <StyledSushiText>
            <h3>Pick and GO!</h3>
            <div>
              <p>
                If you don't have time to sit down and enjoy our lunch salads,
              </p>
              <p>we also offer a variety of sushi options.</p>{" "}
              <p>
                we also offer a variety of sushi options. Fast, efficient, and
                ready to go – just grab and go!
              </p>
              <p>Perfect for those on the move.</p>
            </div>
            <button onClick={() => navigate("/menu")}>Explore more</button>
          </StyledSushiText>
        </StyledSushiDescription>
        <StyledFront>
          <img src={aboutImages.front} />
          <StyledOpeningHour>
            <h2>Opening hour</h2>
            <h3>Monday to Friday</h3>
            <h3>lunch time 10:30-3:00 </h3>
            <h3>dinner time 5:00-8:00</h3>
            <h3>Saturday Sunday Close</h3>
          </StyledOpeningHour>
        </StyledFront>
        <StyledMap>
          <Map />
        </StyledMap>
      </StyledAbout>
    </>
  );
}

export default About;
