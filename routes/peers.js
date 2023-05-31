const express = require("express");
const router = express.Router();
const fs =  require('fs');

const filepath  = "./data/peers.json";

router.get("/peers", (req,res) =>{
    const data = fs.readFileSync(filepath)
    res.json(JSON.parse(data))
})

router.post("/peers",(req,res) =>{
    console.log(req.body)
}) 

module.exports = router;