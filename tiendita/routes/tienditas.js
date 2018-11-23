const express = require('express')
const router = express.Router()
const Tiendita = require('../models/Tiendita')//modelo de la tiendita

//create tienditas
router.get('/new',(req,res)=>{
  const action = '/tienditas/new'
  res.render('tienditas/form',{action})
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
router.get('/update/:id',(req,res,next)=>{
  const {id} = req.params
  const action = `/tienditas/update/${id}`

  Tiendita.findById(id)
    .then(tiendita=>{
      res.render('tienditas/form', {tiendita})
    }).catch(e=>next(e))
})

router.post('/update/:id',(req,res,next)=>{
    const {id} = req.params
    Tiendita.findByIdAndUpdate(id,{$set:req.body},{new:true})//nos trae lo que trae en la ruta
      .then(tiendita=>{
        res.redirect(`/tienditas/detail/${id}`)
      }).catch(e=>{
        res.render('tienditas/form',)
      })
  })


//Delete tienditas

module.exports = router