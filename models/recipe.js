const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// var ingredientSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     portion: {
//         type: Number,
//         required: true
//     },
//     carbCal: {
//         type: Number,
//         required: true
//     },
//     protCal: {
//         type: Number,
//         required: true
//     },
//     fatCal: {
//         type: Number,
//         required: true
//     }
// });

// var recipeSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     image:{
//         type: String,
//         // required: true  
//     },
//     dietStyle: {
//         type: String,
//         enum: ['flexible', 'paleo', 'keto'],
//         required: true
//     },
//     ingredients: ingredientSchema


// });


var recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type: String,
        // required: true  
    },
    dietStyle: {
        type: String,
        enum: ['flexible', 'paleo', 'keto'],
        required: true
    }
});

module.exports = mongoose.model('Recipe', recipeSchema);
