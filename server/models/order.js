var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
  customer: String,
  qty: Number,
  product: String,
  created_at: {type: Date, default: Date.now}
});

mongoose.model('Order', OrderSchema);