const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

const dbString = '<INSIRA A LINHA DO BANCO AQUI>';

mongoose.connect(dbString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(cors()); // Libera o acesso externo para todo tipo de aplicação
app.use(express.json());
app.use(routes);

app.listen(3333);