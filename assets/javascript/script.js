//Quiz questionbank with correct answer

var quizQuestions = [
  {
    question: "What did Luke Skywalker lose in his fight with Darth Vader?",
    options: {
      a: "His left hand",
      b: "His left foot",
      c: "His right hand",
      d: "His left leg",
    },
    correctAnswer: "c",
  },
  {
    question:
      "What nickname does Han Solo call Luke Skywalker that drives him crazy?",
    options: {
      a: "Buckaroo",
      b: "Kid",
      c: "Skydancer",
      d: "Lukie",
    },
    correctAnswer: "b",
  },
  {
    question:
      "Who delivers the final blow that destroys the second Death Star?",
    options: {
      a: "Han Solo with an X-Wing",
      b: "Jar Jar Binks with a Y-Wing",
      c: "Luke Skywalker with a Speeder",
      d: "Lando Calrissian with the Millennium Falcon",
    },
    correctAnswer: "d",
  },
  {
    question: "What is Chewbacca’s weapon of choice?",
    options: {
      a: "Blaster rifle",
      b: "Lightsaber",
      c: "Bowcaster",
      d: "Metal club",
    },
    correctAnswer: "c",
  },
  {
    question: "What did Owen Lars tell Luke Skywalker about his father?",
    options: {
      a: "He had been a Jedi Knight",
      b: "He had been a Sith Lord",
      c: "He was a navigator on a spice freighter",
      d: "He was a fighter pilot",
    },
    correctAnswer: "c",
  },
  {
    question: "Where did the Clone Wars begin?",
    options: {
      a: "Tatooine",
      b: "Geonosis",
      c: "Naboo",
      d: "Coruscant",
    },
    correctAnswer: "b",
  },
  {
    question: "In which film does Luke find out Darth Vader is his father?",
    options: {
      a: "A New Hope",
      b: "The Empire Strikes Back",
      c: "Return of the Jedi",
      d: "Attack of the Clones",
    },
    correctAnswer: "b",
  },
  {
    question: "According to Yoda, which of these is the path to the Dark Side?",
    options: {
      a: "Pain",
      b: "Hate",
      c: "Fear",
      d: "Envy",
    },
    correctAnswer: "c",
  },
  {
    question: "Luke Skywalker was raised on which planet?",
    options: {
      a: "Hoth",
      b: "Alderaan",
      c: "Tatooine",
      d: "Jakku",
    },
    correctAnswer: "c",
  },
  {
    question: "What is Finn’s Stormtrooper name in the Star Wars movies?",
    options: {
      a: "FN-2187",
      b: "FN-2052",
      c: "FN-2674",
      d: "FN-2900",
    },
    correctAnswer: "a",
  },
  {
    question: "Which order brought about the death of the Jedi?",
    options: {
      a: "Order 55",
      b: "Order 66",
      c: "Order 77",
      d: "Order 88",
    },
    correctAnswer: "b",
  },
  {
    question: "What are the creatures, living on Endor, that helped the Rebel’s to defeat the second Death Star?",
    options: {
      a: "Ewoks",
      b: "Wookies",
      c: "Nerf Herders",
      d: "Jawas",
    },
    correctAnswer: "a",
  },
  {
    question:
      "How many lightsabers does General Grievous wield in his fight with Obi-Wan on Utapau?",
    options: {
      a: "1",
      b: "2",
      c: "4",
      d: "6",
    },
    correctAnswer: "c",
  },
  {
    question: "Who was the voice of Darth Vader?",
    options: {
      a: "James Earl Jones",
      b: "Garrick Hagon",
      c: "David Prowse",
      d: "Richard LeParmentier",
    },
    correctAnswer: "a",
  },
  {
    question: "Who freed Princess Leia from her chains at Jabba's palace?",
    options: {
      a: "Luke Skywalker",
      b: "Han Solo",
      c: "Han Solo",
      d: "R2D2",
    },
    correctAnswer: "d",
  },
];

//Global variables

var secondsLeft;
var timerInterval;
var score = 0;
var queNum = 0;
var quizContainer = document.getElementById("quiz");
var scoreboardContainer = document.getElementById("scoreboard");
var startQuizContainer = document.querySelector(".start-quiz");
var timerEl = document.querySelector("#timer");
var info = document.querySelector(".info");
var isAnswered = false;
var timeDeduct= document.getElementById("time-deducted");


//functions

//user answer click event
for (var i = 1; i <= 4; i++) {
  
  document.getElementById("button" + i).addEventListener("click", function () {
    validate(this);
  });
}
//Display questions with options based on question number parameter
function showQuestions(queNum) {
  
  document.querySelector(".result").hidden = true;
  //t questions div, displying question of index question number
  document.getElementById("question").textContent =
    quizQuestions[queNum].question;
  document.getElementById("button1").textContent =
    quizQuestions[queNum].options["a"];
  document.getElementById("button2").textContent =
    quizQuestions[queNum].options["b"];
  document.getElementById("button3").textContent =
    quizQuestions[queNum].options["c"];
  document.getElementById("button4").textContent =
    quizQuestions[queNum].options["d"];
   

}

