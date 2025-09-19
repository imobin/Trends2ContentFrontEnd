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
  const [rankedListAllTime, setrankListAllTime] = useState([])
  const [rankedListRising, setrankListRising] = useState([])
  const [selected, setSelected] = useState([])
  const [AIres, setAIres] = useState({title: "", content:[], category:""})
  const [auth, setauth] = useState(false)
  const [userID, setuserID] = useState()
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
  setauth(false)
 }

//  function AIContentGen(){
//   axios
//       .post(`http://localhost:3000/generatePost`)
//       .then((i) => {
//         console.log(i.data);
//         // setselectedPost(i.data);
//         // console.log(eventList);
//       })
//       .catch((i) => {
//         console.log("from catch",i);
//       });
//  }



  return (
    <AppContext.Provider
      value={{ allPost, selectedPost, setselectedPost, logout, isJWT, 
        rankedListAllTime, setrankListAllTime, rankedListRising, setrankListRising, 
        setSelected, selected, AIres, setAIres, auth, setauth, userID, setuserID }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
