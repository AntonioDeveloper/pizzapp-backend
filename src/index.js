const express = require('express');
const app = express();
const mongoose = require('mongoose');  
require('dotenv').config();   
const cors = require('cors');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors(
  'https://nossa-pizza-frontend.herokuapp.com/'
));

//ROUTES
const clientRoute = require('./routes/clientScripts');
const orderRoute = require('./routes/orderScripts');
const statusRoute = require('./routes/statusScripts');
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use('/client', clientRoute);
app.use('/order', orderRoute);
app.use('/status', statusRoute);


//Connect to MongoDB
mongoose.connect(process.env.ATLAS_URI,{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false },
  () => console.log("DB online!!"));




app.listen(process.env.PORT || 3001, function(){
  console.log("Tudo ok!");  
});



