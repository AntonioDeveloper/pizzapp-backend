const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const Client = require('../models/client');
//const Pizza = require('../models/pizza');

//Gets all the orders
router.get('/orders', async (req, res) => {
  try{
    const allOrders = await Order.find();
    res.send(allOrders);
    //console.log(allOrders)
  } catch(err){
    res.send("Erro aqui");
  }  
});

// Submit new orders
router.post('/cadastrarped', async (req, res) => {  
  const order = new Order(req.body);  
  const clientId = req.body.clientId;
  try{
    const savedOrder = await order.save();   
    console.log(savedOrder)
    
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
router.put('/update/:id', async(req, res) => {    
   
  try{
    const updatedOrder = await Order.findOneAndUpdate({_id: req.params.id},
      {$set: {
        pizza: " ",
        split: req.body.item.split,
        dough: req.body.item.dough,
        extraSauce: req.body.item.extraSauce,
        delivery_address: req.body.item.delivery_address,
        message: req.body.item.message,
        status: req.body.item.status,
        icon: req.body.item.icon,
        _id: req.body.item._id
      }}, {new: true});
     console.log(updatedOrder)
      res.json(updatedOrder);       
  } catch(err){
    res.json({message: err});
  }
})

module.exports = router;