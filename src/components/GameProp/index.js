import React from "react";

const GameProp = (props) => {
    const { game } = props;

      return (
        <div>
            <div>
                <img src={game.cover} alt={game.name} />
            </div>
            <div>
                <h4>
                    <a href={game.store}>{game.name}</a>
                </h4>
            </div>
            <div>
                <p>{game.price}</p>
                <p>Rating: {game.rating}</p>
            </div>
        </div>
        )
}

export default GameProp;