/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* -------------------------------------------------------------------------- */
/*                               Product Schema                               */
/* -------------------------------------------------------------------------- */
const giftSchema = new Schema({
   
  noun: {
    type: String,
   
  },
  address: {
    type: String,
    
  },
  city: {
    type: String,
    
  },
  donation: {
    type: String,
    
  },
  quantity: {
    type: String,
    
  },
  expirationDate: {
    type: Date,
    
  },
});

// export Product Schema
module.exports = mongoose.model('Gift', giftSchema);
