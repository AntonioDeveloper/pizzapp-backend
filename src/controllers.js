const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const router = express.Router();
const Client = require('./client');
const Order = require('./order');

router.get('/', async(req, res) => {
  res.send({client: req.cli_id});
});

module.exports = app => app.use('./clients', router);