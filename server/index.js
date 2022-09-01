const express = require('express');
const next = require('next');
const dotenv = require('dotenv');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const colors = require('colors');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // Connect to database
  connectDB();
  const server = express();
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  // routes
  server.use('/api/users', require('./routes/userRoutes'));
  server.use('/api/cvs', require('./routes/cvRoutes'));
  server.get('*', (req, res) => {
    return handle(req, res);
  });
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on ${PORT}`);
  });
});
