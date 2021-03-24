const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({ 
  name: {
    type: String,
    require: true
  },
  tel: {
    type: Number,
    require: true
  },
  address: {
    type: String,
    require: true
  }
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;