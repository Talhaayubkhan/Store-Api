const mongoose = require('mongoose');



const productSchema = new mongoose.Schema({
     name:{
          type: String,
          required: [true, "Product Name Must Be Required"],  
     },
     price:{
          type: Number,
          required: [true, "Product Price Must Be Required"],

     },
     featured: {
          type: Boolean,
          default: false
     },
     rating: {
          type: Number,
          default: 4.5
     },
     company: {
          type: String,
          enum: {
              values: ['ikea', 'liddy', 'caressa', 'marcos'],
              message: "{VALUE} is not Supported"
          }
     }
}, {timestamp: true});


module.exports = mongoose.model('Product', productSchema);