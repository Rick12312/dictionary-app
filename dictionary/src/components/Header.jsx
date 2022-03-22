import React, { useState } from "react";
import { getWord } from "../api/api";

function Header({ data, setData }) {
  const [search, setSearch] = useState("");

  console.log(data)

  return (
    <div className="header">
      <div className="header_container">
        <h1 className="header_title">Dictionary</h1>
        <p className="header_subtitle">Enter a word to see its definition</p>
        <form>
          <input
            placeholder="Search..."
            className="header_search_input"
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            className="header_search_button"
            onClick={(e) => {
              e.preventDefault();
              getWord(search).then((result) => {
                setData(result);
              });
            }}
          >
            Search
          </button>
        </form>
        <p className="header_result_label">
          {data && `Showing results for: ${search}`}          
        </p>
      </div>
    </div>
  );
}

export default Header;