//Start of Game, it will load the questions on page
function startGame() {
 
  showQuestions(queNum);
}


//validate the users answer
function validate(userAnswer) {
  //if timer goes off, game ends
  if (secondsLeft === 0) {

  
  setTimeout(function () {
    gameEnds();
  }, 1000)
}
  //if user's answer matches with the correct answer, button color changes to green and score variable is incremented

  if (
    userAnswer.textContent ===
    quizQuestions[queNum].options[quizQuestions[queNum].correctAnswer]
  ) {
    document.querySelector(".result").hidden = true;
    userAnswer.setAttribute("style", "background-color: #94dd4d");

    console.log("inside the positive if function qnum" + queNum);
    
    //using setTimeout function to get back to the original button color, after 1s
    setTimeout(function () {
      userAnswer.setAttribute("style", "background-color: #FFE81F");
      userAnswer.setAttribute("style", "color: black");

    }, 1000);

    //score is incremented
    score++;
    for (var i = 1; i <= 4; i++) {
      document.getElementById("button" + i).disabled = true;
    }

    document.querySelector(".result").textContent = " ";
  } else {

    //for every wrong answer, the timer goes down by 10s
    secondsLeft-=10;
    timeDeduct.hidden=false;
    setTimeout(function () {
      timeDeduct.hidden=true;
        }, 1000);
    
//if user's answer does not match with the correct answer, button color changes to red
    
    userAnswer.setAttribute("style", "background-color: #d72323");

    //using setTimeout function to get back to the original button color, after 1s

    

    setTimeout(function () {
      userAnswer.setAttribute("style", "background-color: #FFE81F");
      userAnswer.setAttribute("style", "color: black");
      
    }, 1000);

    for (var i = 1; i <= 4; i++) {
      document.getElementById("button" + i).disabled = true;
    }

    /*  var answerDisplay=document.createElement("button");
            answerDisplay.className="answerDisplay";
            
            document.getElementById("choices").append(answerDisplay);
           */
    document.querySelector(".result").hidden = false;
    document.querySelector(".result").textContent =
      quizQuestions[queNum].options[quizQuestions[queNum].correctAnswer];

    setTimeout(function () {
      document.querySelector(".result").textContent = " ";
    }, 1000);
  }

  console.log("inside the vlidate function qnum" + queNum);

  //increasing the question number count to get the next question
  //game continues till all questions are over
  
  for (var i = 1; i <= 4; i++) {document
  .getElementById("button"+i).disabled=false;}

  queNum === (quizQuestions.length-1)
    ? setTimeout(function () {
        gameEnds();
      }, 1000)
    : setTimeout(function () {
        showQuestions(++queNum);
      }, 1000);
}


//conditions for game end

function gameEnds() {
  // when timer goes to 0
  if (secondsLeft < 0) {
    secondsLeft = 0;
  }
  // clears questions, buttons, and timer
  document.getElementById("choices").remove();
  document.getElementById("timer").remove();
  document.getElementById("question").remove();
  document.querySelector(".result").remove();
  clearInterval(timerInterval);
  //disply score
  var scoreDisplay = document.createElement("h2");
  scoreDisplay.className = "scoreDisplay";
  document.getElementById("main-container").append(scoreDisplay);
  if (score <= 1) {
    scoreDisplay.textContent =
      "Better Luck next time!!! you scored " + score + " points!";
  } else {
    scoreDisplay.textContent = "Congrats, you scored " + score + " points!";
  }
//get the user initials to store the highscore
  getuserInfo();
}


function getuserInfo() {
  // get main section to attach to
  var section = document.querySelector("main");
  // create form and append to main
  var form = document.createElement("form");
  form.id = "form";
  section.appendChild(form);
  // create label
  var label = document.createElement("label");
  form.appendChild(label);
  label.textContent = "Your Initials: ";
  label.setAttribute("for", initialsInput);
  // create input
  var initialsInput = document.createElement("input");
  form.appendChild(initialsInput);
  initialsInput.setAttribute("type", "text");
  initialsInput.setAttribute("maxlength", "3");
  // create submit button
  var submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Submit");
  submit.setAttribute("style", "margin: 10px");
  form.appendChild(submit);
  // passing the user initials and form to submit event fuction
  submitEvent(initialsInput, form);
}

//this will stor the user initial and score to local storage
function submitEvent(initialsInput, form) {
  // add submit event
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var initials = initialsInput.value.toUpperCase();
    // alert for initials are blank
    if (initials === "") {
      alert("Initials can't be blank");
      return;
    }
    var newScore = [initials, score];
    localStorage.setItem("newScore", JSON.stringify(newScore));
    window.location.href = "../html/highScores.html";
  });
}


//timer function
function setTime(time) {
  // Sets interval in variable
  secondsLeft = time;
  timerEl.textContent = "Time remaining: " + secondsLeft + " seconds";
  timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Time remaining: " + secondsLeft + " seconds";
    if (secondsLeft < 1) {
      gameEnds();
    }
  }, 1000);
}


//start the game
// gets game started
document.querySelector(".result").hidden = true;
timeDeduct.hidden=true;
setTime(100);
startGame();
