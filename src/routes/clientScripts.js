const express = require('express');
const router = express.Router();
const Client = require('../models/client');
const Order = require('../models/order');



//Gets all the clients
router.get('/clients', async (req, res) => {
  try{
    const allClients = await Client.find();
    res.send(allClients);
  } catch(err){
    res.send("Erro aqui");
  }
  res.send('Belezinha!!');
});

// Submit new clients
router.post('/', async (req, res) => {
  const client = new Client(req.body);
  
  try{
    const savedClient = await client.save()
    res.json(savedClient);
    } catch(err){
    res.json({message: err});
    };
}); 



//Get a specific client
router.get('/:id', async (req, res) => {
  try{
    const client = await Client.findById(req.params.id);
    res.json(client);
    
  } catch (err){
    res.json({message: err});
  }
})

//Delete a client
router.delete('/:id', async (req, res) => {
  try{
    const removedClient = await Client.remove({_id: req.params.id});
    res.json(removedClient);
  } catch (err) {
    res.json({message: err});
  }
});

//Update client
router.patch('/:id', async(req, res) => {
  try{
    const updatedClient = await Client.updateOne({_id: req.params.id}, 
    {$set: {
      name: req.body.name,
      tel: req.body.tel,
      address: req.body.address}});
    res.json(updatedClient);
  } catch(err){
    res.json({message: err});
  }
})



module.exports = router;
