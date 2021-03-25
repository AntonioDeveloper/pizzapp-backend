const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
  flavour: [{
    type: String,
    require: true
  }]
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;