const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Loads .env file contents into process.env by default.

const app = express();

const db = require('./Database/main');
const productRouter = require('./routes/productRoute');
const homeRouter = require('./routes/home');
const customerRouter = require('./routes/customerRoute');
const paymentRouter = require('./routes/paymentRoute');


var corsOption = {
    origin : "*",
    //credentials : true,
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

//Connection to database
db.on('open', ()=>{
    console.log("Successfully connected to database!")
});
db.on('error', console.error.bind(console, 'Database connection error!'));

//Connection to server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});

app.use('/', homeRouter);

app.use('/api/', productRouter);

app.use('/api/', customerRouter);

app.use('/api/', paymentRouter);

//PAYMENT GATEWAY INTEGRATION

/*const https = require('https')

const params = JSON.stringify({
  "email": "customer@email.com",
  "amount": "20000"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transaction/initialize',
  method: 'POST',
  headers: {
    Authorization: 'Bearer SECRET_KEY',
    'Content-Type': 'application/json'
  }
}

const req = https.request(options, res => {
  let data = ''

  res.on('data', (chunk) => {
    data += chunk
  });

  res.on('end', () => {
    console.log(JSON.parse(data))
  })
}).on('error', error => {
  console.error(error)
})

req.write(params)
req.end()*/