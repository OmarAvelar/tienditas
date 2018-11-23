const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productoSchema = new Schema({
  name:String,
  code:{
    type:String,
    unique:true
  },
  photoURL:String,
  price:Number,
  marca:String,
  storeID:{
    type:Schema.Types.ObjectId,
    ref:'Tiendita'
  }
},{
  timestamps:{
    updatedAt:'updated_at',
    createdAt:'created_at'
  }
})