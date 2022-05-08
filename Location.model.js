const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const LocationSchema = new Schema({
    Wise: { type: String, required: true },
    Building: { type: String, required: true },
    Name: { type: String, required: true },
    Type: { type: String, required: true },
    Capacity: { type: String, required: true },


}, {
    timestamps: true,
});



const Location = mongoose.model('Location', LocationSchema);

module.exports = Location;