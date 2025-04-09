import React, { useEffect } from "react";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchDishes } from "../store/dishSlice";
import Menu from "../components/Dish";
import styled from "styled-components";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useLocation } from "react-router-dom";
import DishDetail from "../components/DishDetail";
import { fadeIn } from "../animation";
import { Helmet } from "react-helmet";

const StyledMenuList = styled(motion.div)`
  padding: 8rem 1.5rem;
  width: 80%;
  margin: 0 auto;
  min-height: 800px;
  overflow-y: hidden;
  h2 {
    color: rgba(255, 153, 102, 0.8);
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    padding: 1rem 0rem 2rem 0rem;
  }
  @media (max-width: 767px) {
    width: 100%;
    padding: 8rem 1.5rem;
    position: relative;
    margin: 0 auto;
    h2{
      font-size: 2.3rem;
    }
  }
`;
const StyledDishes = styled(motion.div)`
  display: grid;
  min-height: 60%;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 2rem 1rem;
  @media (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
`;
const Wrapper = styled.div`
  background-color: rgb(254, 248, 238);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

type Dish = {
  id: string;
  price: string;
  name: string;
  ingredient: string;
  imgURL: string;
};

interface DishCategoryProps {
  title: string;
  items: Dish[];
}
const categories = [
  { key: "bowl", label: "Bowl" },
  { key: "soba", label: "Soba" },
  { key: "udon", label: "Udon" },
  { key: "handRoll", label: "Sushi Hand Roll" },
  { key: "dragonRoll", label: "Dragon Roll" },
  { key: "nigiri", label: "Nigiri & Inari" },
  { key: "box", label: "Box" },
  { key: "ss", label: "Sashimi and Salad" },
  { key: "sauce", label: "Sauce" },
] as const;

const DishCategory: React.FC<DishCategoryProps> = ({ title, items }) => (
  <>
    <h2>{title}</h2>
    <StyledDishes>
      {items.map((item) => (
        <Menu
          key={item.id}
          id={item.id}
          // price={item.price}
          name={item.name}
          ingredients={item.ingredient}
          img={item.imgURL}
        />
      ))}
    </StyledDishes>
  </>
);

function Home() {
  const dispatch: AppDispatch = useDispatch();
  const dishes = useSelector((state: RootState) => state.dishes);

  useEffect(() => {
    categories.forEach(({ key }) => dispatch(fetchDishes({ category: key })));
  }, [dispatch]);

  const dishId = useLocation().pathname.split("/")[2];

  return (
    <Wrapper>
      <Helmet>
        <title>Tomo | Menu</title>
      </Helmet>
      <StyledMenuList
        variants={fadeIn}
        initial="hidden"
        animate="zeroEightShow"
      >
        <LayoutGroup>
          <AnimatePresence>
            {dishId && <DishDetail dishId={dishId} />}
          </AnimatePresence>
          {categories.map(({ key, label }) => (
            <DishCategory key={key} title={label} items={dishes[key] || []} />
          ))}
        </LayoutGroup>
      </StyledMenuList>
    </Wrapper>
  );
}

export default Home;
