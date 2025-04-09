import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { getFeedbackUrl } from "../api";
import Map from "../components/Map";
import axios from "axios";
import { fadeIn } from "../animation";
import { contactImages } from "../imgUrl";
import { Helmet } from "react-helmet";

const StyledContact = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 9rem 2rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  background-image: url(${contactImages.food1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
  p {
    color: white;
    font-size: 1.5rem;
  }
`;

const StyledForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-color: #8b5e3b;
    box-shadow: 0 0 5px rgba(196, 179, 164, 0.3);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 12px;
  margin: 8px 0;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
  resize: none;

  &:focus {
    outline: none;
    border-color: #8b5e3b;
    box-shadow: 0 0 5px rgba(139, 94, 59, 0.3);
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #8b5e3b, #6b4226);
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #6b4226, #8b5e3b);
  }
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(getFeedbackUrl, formData);
      alert("Thank you for your feedback!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Submission too frequent, please try again later");
    }
  };

  return (
    <>
      <Helmet>
        <title>Tomo | Contact</title>
      </Helmet>
      <StyledContact variants={fadeIn} initial="hidden" animate="zeroEightShow">
        <h2>Contact us</h2>
        <p>Address: Shop 2/34 Marcus Clarke St, Canberra ACT 2601</p>
        <h2>Feedback Form</h2>
        <StyledForm onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </SubmitButton>
        </StyledForm>
      </StyledContact>
      <Map />
    </>
  );
}

export default Contact;
