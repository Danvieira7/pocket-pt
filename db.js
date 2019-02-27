require('dotenv').config()
require('./config/database')
const U = require('./models/user')
U.findOne({}).then(function(u) {
    console.log(u)
})
