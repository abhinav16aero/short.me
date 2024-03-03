const { default: mongoose } = require("mongoose");

const mongoose = require("mongoose");
const urlschema = new mongoose.Schema({
    shorturlId:{
        type: String,
        required: true,
        unique: true,
    },
    redirectedURL:{
        type: String, 
        required: true,
    },
    visit:[{ timestamp: {type: Number}}],
},
    {timestamps: true}
);

const URL = mongoose.model("URL", urlschema);
module.exports = URL;

