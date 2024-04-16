const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const db = require('./Database/main');
const productRouter = require('./routes/productRoute');
const homeRouter = require('./routes/home')
const customerRouter = require('./routes/customerRoute');

//const env = require('dotenv').config({path: '../'})

var corsOption = {
    origin : "http://localhost:5173"
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

app.use('/', homeRouter);

app.use('/api/', productRouter);

app.use('/sign-in/', customerRouter);