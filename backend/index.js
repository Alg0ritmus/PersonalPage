const express = require('express');
const app = express();
const Routerik = require('./router');


const PORT = process.env.PORT || 5000;
//load static files scss,imgs...
app.use(express.json());
app.use(express.static('./frontend/static')); 
app.use(express.static('./frontend')); 
//use router
app.use(Routerik);
app.listen(PORT,()=>console.log("Server is up and running on port",PORT,"..."));