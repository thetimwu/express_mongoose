const mongoose = require("mongoose");
// const express = require("express");

// const app = express();

//process.env.MONGO_URI
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
//   .then(() => {
//     console.log("DB Connected!");
//   })
//   .catch(err => {
//     console.log("DB Connection Error: " + err.message);
//   });

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must have a name"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favorit: fruitSchema
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//   name: "Apple1",
//   rating: 7,
//   review: "Pretty solid as a fruit."
// });

const applePie = new Fruit({
  name: "ApplePie",
  rating: 10,
  review: "This is man-made fruit"
});

applePie.save();

// const mongo = new Fruit({
//   name: "Mongo",
//   rating: 8,
//   review: "This is Mongo"
// });

// const peach = new Fruit({
//   name: "peach",
//   rating: 8.5,
//   review: "This is peach"
// });

// const pear = new Fruit({
//   name: "pear",
//   rating: 9,
//   review: "This is pear"
// });

// Fruit.insertMany([mongo, peach, pear], err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all fruit.");
//   }
// });

const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//   name: "Tim",
//   age: 99
// });

const person = new Person({
  name: "Sophie",
  age: 4,
  favorit: applePie
});

person.save();

Fruit.find((err, fruit) => {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();

    fruit.forEach(f => {
      console.log(f.name);
    });
  }
});

// Fruit.updateOne({ _id: "5e1df3664e97851fc4bd59b8" }, { name: "Pear" }, err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated the document");
//   }
// });

// Fruit.deleteOne({ _id: "5e1df26fe5f8a2300c708959" }, err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted a fruit");
//   }
// });

// Person.deleteMany({ name: "Tim" }, err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted some people");
//   }
// });

//

// app.listen(5000, () => {
//   console.log("Server is listening on port 5000");
// });
