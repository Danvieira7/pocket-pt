require('dotenv').config()
require('./config/database')
const U = require('./models/user')
const R = require('./models/recipe')
// U.findOne({}).then(function(u) {
//     console.log(u)
// })
R.find({}).then(function(r) {
    console.log(r)
})

// R.findOneAndDelete({}).then(function(r) {
//     console.log(r)
// })


