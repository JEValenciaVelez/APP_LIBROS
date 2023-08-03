const mongoose = require("mongoose");
const {Schema} = mongoose;

const BookShema = new Schema({
    title : {
        type: String,
        required: true
    },

    image : {
        type: String,
        match: [
            /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
            'Please Enter a valid URL',
        ],
    },

    author: {
        type: String,
        required: true
    },

    genres : {
        type: [String],
        required: true
    }, 

    date: {
        type: String
    }

});

module.exports = mongoose.model("Books", BookShema);