const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
const port = 4000;

app.use("/", routes);

async function mongoConnect() {
  await mongoose.connect("mongodb://localhost:27017/zomatotomato");
}

mongoConnect()
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));
app.listen(port, async () => {
  await mongoConnect();
  console.log(`Zomata ka tomato foota at ${port}`);
});
