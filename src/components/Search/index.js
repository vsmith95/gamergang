import React, {useState} from "react";
import axios from "axios";

// this is basically just a search result page for everything
const api = axios.create({
    baseURL: "http://localhost:3002",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
    },
  });

const Search = () => {

    const [name, setName] = useState("");
    const [searchResults, setSearchResults] = useState([]);
  
    const Categories = [
      { name: "Shooter" },
      { name: "Puzzles" },
      { name: "Platformers" },
      { name: "Adventure" },
      { name: "RPG" },
    ];
  
    function submitHandler() {
      api.get("/games?search=" + name).then((response) => {
        console.debug(response.data);
        setSearchResults(response.data);
      });
    }
  
    const handleInput = (event) => {
      setName(event.target.value);
    };

    return (
        <section id="categories">
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
                        <img src={"https://" + d.cover_photo.url} alt={d.name} />
                    </div>
                    );
                })}
                </div>
            </div>

            <div className="flex-container">
                {Categories.map((category) => {
                return (
                    <div className="category-container" title={category.name}>
                    <a href="">{category.name}</a>
                    <div className="category-items"> - items </div>
                    </div>
                );
                })}
            
            </div>
        </section>
    )

}

export default Search;