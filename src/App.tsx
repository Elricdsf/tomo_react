import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import GlobalStyles from "./styles/GlobalStyles";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:id" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
