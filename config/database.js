var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

mongoose.connection.on('conected', function(){
    console.log(`mongose conected to: ${process.env.DATABASE_URL}`);
});

module.exports = mongoose;