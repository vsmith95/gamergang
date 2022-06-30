import React, { useState } from "react";
import api from "../../api";
import Search from "../Search";

const Browse = () => {
  const Genres = [
    {
      id: 4,
      name: "Fighting",
    },
    {
      id: 5,
      name: "Shooter",
    },
    {
      id: 7,
      name: "Music",
    },
    {
      id: 8,
      name: "Platform",
    },
    {
      id: 9,
      name: "Puzzle",
    },
  ];

  const [searchResults, setSearchResults] = useState({
    4: [],
    5: [],
    7: [],
    8: [],
    9: [],
  });

  const clickHandler = function () {
    const { id: selectedGenre } = this;
    api.get("/games?genres=" + selectedGenre).then((response) => {
      //   console.debug({ [selectedGenre]: response.data });
      setSearchResults({ ...searchResults, [selectedGenre]: response.data });
      console.debug(searchResults);
    });
  };

  return (
    <section className="browse">
      <Search />
      <div>
        {Genres.map((genre, index) => {
          return (
            <div key={index}>
              <button onClick={clickHandler.bind(genre)}>{genre.name}</button>
              <div>
                {searchResults[genre.id].map((searchResult, i) => {
                  return (
                    <div key={i}>
                      - {searchResult.name} <br />
                      <img src={"https://" + searchResult.cover_photo.url} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Browse;
