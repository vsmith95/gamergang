import React, {useState} from "react";
import Categories from "../Search";
import GameProp from "../GameProp";

// this will be the page for displaying a game once it is selected

const Game = () => {

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
        // main container for the Game page
        <section>
            {/* {game.map((game))} */}
                
            {/* top section of the page */}
            <div class="gameInfo">
                <h2 class="gameTitle">{game.name}</h2>
                {/* game art container*/}
                <div class="gameArt">
                    <img src={game.cover} alt={game.name} />
                </div>
                {/* Rating section container */}
                <div class="rating">
                    <span class="userScore">{game.rating}</span>
                    <span class="criticScore">{game.price}</span>
                </div>
                {/* Description box */}
                {/* <div class="review">
                    <p>
                    Lost Ark is a top-down 2.5D fantasy massively multiplayer online action role-playing game. It is co-developed by Tripod Studio and Smilegate's game development subsidiary Smilegate RPG. It was fully released in the South Korean region on December 4, 2019.
                    </p>
                </div> */}
                {/* Graph section */}
                {/* <div class="">
                    <img src={placeHolderGraph}/>
                </div> */}
                {/* Review Section */}
                {/* <div>
                    <p class="comment">Possibly add a comment section or just place reviews here, which ever works</p>
                </div> */}
            </div>
        </section>

    )
}

export default Game;