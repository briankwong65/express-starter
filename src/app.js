import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

morgan.token(
  'remote-addr',
  (req) =>
    req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : null),
);

app.use(bodyParser.json());

// health check
app.get(['/alive'], (req, res) => {
  res.status(200).send('OK');
});

// routing
app.use('/', require('./routes/router'));

app.all('*', (req, res) => {
  res.status(404).send('Page Not Found');
});

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send('Internal Error');
});

app.listen(process.env.PORT || 3000);
