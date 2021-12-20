const express = require('express');
const router = express.Router();
const Detail = require('../models/detail')

router.get('/',async(req,res) =>{
   try{
       const details = await Detail.find()
       res.json(details)
   }
   catch(err){
       res.send('Error' + err)
   }
})
router.get('/:id',async(req,res) =>{
    try{
        const detail = await Detail.findById(req.params.id)
        res.json(detail)
    }
    catch(err){
        res.send('Error' + err)
    }
 })
router.post('/',async(req,res) =>{
    const detail = new Detail({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try{
      const a1 = await detail.save()
      res.json(a1);
    }catch(err){
        res.send('Error')
    }
})
router.patch('/:id',async(req,res)=>{
    try{
        const detail = await Detail.findById(req.params.id)
        detail.sub = req.body.sub
        const a1 = await detail.save()
        res.json(a1)
    }
    catch(err){
        res.send('Error')
    }
})

router.delete('/:id', async(req, res) =>{
    try{
        const detail = await Detail.findById(req.params.id);
        const a1 = await detail.remove();
        res.send("Deleted " + a1.name);
    }catch(err){
        res.send("Error " + err);
    }
});

module.exports = router