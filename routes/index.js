var express = require('express');
//RELACIONANDO A LA COLECCION DE LA BASE DE DATOS:
const USER = require('../database/user');
var router = express.Router();
/// lireria sha1/////////////////////////////////7
var sha1 = require('sha1');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    msn: "bienvenido a la nueva api"
  })
});
///creacion de servicios
// servicio crear ESTUDIANTE
router.post('/user', (req, res) => {
  var params = req.body;
  params["password"]= sha1 (params.password);
  params["registerDate"] = new Date();
  var user = new USER(params);
  user.save().then(() => {
    res.status(200).json({
      msn: "estudiante creado con exito"
    })
  });
});
//servicio leer estudiante "read"
router.get("/user",(req, res) => {
  /*USER.find({}, (err, docs) => {
    res.status(200).json(docs);
  })*/
  var params = req.query;
  var limit =50;
  if(params.limit != null){
    limit = parseInt(params.limit);
  }
  USER.find({}).limit(limit).exec((err, docs)=>{
    res.status(200).json(docs);
  });
});

//servicio patch actualiza solo cierta info
///put actualiza todo el objeto
router.patch("/user", (req, res) =>{
  if(req.query.id == null){
    res.status(300).json({
      msn: "NO EXISTE EL ID"
    });
    return;
  }
  var id = req.query.id;
  var params = req.body;
  params["updateDate"] = new Date();
  USER.findOneAndUpdate({_id: id}, params, (err, docs)=>{
    res.status(200).json(docs);
  });
});

/// servicio PUT
router.put("/user", (req, res) =>{
  if(req.query.id == null){
    res.status(300).json({
      msn: "NO EXISTE EL ID"
    });
    return;
  }
  var id = req.query.id;
  var params = req.body;
  params["updateDate"] = new Date();
  USER.findOneAndUpdate({_id: id}, params, (err, docs)=>{
    res.status(200).json(docs);
  });
});


// servicio para eliminar delete
router.delete("/user", async(req, res) =>{
  if(req.query.id == null){
    res.status(300).json({
      msn: "el id no existe"
    });
    return;
  }
  var r = await USER.remove({_id: req.query.id});
  res.status(300).json(r);
});

module.exports = router;
