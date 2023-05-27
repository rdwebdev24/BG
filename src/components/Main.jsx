import React, { useEffect, useState } from "react";
import data from "../assets/data.json";
import '../style/main.css'
export const Main = () => {
  const [value,setValue] = useState('');
  let [filterdata, setfilterdata] = useState(data);
  const handleChange = (e) => {
    setValue(e.target.value)
    console.log(value);
    console.log(data);
    const filterd = data.filter((item,index)=>item.type.toLowerCase().includes(e.target.value.toLowerCase()))
    setfilterdata(filterd)
  }
  return (
    <main className="section2">
      <div className="search">
        <input typeof="text" value={value} onChange={handleChange} type="text" />
        <button>Search</button>
      </div>
      <div className="card-wrapper">
        {filterdata.map((item, index) => {
          const { type, slokas } = item;
          return (
            <div key={index} className="card-body">
              <h2>{type}</h2>
              <ul className="card-list">
                {slokas.map((item2, index2) => {
                  const { slokaNo, chapter } = item2;
                  const url = `https://www.holy-bhagavad-gita.org/chapter/${chapter}/verse/${slokaNo}`;
                  return (
                    <li key={index2} className="card-list-items">
                      <a href={url} target="_blank">
                        Chapter {chapter} / Sloka {slokaNo}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </main>
  );
};
