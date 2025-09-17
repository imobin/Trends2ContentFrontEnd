import axios, { all } from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [allPost, setallPost] = useState([]);
  const [selectedPost, setselectedPost] = useState({
    id: "",
    title: "",
    content: "",
    UserId: "",
    cover: "",
    CategoryId: "",
  });
  // const [token, settoken] = useState();
  useEffect(() => {
    const getAllPost = async () => {
      try {
        const thePosts = await axios.get("http://localhost:3000/home/");
        // setallPost(allPost)
        setallPost(thePosts.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllPost();
  }, []);

 function isJWT(token) {
  if (typeof token !== "string") return false
  const parts = token.split(".")
  return parts.length === 3
}


 function logout(){
  localStorage.removeItem("token")
 }

  return (
    <AppContext.Provider
      value={{ allPost, selectedPost, setselectedPost, logout, isJWT}}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
