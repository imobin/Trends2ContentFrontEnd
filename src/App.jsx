import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import PostDetails from "./Pages/PostDetails";
import Nave from "./components/Nave";
import Footer from "./components/Footer";
import LoginPage from "./Pages/loginPage";
import { AppProvider, useAppContext } from "./context/AppContext";

function App() {
  const {recipes, setRecipes, getRecipes} = useAppContext()

  return (
    <div>
      <Nave />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/postDetails" element={<PostDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<p>No Information found!</p>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
