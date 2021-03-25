const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const Client = require('../models/client');
//const Pizza = require('../models/pizza');

//Gets all the orders
router.get('/', async (req, res) => {
  try{
    const allOrders = await Order.find();
    res.send(allOrders);
  } catch(err){
    res.send("Erro aqui");
  }
  res.send('Belezinha!!');
});

// Submit new orders
router.post('/new', async (req, res) => {  
  const order = new Order(req.body);  
  const clientId = req.body.id;
  
  try{
    const savedOrder = await order.save()   
        
    const client = await Client.findById(clientId);
    
    client.orders.push(savedOrder);
    await client.save();    
    res.json(savedOrder);

    } catch(err){
    res.json({message: err});
    };
}); 

//Get a specific order
router.get('/:id', async (req, res) => {
  try{
    const order = await Order.findById(req.params.id);
    res.json(order);
  } catch (err){
    res.json({message: err});
  }
})

//Delete an order
router.delete('/:id', async (req, res) => {
  try{
    const removedOrder = await Order.remove({_id: req.params.id});
    res.json(removedOrder);
  } catch (err) {
    res.json({message: err});
  }
});

//Update order
router.patch('/:id', async(req, res) => {
  try{
    const updatedOrder = await Order.updateOne({_id: req.params.id}, 
    {$set: {
      pizza: req.body.pizza,
      split: req.body.split,
      dough: req.body.dough,
      extraSauce: req.body.extraSauce,
      delivery_address: req.body.delivery_address,
      message: req.body.message,
      status: req.body.status
    }});
    res.json(updatedOrder);
  } catch(err){
    res.json({message: err});
  }
})



module.exports = router;