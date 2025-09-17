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
import { useEffect } from "react";
import axios from "axios";
import UserDashBoard from "./Pages/UserDashBoard";

function App() {
  const { allPost } = useAppContext();
  console.log(allPost);

  return (
    <div>
      <Nave />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/postDetails/:id" element={<PostDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/userdashboard" element={<UserDashBoard />} />
        <Route path="*" element={<p>No Information found!</p>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
