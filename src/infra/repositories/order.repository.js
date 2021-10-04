const mongoose = require('mongoose');
const Order = require('../models/orders.models');

exports.listOrders = async () => {
  const res = await Order.find({});
  return res;
};

exports.createOrder = async data => {
    const savedOrder = new Order(data);
    return await savedOrder.save();
};

exports.deleteOrders = async() => {
    await Order.deleteMany();
    return;
  }