

const express = require('express');

const app = express();

const cors = require('cors');

const connectDB = require('./config/db');

connectDB();

app.use(cors())

app.use(express.json());

app.get('/',(req,res) => {
    res.json({message :'Api server is running'});
});

app.use('/api/books', require('./routes/bookRoutes'));


connectDB();

app.listen(5000,() => {
    console.log('Server is running on port 5000');
});
