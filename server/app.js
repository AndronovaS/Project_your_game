const morgan=require('morgan')
const express = require('express');
const dbConnect = require('./src/db/dbConect');
const cors = require('cors');
const Category=require('./src/models/categoryModel')
const Question=require('./src/models/questionModel')

const PORT = 8080;

const app = express();

dbConnect();
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get("/api/v1/game", async (req, res) => {
  const category = await Category.find().populate("questions");
  res.json(category);
});

app.post("/api/v1/game", async (req, res) => {
  const question = await Question.findByIdAndUpdate(req.body.id, {answered: true}, {new: true})
  console.log(question)
  res.json({question})
})

app.get("/api/v1/game/:id", async (req, res) => {
  const question = await Question.findById().populate("questions");
  console.log(topics);
  res.json(topics);
});



app.listen(PORT, () => {
  console.log('server started on port', PORT);
});
