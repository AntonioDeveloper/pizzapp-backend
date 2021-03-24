const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
assignedTo: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Client',
  require: true,
},
items: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Flavours',
  required: true,
},
delivery_address: {
  type: String,
  require: false
},
message: {
  type: String,
  require: false,
},
status: {
  type: String,
  require: true,
  default: 'open'
}
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;