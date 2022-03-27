const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Recipe = new Schema(
    {
        username:{ type: String, required: true },
        name: { type: String, required: true },
        difficulty: { type: String, required: true },
        private: { type: Boolean, required: true},
        totalTime: { type: String, required: true },
        ingredients: [{ type: Object, required: true }],
        steps: [{ type: Object, required: true }],
        pictures: [{ type: Object, required: false }],
        comments: [{ type: Object, required: false }],
        chef: { type: String, required: true }, // id of creator
        date: { type: String, required: false }, // date created
    },
    { timestamps: true },
)

module.exports = mongoose.model('recipes', Recipe)