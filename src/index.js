require('dotenv').config();

const express = require('express');
const winston = require('winston');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT;

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/status', (req, res) => {
  res.send('ok');
});

app.listen(port, () => {
  winston.info(`Servidor ouvindo na porta ${port}`);
});
