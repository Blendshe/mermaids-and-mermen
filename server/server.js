const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = 8080;
const app = express();
app.use(cors());
const mongoose = require("mongoose");
const bp = require("body-parser");
app.use(bp.json());

mongoose.connect(process.env.DATABASE_URL);

const Swim = require("./models/swim");

app.get("/", function (request, response) {
  response.json("You are looking at my root route, how roude!.");
});

app.get("/swims", async function (request, response) {
  const swims = await Swim.find(request.query);
  console.log("first");
  response.json(swims);
});

app.post("/swims", async function (request, response) {
  console.log(request.body);
  const newSwim = await Swim.create(request.body);
  response.json(newSwim);
});

app.delete("/swims/:id", async function (request, response) {
  const deletedSwim = await Swim.findByIdAndDelete(request.params.id);
  response.json(deletedSwim);
});

app.listen(PORT, function () {
  console.log("App is listening on PORT " + PORT);
});
