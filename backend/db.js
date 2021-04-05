//import mongoose from 'mongoose'
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/mernstack" , {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
  
        console.log(`Database Connected: ${conn.connection.host}`.blue.bold.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}
module.exports = connectDB