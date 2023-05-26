import React from "react";
import data from "../assets/data.json";
import '../style/main.css'
export const Main = () => {
  return (
    <main>
      <h1>Find your Solutions according to your problem</h1>
      <div className="card-wrapper">
        {data.map((item, index) => {
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
