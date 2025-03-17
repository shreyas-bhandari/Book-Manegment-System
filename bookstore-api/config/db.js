const mongoose = require('mongoose');

const connectDB = async  () => {
    try{
        const conn = await mongoose.connect('mongodb+srv://apinode:PsuMXzchKvNFVpKN@apinode.nprzi.mongodb.net/bookstore-api');

        console.log(`MongoDB Connected to ${conn.connection.host}`);
    } catch(error){
        console.log(error);
        process.exit(1);
    }

}; 

module.exports = connectDB;
