const express = require("express");
const { itemByQuery, itemDetail } = require("../utils");

const items = express.Router();

items.get("/", async function (req, res) {
  const { q } = req.query;
  try {
    const data = await itemByQuery(q);
    res.status(200);
    res.send(data);
  } catch (error) {
    res.status(500);
    res.send(error);    
  }
});

items.get("/:id", async function (req, res) {
  const id = req.params.id;
  try {
    const data = await itemDetail(id);
    res.status(200);
    res.send(data);    
  } catch (error) {
    res.status(500);
    res.send(error);    
  }
});


module.exports = items;