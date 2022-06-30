const { Schema, model } = require("mongoose")

const WishListSchema = new Schema({
    GameTitle: {
        type: String
    },
    CoverArt: {
        type: Image
    },
    Rating: {
        type: String,
        default: "0/10"
    }
})


module.exports = WishlistItem;