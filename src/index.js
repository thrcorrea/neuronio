require('dotenv').config();

const express = require('express');
const winston = require('winston');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('./auth/passport');

const port = process.env.PORT;

const app = express();

const UsersRoutes = require('./routes/users');
const LoginRoutes = require('./routes/login');
const StatementsRoutes = require('./routes/statments');

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());

app.get('/status', (req, res) => {
  res.send('ok');
});

app.use('/users', UsersRoutes);
app.use('/login', LoginRoutes);
app.use('/statements', StatementsRoutes);

app.listen(port, () => {
  winston.info(`Servidor ouvindo na porta ${port}`);
});
