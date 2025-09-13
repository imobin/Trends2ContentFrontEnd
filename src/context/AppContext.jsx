import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AppContext = createContext()

export const AppProvider = ({ children }) => {

    const [recipes, setRecipes] = useState([])
    function getRecipes(){
        fetch("https://dummyjson.com/recipes")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setRecipes(() => data.recipes);
          });
    }

    return (
        <AppContext.Provider value={{ recipes, setRecipes, getRecipes }}>
            {children}
        </AppContext.Provider>

    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}