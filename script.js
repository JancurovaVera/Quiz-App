const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const InterestingPlacesButton = document.getElementById('areaIP')
const CzechCenturyButton = document.getElementById('areaCC')
const CultureButton = document.getElementById('areaCulture')
const MealButton = document.getElementById('areaMeal')
const scoreElement = document.getElementById('score')


let shuffledQuestions, currentQuestionIndex

let skore;
skore =0;
objektSkore = document.querySelector("#skore");

nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
InterestingPlacesButton.addEventListener('click', startGameInterestigPlaces)
CzechCenturyButton.addEventListener('click', startGameCzechCentury)
CultureButton.addEventListener('click', startGameCulture)
MealButton.addEventListener('click', starGameMeal)


//Start area
function startGameInterestigPlaces(){
  InterestingPlacesButton.classList.add('chosen')
 
  startButton.classList.add('hide')
  shuffledQuestions = questionsIP.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  showScore()
}

function startGameCzechCentury () {

  startButton.classList.add('hide')
  shuffledQuestions = questionsCC.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function startGameCulture(){
  startButton.classList.add('hide')
  shuffledQuestions = questionsC.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function starGameMeal(){
  startButton.classList.add('hide')
  shuffledQuestions = questionsMeal.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}



function showScore(){
  scoreElement.classList.remove('hide')
}

///next
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')  
    skore++
    objektSkore.textContent = skore;
  } else {
    element.classList.add('wrong')
    skore=skore
    objektSkore.textContent = skore;
   } 
}





function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questionsIP = [
  {
    question: 'Dominantou kterého města je hrad Špilberk?',
    answers: [
      { text: 'Brna', correct: true },
      { text: 'Zlína', correct: false },
      { text: 'Břeclavi', correct: false }
    ]
  },
  {
    question: 'Jaká řeka teče pod Hrady Karlštejn a Křivoklát?',
    answers: [
      { text: 'Sázava', correct: false },
      { text: 'Vltava', correct: false },
      { text: 'Berounka', correct: true },
        ]
  },
  {
    question: 'Jak se jmenuje pražský kostel, ve kterém se ukrývali parašutisté po atentátu na Reinharda Heydricha?',
    answers: [
      { text: 'Emauzy', correct: false },
      { text: 'sv. Cyrila a Metoděje', correct: true },
      { text: 'sv. Antonína', correct: false },
      { text: 'sv. Mikuláše', correct: false }
    ]
  },
  {
    question: 'Které město je čtvrté nejlidnatější v České republice?',
    answers: [
      { text: 'Liberec', correct: false },  
      { text: 'Plzeň', correct: true },
      { text: 'Olomouc', correct: false },
      { text: 'Jihlava', correct: false }
    ]
  }
]

const questionsCC = [
  {
    question: 'Jak se nazýval vojenský pakt, jehož bylo Československo členem v letech 1955-1991?',
    answers: [
      { text: 'BrnaVaršavská smlouva', correct: true },
      { text: 'Moskevský pakt', correct: false },
      { text: 'Bruselský pakt', correct: false }
    ]
  },
  {
    question: 'Kde sídlila větší část druhé světové války československá vláda v exilu?',
    answers: [
      { text: 'v Moskvě', correct: false },
      { text: 'v Římě', correct: false },
      { text: 'v Londýně', correct: true },
        ]
  },
  {
    question: 'Ve kterém roce se stalo Česko členem paktu NATO?',
    answers: [
      { text: '1990', correct: false },
      { text: '1999', correct: true },
      { text: '1998', correct: false },
      { text: 's2010', correct: false }
    ]
  },
  {
    question: 'Který americký generál osvobodil Plzeň?',
    answers: [
      { text: 'Omar Bradley', correct: false },  
      { text: 'George S.Patton', correct: true },
      { text: 'Henry Eisenhower', correct: false },
      { text: 'Luis Dwight', correct: false }
    ]
  }
]

const questionsC = [
  {
    question: 'Jak se nazýval vojenský pakt, jehož bylo Československo členem v letech 1955-1991?',
    answers: [
      { text: 'BrnaVaršavská smlouva', correct: true },
      { text: 'Moskevský pakt', correct: false },
      { text: 'Bruselský pakt', correct: false }
    ]
  },
  {
    question: 'Kde sídlila větší část druhé světové války československá vláda v exilu?',
    answers: [
      { text: 'v Moskvě', correct: false },
      { text: 'v Římě', correct: false },
      { text: 'v Londýně', correct: true },
        ]
  },
  {
    question: 'Ve kterém roce se stalo Česko členem paktu NATO?',
    answers: [
      { text: '1990', correct: false },
      { text: '1999', correct: true },
      { text: '1998', correct: false },
      { text: 's2010', correct: false }
    ]
  },
  {
    question: 'Který americký generál osvobodil Plzeň?',
    answers: [
      { text: 'Omar Bradley', correct: false },  
      { text: 'George S.Patton', correct: true },
      { text: 'Henry Eisenhower', correct: false },
      { text: 'Luis Dwight', correct: false }
    ]
  }
]

const questionsMeal = [
  {
    question: 'Které známé divadlo se již od roku 2005 nachází na ulici Dejvická v Praze  6?',
    answers: [
      { text: 'Semafor, o.p.s.', correct: true },
      { text: 'Divadlo Na zábradlí', correct: false },
      { text: 'Divadlo ABC', correct: false }
    ]
  },
  {
    question: 'Ve kterém roce končí vyprávění o rodině Dvořákových ze známěhí ČT Vyprávěj?',
    answers: [
      { text: '1989', correct: false },
      { text: '2000', correct: false },
      { text: '2005', correct: true },
        ]
  },
  {
    question: 'Který z těchto hudebníků nebyl členem kapely Pražský výběr?',
    answers: [
      { text: 'Vilém Čok', correct: false },
      { text: 'Michal Pavlíček', correct: false },
      { text: 'Milan Hlavsa', correct: true },
      
    ]
  },
]