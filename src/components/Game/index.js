import React, {useState} from "react";
import placeHolderArt from "../../assets/images/Lostark_Placeholder_Art.jpg"
import placeHolderGraph from "../../assets/images/lostark_placeholder_graph.JPG"

// this will be the page for displaying a game once it is selected

const Game = () => {
    return (
        // main container for the Game page
        <section>
            {/* top section of the page */}
            <div>
                <h2>Lost Ark</h2>
                {/* game art container*/}
                <div>
                    <img src={placeHolderArt} alt="" />
                </div>
                {/* Rating section container */}
                <div>
                    <span>10/10 user score</span>
                    <span>7/10 critic score</span>
                </div>
                {/* Description box */}
                <div>
                    <p>
                    Lost Ark is a top-down 2.5D fantasy massively multiplayer online action role-playing game. It is co-developed by Tripod Studio and Smilegate's game development subsidiary Smilegate RPG. It was fully released in the South Korean region on December 4, 2019.
                    </p>
                </div>
                {/* Graph section */}
                <div>
                    <img src={placeHolderGraph}/>
                </div>
                {/* Review Section */}
                <div>
                    <p>Possibly add a comment section or just place reviews here, which ever works</p>
                </div>
            </div>

        </section>
    )
}

export default Game;