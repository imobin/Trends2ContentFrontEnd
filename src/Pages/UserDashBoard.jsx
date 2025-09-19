import axios from "axios";
import React from "react";
import { useAppContext } from "../context/AppContext";
import KeywordResutls from "../components/KeywordResutls";

export default function UserDashBoard() {
  const { rankedListAllTime, setrankListAllTime } = useAppContext();
  const { rankedListRising, setrankListRising, setSelected, selected, AIres, setAIres } = useAppContext();
  function TrendSearch(e) {
    e.preventDefault();
    const keyword = {
      keyword: e.target.keyword.value,
    };
    console.log(keyword);
    axios.post("http://localhost:3000/trend3", keyword).then((i) => {
      if (i) {
        console.log(i.data.default.rankedList);
        // const theData = JSON.parse(i.data.default.rankedList[0])
        setrankListAllTime(i.data.default.rankedList[0].rankedKeyword);
        setrankListRising(i.data.default.rankedList[1].rankedKeyword);
      } else {
        alert("Nothing found check your query!");
      }
    });
  }
  //  console.log("form here AllTime", rankedListAllTime[0])
  // console.log("form here Rising", rankedListRising)
console.log("from dash",selected);
 function AIContentGen(){
  axios
      .post('http://localhost:3000/generatePost', {keyword : selected})
      .then((i) => {
        const parsed = JSON.parse(i.data)
        console.log(parsed);
        setAIres(parsed)
        // setselectedPost(i.data);
        // console.log(eventList);
      })
      .catch((i) => {
        console.log("from catch",i);
      });
 }

  return (
    <div>
      <form action="sumbit" onSubmit={TrendSearch}>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-start">
            {/* Page content here */}
            <div className="flex w-full flex-col">
  <div className="card bg-base-100 rounded-box grid h-120 place-items-center">
    <div className="flex w-full">
              <div className="card bg-base-300 rounded-box grid h-100 grow place-items-center overflow-y-auto">
                <p className="sticky top-0 bg-base-300 z-10 p-2">Google Trends of All the Time</p>
                {Array.isArray(rankedListAllTime) && rankedListAllTime.map((i, k) => <KeywordResutls index={k} 
                                                                                                     query={i.query}
                                                                                                     value={i.value} />) }
              </div>
              <div className="divider divider-horizontal">VS</div>
              <div className="card bg-base-300 rounded-box grid h-100 grow place-items-center overflow-y-auto">
                <p className="sticky top-0 bg-base-300 z-10 p-2">Google Trends Rising</p>
                {Array.isArray(rankedListRising) && rankedListRising.map((i, k) => <KeywordResutls index={k} 
                                                                                                     query={i.query}
                                                                                                     value={i.value} />) }
              </div>
            </div>
  </div>
  <div className="divider"></div>
  <div className="card bg-base-300 rounded-box grid h-120 place-items-start">
    <h1 contentEditable
    suppressContentEditableWarning={true}
    onBlur={(e) => console.log("New title:", e.target.innerText)}>{AIres.title}</h1>
    <p contentEditable
    suppressContentEditableWarning={true}
    onBlur={(e) => console.log("New title:", e.target.innerText)}>{AIres.content.map(p => p).join("")}</p>
  </div>
</div>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <li>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                  <legend className="fieldset-legend">Google Trends</legend>
                  <div className="join">
                    <input
                      type="text"
                      className="input join-item"
                      placeholder="Search Google Trends"
                      name="keyword"
                    />
                    <button className="btn join-item">Search</button>
                  </div>
                </fieldset>
              </li>
              <li>
                <button onClick={AIContentGen}> Use AI to Create Conent with selelct queries</button>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
  
}
