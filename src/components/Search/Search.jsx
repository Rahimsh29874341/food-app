import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {Card} from 'antd'

const Search = () => {
  const [data, setData] = useState({});
  const [matchData, setMatchData] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get(
        "https://api.airtable.com/v0/appjWdL7YgpxIxCKA/restaurants?maxRecords=100&view=Grid%20view",
        {
          headers: {
            Authorization: "Bearer keyfXgn8PL6pB3x32",
          },
        }
      );
      setData(res.data.records);
    };
    loadData();
  }, []);

  const searchData = (text) => {
    console.log(text.size,text.length,text) //here i am loggin the text and text have data
    setInput(text)
    console.log(setInput(text)) // here i am loggin the setInpute but getting undefined 
    const searchWord = new RegExp(`${text}`, "gi");
    let matches = data.filter((list) => {
      return list.fields.Name.match(searchWord);
    });
    if( text === ''){
      setMatchData([])
    }else{
      setMatchData(matches);
    }
  };

  const clearInput = ()=>{
     setMatchData([])
     setInput('')
  }

  return (
    <div className="w-2/5 flex flex-col">
      <div className="bg-slate-700 p-1 flex items-center rounded-r">
        <div className="w-full flex items-center bg-white">
        <input
          placeholder="Enter someting..."
          value={input}
          onChange={(e) => searchData(e.target.value)}
          className="p-2 w-full outline-none border-1 border-gray-300 placeholder:text-slate-700"
        />
         {matchData.length === 0 ? <i class="fa fa-magnifying-glass px-5 py-1.5 text-lg text-white"></i> : <i class="fa fa-x px-5 py-1.5 text-lg text-slate-600" onClick={clearInput()}></i>}
        </div>
        {/* for clear button */}
        <i class="fa fa-magnifying-glass px-5 py-1.5 text-lg text-gray-300"></i>
      </div>
      <div className="absolute top-16 w-100 rounded h-60 overflow-scroll">
      {matchData &&
          matchData.slice(0,10).map((items, index) => {
            return (
              <div key={index} className="flex items-center">
                <Card className="w-full bg-slate-100 p-2 border-b-2 border-slate-300 hover:bg-slate-300 hover:text-gray-700">
                {items.fields.Name}
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Search;