require('dotenv').config({ debug: process.env.DEBUG });
const express = require('express');
const cors = require('cors');

const routes = require("./routes");

const app = express();

app.use(
  cors({
    origin: process.env.FRONT_URL,
  })
);
app.use(express.static('static'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.redirect("/api");
});
app.use("/api/", routes);

app.use(function (req, res, next) {
  res.status(404);
  res.send({ error: "404 - Page no found" });
});

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000`)
);
