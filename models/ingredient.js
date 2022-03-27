const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Ingredient = new Schema(
    {
        name:{ type: String, required: true },
        description: { type: String, required: true },
        picture: { type: String, required: false }
    },
    { timestamps: true },
)

module.exports = mongoose.model('ingredients', Ingredient)