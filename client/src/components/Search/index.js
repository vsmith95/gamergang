import React, { useState } from "react";
import api from "../../api";
import Game from "../Game";

const Search = () => {
  const [name, setName] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const submitHandler = () => {
    api.get("/games?search=" + name).then((response) => {
      console.debug(response.data);
      setSearchResults(response.data);
    });
  };

  const handleInput = (event) => {
    setName(event.target.value);
  };

  return (
    <section>
      <div className="search-container">
        <input
          type="text"
          className="search-box"
          name="search"
          onChange={handleInput}
          placeholder="Search here..."
        />
        <button onClick={submitHandler}>Submit</button>

        <div className="search-results">
          {searchResults.map(function (d, idx) {
            return (
              <div className="search-result" key={idx}>
                - {d.name} ( {Number(d.rating || 0).toFixed(2)}) <br />
                <img src={"https://" + d.cover_photo.url} />
              </div>
            );
          })}
        </div>
      </div>
      {/* 
      <div className="flex-container">
        {Categories.map((category) => {
          return (
            <div className="category-container" title={category.name}>
              <a href="#">{category.name}</a>
              <div className="category-items"> - items </div>
            </div>
          );
        })}
      </div> */}
    </section>
  );
};

export default Search;
