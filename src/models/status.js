const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({ 
  icon: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  // REFERS TO THE PARENT ENTITY
   order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }, 
});

const Status = mongoose.model('Status', statusSchema, 'statuses');

module.exports = Status;