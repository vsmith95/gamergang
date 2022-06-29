import React, {useState} from "react";

import Game from "../Game";
import GameObject from "../GameObject";
import GameProp from "../GameProp";

// this is basically just a search result page for everything
const Categories = () => {

    const [game] = useState([
        {
            name: "gameName",
            genre: "genre",
            rating: "rating",
            cover: "coverImage",
            price: "price",
            storelink: "storeLink",
        },
    ]);

    return (
        <section id="categories">
            {/* Container form drop down box and active tags */}
            <div>
                {/* <select name="searchTags" id="searchTags">
                    <option value={test}>Option 1</option>
                    <option value={test2}>Option 2</option>
                </select> */}
                
                <div>
                    {/* this should show currently selected tags */}
                    active tags
                </div>
            </div>
            <div>
                {/* this is where the games show up after search */}
                {game.map((game) => (
                    <GameProp
                    game={game}
                    key={game.name}
                    />
                ))}
            </div>  
        </section>
    )

}

export default Categories;