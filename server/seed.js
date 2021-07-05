const dbConnect = require('./src/db/dbConect');
const Category = require('./src/models/categoryModel');
const  Question= require('./src/models/questionModel');
const {disconnect} = require('mongoose');
async function start() {
  try {
    dbConnect()

    const irlandCategory = new Category({
      name: 'Мозгокачка',
    })

    const movieCategory = new Category({
      name: 'Язык и слово',
    })

    const soccerCategory = new Category({
      name:'Факты реальные и не очень',
    })

    const movieOne = new Question({
      title: 'Что или кто такое "Полудница"?',
      answer: 'дух, наказывающий тех, кто работает в полдень',
      points: '100',
      answered: false,
    })


    const movieTwo = new Question({
      title: 'Если из всех букв "дочавукин" составить слово, название какого растения получится?',
      answer:'одуванчик' ,
      points: '200',
      answered: false,
    })


    const movieThree = new Question({
      title: 'Что делают с помидорами в завершении в завершении праздника Томатина в Испании?',
      answer:'кидаются',
      points: '300',
      answered: false,
    })


    const movieFour = new Question({
      title: 'Какой фильм является самым кассовым в истории?',
      answer: 'Аватар',
      points: '400',
      answered: false,
    })


    const movieFive = new Question({
      title: 'насколько было сложно делать эту штуку?',
      answer: 'очень сложно',
      points: '500',
      answered: false,
    })

    const irlandOne = new Question({
      title:'Из какого языка к нам пришло слово "забияка"?',
      answer: 'польский',
      points: '100',
      answered: false,
    })

    const irlandTwo = new Question({
      title: 'Из какого языка к нам пришло слово "гусар"?',
      answer: 'венгерский',
      points: '200',
      answered: false,
    })

    const irlandThree = new Question({
      title: 'ЭТОТ ирландский город дал название стихотворной форме.',
      answer: 'Лимерик',
      points: '300',
      answered: false,
    })

    const irlandFour = new Question({
      title: 'Скажите по-ирландски "мы сами".',
      answer: 'Шин фейн',
      points: '400',
      answered: false,
    })

    const irlandFive = new Question({
      title: 'Из какого языка к нам пришло слово "тротуар"?',
      answer: 'французский',
      points: '500',
      answered: false,
    })

    const soccerOne = new Question({
      title: 'В какой стране появился и начал развиваться футбол?',
      answer: 'Англия',
      points: '100',
      answered: false,
    })

    const soccerTwo = new Question({
      title: 'Какому знаку зодиака запрещено водить машину в Индонезии"?',
      answer: 'всем разрешено',
      points: '200',
      answered: false,
    })

    const soccerThree = new Question({
      title: 'Как правильно расшифровывается аббревиатура УЕФА?',
      answer: 'Союз европейских футбольных ассоциаций',
      points: '300',
      answered: false,
    })

    const soccerFour = new Question({
      title: 'Кто является атвором самого сильного удара в футболе, согласно данным на начало 2020 года?',
      answer: 'Халк',
      points: '400',
      answered: false,
    })

    const soccerFive = new Question({
      title:'Какое место занял Чарли Чаплин на конкурсе двойников Чарли Чаплина"?',
      answer: '3',
      points: '500',
      answered: false,
    })

    movieCategory.questions.push(movieOne, movieTwo, movieThree, movieFour, movieFive)
    irlandCategory.questions.push(irlandOne, irlandTwo, irlandThree, irlandFour, irlandFive)
    soccerCategory.questions.push(soccerOne, soccerTwo, soccerThree, soccerFour, soccerFive)

    await movieOne.save()
    await movieTwo.save()
    await movieThree.save()
    await movieFour.save()
    await movieFive.save()
    await irlandOne.save()
    await irlandTwo.save()
    await irlandThree.save()
    await irlandFour.save()
    await irlandFive.save()
    await soccerOne.save()
    await soccerTwo.save()
    await soccerThree.save()
    await soccerFour.save()
    await soccerFive.save()

    await movieCategory.save()
    await irlandCategory.save()
    await soccerCategory.save()

  } catch (e) {
    console.log(e);
  }
  disconnect();
}

start();

