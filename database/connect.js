const mongoose = require("mongoose");
mongoose.connect("mongodb://172.18.0.2:27017/persona");
//"mongodb://172.18.0.2/persona"
//la ip 172.18.0.2   es la ip del contenedor de mongodb
// la palabra "persona" es el nombre de la base de datos que estoy creando
module.exports = mongoose;
