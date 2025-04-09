import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <FooterSection>
          <h3>Find Us</h3>
          <p>Address:Shop 2/34 Marcus Clarke St, Canberra ACT 2601</p>
        </FooterSection>
        <FooterSection>
          <h3>Contact Us</h3>
          <p>Email: tomocanberra@gmail.com </p>
          <a
            href="https://www.facebook.com/profile.php?id=61572660361584"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size="2em" color="#1877F2" />
          </a>
          <a
            href="https://www.instagram.com/tomotomocanberra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size="2em" color="#E1306C" />
          </a>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <p>&copy; 2025 Tomo. All rights reserved.</p>
      </FooterBottom>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
justify-content: center;
align-items: center;
  width: 100%;
  max-height: 450px;
  height:auto;
  background-color: #222121;
  color: #fff;
  padding: 2rem 0;
  font-family: Arial, sans-serif;
  @media (max-width: 768px) {
    padding:2rem;
    flex-direction: column;
    align-items: center;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  margin: 0 1rem;
  a {
    padding: 0.5rem;
  }
  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  p {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #444;
`;

export default Footer;
