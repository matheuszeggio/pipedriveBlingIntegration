const mongoose = require('mongoose');
const normalize = require('normalize-mongoose');

const OrderModel = new mongoose.Schema({
  id: mongoose.ObjectId,
  descricao: {
    type: String,
    required: true
  },
  dia: {
    type: Date,
    required: true
  },
  valor: {
    type: Number,
    required: true
  },
});

OrderModel.plugin(normalize);

const Order = mongoose.model('Order', OrderModel);
module.exports = Order;