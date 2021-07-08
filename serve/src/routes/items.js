const express = require("express");
const { itemByQuery } = require("../utils");

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
  const data = { id: "wppppp", name: "rrr", parameter: id };

  res.status(200);
  res.send(data);
});


module.exports = items;