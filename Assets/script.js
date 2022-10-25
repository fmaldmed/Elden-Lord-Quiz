var timeEl = document.querySelector("#time");
var mainEl = document.querySelector("main");
var buttonEl = document.querySelector("button");
var Quizname = document.querySelector("Quizname");
var score = document.querySelector("score"); 


function sendMessage() {
    timeEl.textContent = " ";
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "Elden-Lord-Quiz\Assets\Images\dark-souls-you-died.webp");
    mainEl.appendChild(imgEl);
}

function countdown() {
    var timeLeft = 30;

    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        sendMessage();
      }
    }, 1000);
  }

  buttonEl.addEventListener("click", function() {
    countdown();
    if (timeLeft = 0) {
        sendMessage;
    }
  })

var myQuestions = [
    {
      question: "Who Shattered the Elden Ring?",
      answers: {
        a: 'Malenia',
        b: 'Radahn',
        c: 'Marika'
      },
      correctAnswer: 'c'
    },
    {
      question: "Who did Radagon abandon in order to marry Queen Marika?",
      answers: {
        a: 'Ranni',
        b: 'Rennala',
        c: 'Eleonora'
      },
      correctAnswer: 'b'
    },
    {
        question: "Who is Malenia's twin?",
        answers: {
          a: 'Melina',
          b: 'Miquella',
          c: 'Marika'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is General Radahn afflicted by",
        answers: {
          a: 'Scarlet Rot',
          b: 'Eye of Madness',
          c: 'Temporal sickness'
        },
        correctAnswer: 'a'
    },
    {
        question: "Who gave up their Elden Shard",
        answers: {
          a: 'Rennala',
          b: 'Radahn',
          c: 'Ranni'
        },
        correctAnswer: 'c'
    },
    {
        question: "Who guides the tarnished",
        answers: {
          a: 'Gideon',
          b: 'Godfrey',
          c: 'Godrick'
        },
        correctAnswer: 'b'
      }
  ];

  function saveQuizScore() {
    var NewScore = {
        Quizname: Quizname.value,
        score: score.value
    };
    localStorage.setItem("saveQuizScore", JSON.stringify(saveQuizScore));
    
  }