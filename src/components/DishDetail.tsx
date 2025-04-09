import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store/store";
import styled from "styled-components";
import { motion } from "framer-motion";
interface dishdetail {
  dishId: string;
}

//turn off card
const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(115, 114, 114, 0.5);
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
  @media (max-width: 1100px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const State = styled(motion.div)`
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
  width: 40%;
  height: auto;
  max-height: 1000px;
  border-radius: 1rem;
  padding: 1rem;
  position: absolute;
  top: 30%;
  left: 30%;
  p {
    padding-top: 1rem;
    font-size: 1.1rem;
  }
  @media (max-width: 1200px) {
    border-radius: 1rem;
    padding: 1rem;
    top: 25%;
    display: flex;
    flex-direction: column;
    width: 90%;
    left: 5%;
    justify-content: center;
    align-items: center;
    max-height: 58vh;
    min-height: 500px;
    overflow: auto;
  }
`;
const StyledText = styled(motion.div)`
  width: 50%;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-size: clamp(0.8rem, 1.8vw, 1.8rem);
  }
  @media (max-width: 1500px) {
    width: 60%;
    left: 5%;
    p {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 1200px) {
    padding-top: 20vh;
    width: 90%;
    left: 5%;
    h3 {
      margin-bottom: auto;
      font-size: 4vw;
    }
    p {
      font-size: 3vw;
    }
    h4 {
      font-size: 2vw;
    }
  }
`;

const Description = styled(motion.p)`
  padding-right: 0.2rem;
  h4 {
    color: #a99191;
    font-style: italic;
    padding-top: 2rem;
    font-size: clamp(0.8rem, 0.4vw, 2rem);
  }
`;
const StyledImg = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  & img {
    object-fit: cover;
    border-radius: 1rem;
    width: 100%;
    height: 30vh;
    max-height: 550px;
    object-fit: cover;
  }
  @media (max-width: 1500px) {
    display: flex;
    /* flex-direction: column; */
    /* overflow-y: auto; */
    width: 90%;
    left: 5%;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 800px) {
    display: flex;
    /* flex-direction: column; */
    /* overflow-y: auto; */
    width: 90%;
    left: 5%;
    justify-content: center;
    align-items: center;
    img {
      padding-bottom: 2rem;
    }
  }
`;
function DishDetail({ dishId }: dishdetail) {
  const navigate = useNavigate();
  const exitDetailHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const element = e.target as HTMLElement;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/menu");
    }
  };
  // get state from dishdetail state
  const { dish, loading } = useSelector((state: RootState) => state.dishDetail);
  return (
    <div>
      {!loading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <State layout layoutId={dishId}>
            <StyledText>
              <motion.h3 layoutId={`title ${dishId}`}>{dish.name}</motion.h3>
              <p>Ingredients:</p>
              <p>{dish.ingredient}</p>
              <Description>
                <h4>{dish.description}</h4>
              </Description>
            </StyledText>
            <StyledImg>
              <motion.img
                src={dish.imgURL}
                alt="img"
                layoutId={`image ${dishId}`}
              />
            </StyledImg>
          </State>
        </CardShadow>
      )}
    </div>
  );
}

export default DishDetail;
