const express = require('express');
const router = express.Router();
const fs = require('fs');

const filepath = "./data/questions.json";

router.get('/question',(_req,res) =>{
 const data = fs.readFileSync(filepath)
 res.json(JSON.parse(data))
})

module.exports = router;