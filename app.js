const mongoose = require("mongoose");
const express = require("express");

const app = express();

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true
});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit."
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Tim",
  age: 99
});

//fruit.save();

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
