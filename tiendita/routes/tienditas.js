const express = require('express')
const router = express.Router()
const Tiendita = require('../models/Tiendita')//modelo de la tiendita

//create tienditas
router.get('/new',(req,res)=>{
  res.render('tienditas/form')
})


router.post('/new',(req,res)=>{
  Tiendita.create(req.body)
  .then(tiendita=>{
      res.render('success',tiendita)//le pasamos el objeto tiendita a success para poder usar sus atributos en success.hbs
  }).catch(error=>{
    console.log(error)
    res.render('tienditas/form', {tiendita:req.body,error})
  })
})





//list tienditas
router.get('/',(req,res,next)=>{
  Tiendita.find()
  .then(tienditas=>{
    res.render('tienditas/list',{tienditas})
  }).catch(e=>{
      next(e)
  })
})


//tienditas detail
router.get('/detail/:id',(req, res, next)=>{
  const {id} = req.params
  Tiendita.findById(id)
  .then(tiendita=>{
    res.render('tienditas/detail',tiendita)
  }).catch(e=>next(e))
})

//Update tienditas

//Delete tienditas

module.exports = router