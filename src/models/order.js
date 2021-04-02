const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
pizza: {
  type: String,
  required: true
},
split: {
  type: String,
  default: "Não",
  required: true
},
dough: {
  type: String,
  required: true,
},
extraSauce: {
  type: String,
  required: true,
  default: "Não"
},
delivery_address: {
  type: String,
  required: false
},
message: {
  type: String,
  required: false,
},
icon: {
  type: String,
  required: true
},
status: {
  type: String,
  required: true,
  default: 'aberto'
},
// REFERS TO THE PARENT ENTITY
clientId: {
  type: mongoose.Schema.Types.ObjectId,
  ref:'Client'
}
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;