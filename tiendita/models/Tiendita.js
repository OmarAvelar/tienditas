const mongoose = require('mongoose')
const Schema = mongoose.Schema
const tienditaSchema = new Schema({
  name:{
    type:String,
    required:true,
    unique:true
  },
  giro:{
    type:String,
    required:true
  },
  owner:{
    type:String,
    required:true
  },
  product:[
    {
      type:Schema.Types.ObjectId,
      ref:'Producto'
    }
]
},{
  timestamps:{
    updatedAt:'updated_at',
    createdAt:'created_at'
  }
})

module.exports = mongoose.model('Tiendita',tienditaSchema)