const mongoose = require('mongoose');
const normalize = require('normalize-mongoose');


const DealModel = new mongoose.Schema({
  id: mongoose.ObjectId,
  descricao: {
    type: String,
    required: true
  },
  item: { 
    servico: { 
        type: String
    },
    valorUnidade: { 
        type: Number 
    },
    quantidade: {
        type: String
    }
  },
  valor: {
    type: Number,
    required: true
  },
  parcela: {
      type: Number,
      required: true
  },
  cliente: {
      nome: {
          type: String,
          required: true
      },
      email: {
          type: String,
          required: false
      }
  }, 
}, {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;

    return ret
  }
});

DealModel.plugin(normalize);

const Deal = mongoose.model('Deal', DealModel);
module.exports = Deal;