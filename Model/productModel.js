const mongoose = require("mongoose");
const moment = require('moment')
const productSchema = new mongoose.Schema({
    title:{type:String,required:true,trim:true,unique:true},
    quantity:{type:Number,required:true,default:1},
    priority:{type:Number,required:true},
    description:{type:String,required:true},
    createdAt: {
        type: String,
        default:
          moment().format("YYYY/MM/DD") + "/" + moment().format("hh/mm/ss"),
      },
      updatedAt: {
        type: String,
        default:
          moment().format("YYYY/MM/DD") + "/" + moment().format("hh/mm/ss"),
      },
},{timestamps:true});

const Product = mongoose.model('product',productSchema);

module.exports = Product;