// ========== Require ==============
// Require= importa datos, libraries and tools
const express = require('express');
// we need create a instance to use it any moment
// We can create a new object according the last const(Object)
const app = express();

//Middlewares (Capa intermedia) Se ejecuta antes
app.use(express.json())
app.use(express.urlencoded({extended: false}))
var cors = require('cors');
app.use(cors());

//Importar las rutas
const RutaClientes = require('./routes/rclientes');
const RutaProyectos = require('./routes/rproyectos');
//const RutaProductoras = require('./routes/rproductora');
//const RutaTipos = require('./routes/rtipo');
//const RutaMedias = require('./routes/rmedia');
// todo: Middlewares fotos


// todo: Middlewares cors
app.use('/api/clientes', RutaClientes);
app.use('/api/proyectos', RutaProyectos);
//app.use('/api/productoras', RutaProductoras);
//app.use('/api/tipos', RutaTipos);
//app.use('/api/medias', RutaMedias);

app.all('*', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });

//The next method is GET or endpoint to query DB
app.get('/', (req,res) => {
return res.json({});
});
//We need export to use it in external enviroment
module.exports=app;