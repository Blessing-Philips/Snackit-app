const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const db = require('./Database/main');
const productRouter = require('./routes/productRoute');
const home = require('./routes/home')

//const env = require('dotenv').config({path: '../'})

var corsOption = {
    origin : "http://localhost:8080"
};

app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

//Connection to database
db.on('open', ()=>{
    console.log("Successfully connected to database!")
});
db.on('error', console.error.bind(console, 'Database connection error!'));

//Coonection to server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});

/*app.use('/', (req, res) => {
    res.send("Welcome to Snackit")
});*/

app.use('/api/', productRouter);