const express = require('express');
const app = express();
const mongoose = require('mongoose');  
require('dotenv').config();   
const cors = require('cors');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

//ROUTES
const postsRoute = require('./routes/posts');
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use('/posts', postsRoute)


//Connect to MongoDB
mongoose.connect(process.env.ATLAS_URI,{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  () => console.log("DB online!!"));




app.listen(3001, function(){
  console.log("Tudo ok!");  
});



