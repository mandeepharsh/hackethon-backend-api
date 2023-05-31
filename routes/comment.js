const express = require("express");
const router = express.Router();
const fs = require("fs");

let comments = [];

router.post("/message", (req, res) => {
  const data = req.body;
  console.log(req.body);
  comments.push(data);
  res.send("your comment is stored");
});

router.get("/message", (req, res) => {
  res.json(comments);
});

console.log(comments);
module.exports = router;
