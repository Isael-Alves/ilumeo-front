import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../styles/globalStyles.js";
import Login from "./login/Login.js";
import Home from "./Home/Home.js"

export default function App() {
  return (
    <>
    <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter> 
    </>
  );
}