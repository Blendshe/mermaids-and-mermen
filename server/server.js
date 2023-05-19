const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
app.use(cors());

app.get("/", (request, response) => {
  response.json("You are looking at the root route of my server. How roude.");
});

app.get("/person", (request, response) => {
  response.json({ name: "Tim", age: 300, height: "very tall" });
});

app.listen(PORT, function () {
  console.log("App is listening on PORT " + PORT);
});
