const express = require('express');
const { vezJogar, consultar, remover, adicionar } = require('./controladores/rodadas');

const rotas = express();

rotas.get("/", vezJogar);
rotas.get("/consultar", consultar);
rotas.get("/remover", remover);
rotas.get("/adicionar", adicionar);

module.exports = rotas;