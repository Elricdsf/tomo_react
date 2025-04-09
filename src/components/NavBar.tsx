import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../animation";
import { navImage } from "../imgUrl";

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 1rem 2rem;
  background: #222121;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100vw;
  position: fixed;
  z-index: 100;
  overflow: hidden;
  @media(max-width:1100px){
    height:130px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 5rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  font-family: "Abril Fatface", cursive;
  font-weight: lighter;
`;

const StyledNavLink = styled(Link)<{ isOtherHovered: boolean }>`
  text-decoration: none;
  color: #ffa46f;
  transition: opacity 0.4s ease-in-out;
  opacity: ${(props) => (props.isOtherHovered ? 0.5 : 1)};
`;

const StyledLogo = styled.div`
  cursor: pointer;
  img {
    height: 6rem;
    width: 10rem;
  }
  @media(max-width:900px){
    display: none;
  }
`;

function NavBar() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <Nav variants={fadeIn} initial="hidden" animate="show">
      <StyledLogo onClick={() => navigate("/home")}>
        <img src={navImage.logo} alt="logo" />
      </StyledLogo>
      <NavLinks>
        {["home", "menu", "contact"].map((item) => (
          <StyledNavLink
            key={item}
            to={`/${item}`}
            onMouseEnter={() => setHovered(item)}
            onMouseLeave={() => setHovered(null)}
            isOtherHovered={hovered !== null && hovered !== item}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </StyledNavLink>
        ))}
      </NavLinks>
    </Nav>
  );
}

export default NavBar;
