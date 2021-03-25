const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
pizza: {
  type: String,
  required: true
},
split: {
  type: Boolean,
  default: false,
  required: true
},
dough: {
  type: String,
  required: true,
},
extraSauce: {
  type: Boolean,
  required: true,
  default: false
},
delivery_address: {
  type: String,
  required: false
},
message: {
  type: String,
  required: false,
},
status: {
  type: String,
  required: true,
  default: 'open'
},
// REFERS TO THE PARENT ENTITY
client: {
  type: mongoose.Schema.Types.ObjectId,
  ref:'Client'
}
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;