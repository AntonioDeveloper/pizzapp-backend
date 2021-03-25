const mongoose = require('mongoose');
const Order = require('./order');

const clientSchema = new mongoose.Schema({ 

  name: {
    type: String,
    required: true
  },
  tel: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
   orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }], 
});

/* clientSchema.virtual('order', {
  ref: 'Order',
  localField: '_id',
  foreignField:'clientId'
}); */

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;