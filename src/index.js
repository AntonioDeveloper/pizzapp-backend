const express = require('express');
const app = express();
const mongoose = require('mongoose');  
require('dotenv').config();   
const cors = require('cors');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors(
  'http://localhost:3000'
));

//ROUTES
const clientRoute = require('./routes/clientScripts');
const orderRoute = require('./routes/orderScripts');
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use('/client', clientRoute);
app.use('/order', orderRoute);


//Connect to MongoDB
mongoose.connect(process.env.ATLAS_URI,{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  () => console.log("DB online!!"));




app.listen(3001, function(){
  console.log("Tudo ok!");  
});



