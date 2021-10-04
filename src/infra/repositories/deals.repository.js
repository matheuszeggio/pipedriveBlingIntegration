const mongoose = require('mongoose');
const Deals = require('../models/deals.model');

exports.listDeals = async () => {
  const res = await Deals.find({});
  return res;
};

exports.createDeal = async data => {
    const savedDeal = Deals(data);
    return await savedDeal.save();
};

exports.deleteDeals = async() => {
  await Deals.deleteMany();
  return;
}