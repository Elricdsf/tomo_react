import React from "react";
//style
import styled from "styled-components";
import { motion } from "framer-motion";
//redux
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { loadDetail } from "../store/dishSlice";
import { Link } from "react-router-dom";
interface menuState {
  name: string;
  // price: string;
  ingredients: string;
  img: string;
  id: string;
}

function Menu({ id, name, ingredients, img }: menuState) {
  const dispatch: AppDispatch = useDispatch();
  const dispatchDetail = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  const stringId = id.toString();
  return (
    <StyledDish
      layout
      layoutId={stringId}
      onClick={dispatchDetail}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={`/menu/${id}`}>
        <StyledTitle>
          <motion.h3 layoutId={`title ${stringId}`}>{name}</motion.h3>
        </StyledTitle>
        <StyledImg>
          <motion.img src={img} alt={img} layoutId={`image ${stringId}`} />
        </StyledImg>
      </Link>
    </StyledDish>
  );
} 

const StyledDish = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 90%;
  min-height: 20vh;
  min-width: 200px;
  /* height: 28vh; */
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.4);
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
  @media (max-width: 900px) {
    min-height: 15vh;
    width: 80%;
  }
`;
const StyledTitle = styled(motion.div)`
  min-height: 110px;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem;
  text-align: center;
  h3 {
    font-size: clamp(0.5rem, 2.5vw, 1.2rem);
  }
  @media (max-width: 900px) {
    padding: 1rem;
    height: 45%;
    h3 {
      font-size: 3vw;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;
const StyledImg = styled(motion.div)`
  width: 100%;
  height: 15vh;
  overflow: hidden;
  img {
    width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
  @media (max-width: 900px) {
    height: 50%;
  }
`;

export default Menu;
