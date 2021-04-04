const express = require('express');
const router = express.Router();
const Status = require('../models/status');

//Gets all the status
router.get('/statuses', async (req, res) => {
  try{
    const allStatuses = await Status.find();
    res.send(allStatuses);
  } catch(err){
    res.send("Erro aqui");
  }
});

module.exports = router;
