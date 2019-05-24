const mongoose = require('mongoose')

async function connect() {
    await mongoose.connect('mongodb://app-user:psw#123@ds261486.mlab.com:61486/user-data', {
        useNewUrlParser: true
    }).then(
        () => { console.log('Database is connected')},
        err => { console.log('Can not connect to the database: ' + err)}
    )   
}

module.exports = { connect }