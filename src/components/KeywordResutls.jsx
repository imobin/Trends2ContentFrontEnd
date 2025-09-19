import React from "react";
import { useAppContext } from "../context/AppContext";

export default function KeywordResutls({query, index, value}) {
  const {setSelected, selected} = useAppContext()
  // console.log("from app",Selected);
  // console.log("Clicked:", query)
  return (
    <div>
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="list-row">
          <div className="text-4xl font-thin opacity-30 tabular-nums">{index + 1}</div>
          <div className="list-col-grow">
            <div>{query}</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Value: {value}
            </div>
          </div>
          <button type="button" className="btn" onClick={() => setSelected(prev => [...prev, query])}>
           {selected.includes(query) ? "selected":"select"}
          </button>
        </li>
      </ul>
    </div>
  );
}
