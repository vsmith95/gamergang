import { Modal } from "bootstrap";
import React from "react";
import placeHolderArt from "../../assets/images/Lostark_Placeholder_Art.jpg"

Modal = () => {
    const { name, art, price, rating } = currentGame;
    // this will be the call to create the container for each populated game, including cover art, name, rating and price
    <div>
        <div>
            <img src={placeHolderArt} alt="" />
        </div>
        <div>
            <h4>Lost Ark</h4>
        </div>
        <div>
            <p>Free</p>
            <p>7.4/10 Userscore</p>
        </div>
    </div>

    // Below is the "working" version of the modal, not placeholder
    // <div>
    //     <div>
    //         <img src={art} alt="" />
    //     </div>
    //     <div>
    //         <h4>{name}</h4>
    //     </div>
    //     <div>
    //         <p>{price}</p>
    //         <p>Rating: {rating}</p>
    //     </div>
    // </div>
}

export default Modal;