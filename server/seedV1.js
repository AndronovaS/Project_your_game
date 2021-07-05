const mongoose = require('mongoose');
const dbConnect = require('./src/db/dbConect');
const Category = require('./src/models/categoryModel');
const Question = require('./src/models/questionModel');


const categoryColectionArr = [

  {
    title: 'Мозгокачка',
  },

  {
    title: 'Язык и слово',
  },

  {
    title: 'Факты реальные и не очень',
  },

];

const questionArr = [

  {
    title: 'Что или кто такое "Полудница"?',
    points: 100,
    correctAnswer: 'дух, наказывающий тех, кто работает в полдень',
    category: mongoose.Types.ObjectId('60cc61e5bb1de95aea6c36c9'),
  },

  {
    title: 'Если из всех букв "дочавукин" составить слово, название какого растения получится?',
    points: 100,
    correctAnswer: 'одуванчик',
    category: mongoose.Types.ObjectId('60cc61e5bb1de95aea6c36c9'),
  },

  {
    title: 'Что делают с помидорами в завершении в завершении праздника Томатина в Испании?',
    points: 100,
    correctAnswer: 'кидаются',
    category: mongoose.Types.ObjectId('60cc61e5bb1de95aea6c36c9'),
  },

  {
    title: 'Из какого языка к нам пришло слово "забияка"?',
    points: 200,
    correctAnswer: 'польский',
    category: mongoose.Types.ObjectId('60cc61e5bb1de95aea6c36ca'),
  },

  {
    title: 'Из какого языка к нам пришло слово "гусар"?',
    points: 200,
    correctAnswer: 'венгерский',
    category: mongoose.Types.ObjectId('60cc61e5bb1de95aea6c36ca'),
  },

  {
    title: 'Из какого языка к нам пришло слово "тротуар"?',
    points: 200,
    correctAnswer: 'французский',
    category: mongoose.Types.ObjectId('60cc61e5bb1de95aea6c36ca'),
  },

  {
    title: 'Национальным животным какой страны является единорог"?',
    points: 300,
    correctAnswer: 'Шотландии',
    category: mongoose.Types.ObjectId('60cc61e5bb1de95aea6c36cb'),
  },

  {
    title: 'Какому знаку зодиака запрещено водить машину в Индонезии"?',
    points: 300,
    correctAnswer: 'всем разрешено',
    category: mongoose.Types.ObjectId('60cc61e5bb1de95aea6c36cb'),
  },

  {
    title: 'Какое место занял Чарли Чаплин на конкурсе двойников Чарли Чаплина"?',
    points: 300,
    correctAnswer: 'третье',
    category: mongoose.Types.ObjectId('60cc61e5bb1de95aea6c36cb'),
  },

]

async function dataBaseCategorySeeder(arrForSeed) {
  dbConnect();
  await Category.insertMany(arrForSeed);
  await mongoose.disconnect();
}

async function dataBaseQuestionsSeeder(arrForSeed) {
  dbConnect();
  await Question.insertMany(arrForSeed);
  await mongoose.disconnect();
}


dataBaseCategorySeeder(categoryColectionArr);
dataBaseQuestionsSeeder(questionArr)

async function testPopul(questionId) {
  dbConnect();
  const cur = await Question.findById(questionId).populate('category');
  mongoose.disconnect();
  console.log(cur);
}

testPopul('60cc6bac7344315f59252a59')

