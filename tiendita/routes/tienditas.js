const express = require('express')
const router = express.Router()
const Tiendita = require('../models/Tiendita')//modelo de la tiendita

//create tienditas
router.get('/new',(req,res)=>{
  res.render('tienditas/form')
})

//list tienditas

//tienditas detail

//Update tienditas

//Delete tienditas

module.exports = router