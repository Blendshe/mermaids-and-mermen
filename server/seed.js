const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const Swim = require("./models/swim");

async function seed() {
  await Swim.create({ where: "Lake District, England", name: "Derwent Water" });
  await Swim.create({ where: "Cornwall, England", name: "Bude Sea Pool" });
  await Swim.create({ where: "West Kirby, England", name: "Irish Sea" });
  await Swim.create({
    where: "Liverpool, England",
    name: "Albert Dock, River Mersey",
  });
  await Swim.create({ where: "North Wales, Bala", name: "Llyn Tegid" });
  await Swim.create({ where: "North coast of Scotland", name: "Loch Eriboll" });

  console.log("Swims created");

  mongoose.disconnect();
}

seed();
