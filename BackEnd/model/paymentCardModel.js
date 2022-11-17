import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    balance: {
        type: Number,
        required: true
    },
    isUsed: {
        type: Boolean,
        required: true,
        default: false
    }
})

const Card = mongoose.model('Card', cardSchema);

export default Card;