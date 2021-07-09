const express = require("express");
const { itemByQuery, itemDetail } = require("../utils");
 // servicios expuestos
const items = express.Router();

// filtra por query
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

// filtra por id especifico
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