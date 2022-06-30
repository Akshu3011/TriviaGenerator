//TODO:Store the username in ls
    //TODO:Access the username on quiz page

//TODO:generate a quiz
    //Quiz questionbank with correct answer

var quizQuestions=[
    {
        question:"What did Luke Skywalker lose in his fight with Darth Vader?",
        options:{
            a: "His left hand",
            b: "His left foot",
            c: "His right hand",
            d: "His left leg"
        },
        correctAnswer: 'c'
    },
    {
        question:"What nickname does Han Solo call Luke Skywalker that drives him crazy?",
        options:{
            a: "Buckaroo",
            b: "Kid",
            c: "Skydancer",
            d: "Lukie"
        },
        correctAnswer:'b'
    },
    {
        question:"Who delivers the final blow that destroys the second Death Star?",
        options:{
            a: "Han Solo with an X-Wing",
            b: "Jar Jar Binks with a Y-Wing",
            c: "Luke Skywalker with a Speeder",
            d: "Lando Calrissian with the Millennium Falcon"
        },
        correctAnswer:'d'
    },
    {
        question:"What is Chewbacca’s weapon of choice?",
        options:{
            a: "Blaster rifle",
            b: "Lightsaber",
            c: "Bowcaster",
            d: "Metal club"
        },
        correctAnswer:'c'
    },
    {
        question:"What did Owen Lars tell Luke Skywalker about his father?",
        options:{
            a: "He had been a Jedi Knight",
            b: "He had been a Sith Lord",
            c: "He was a navigator on a spice freighter",
            d: "He was a fighter pilot"
        },
        correctAnswer:'c'
    }
];    

//Global variables

var secondsLeft;
var timerInterval;

var quizContainer = document.getElementById('quiz');
var scoreboardContainer = document.getElementById('scoreboard');
var startQuizContainer = document.querySelector('.start-quiz');
var timerEl = document.querySelector('#timer');
var info= document.querySelector(".info");


//functions
//1.Initialize the page with quiz info





    //TODO:show questions
     function showQuestions(queNum){
        //var queNum=1;
        document.getElementById("question").textContent=quizQuestions[queNum].question;
        document.getElementById("button1").textContent= quizQuestions[queNum].options['a'];
        document.getElementById("button2").textContent= quizQuestions[queNum].options['b'];
        document.getElementById("button3").textContent= quizQuestions[queNum].options['c'];
        document.getElementById("button4").textContent= quizQuestions[queNum].options['d'];
        
       /* for(var i=0;i<4;i==0)
        {*/
            document
            .getElementById("button2")
            .addEventListener("click", function () {
              validate(this,queNum);
            });
        

    }
    function startGame(){
    queNum=1;
    showQuestions(queNum);

    }

   /* 
*/

    function validate(userAnswer,queNum) {
        if (userAnswer.textContent === quizQuestions[queNum].options[quizQuestions[queNum].correctAnswer]){
          // on correct answer change button color to light green and increment score
          console.log(userAnswer);
          userAnswer.setAttribute("style", "background-color: lightgreen");
          score++;
        }
          // revert after 1 second
         /* setTimeout(() => {
            selection.setAttribute("style", "background-color: --var(dark)");
          }, 1000);
        } else {
          // on wrong answer set button color to red and display correct answer below
          selection.setAttribute("style", "background-color: red");
          document.getElementById("alert").textContent = `(Answer: ${answers[0]})`
          // revert after 1 second
          setTimeout(() => {
            selection.setAttribute("style", "background-color: --var(dark)");
            document.getElementById("alert").textContent = "";
          }, 1000);
        }
        // calls next question regardless
        setTimeout(() => {
          loadQuestion();
        }, 1000);*/
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
//TODO:show results on submit button
    //TODO:find selected answer and and compare with defined correct answer
    //TODO:save the count of correct and wrong nswers
//TODO:Show the overall results on timer end
//TODO:put a timer for quiz
//TODO:Manage edge cases:
    //TODO:User starts the quiz inbetween
    //TODO:quiz should halt at timer stop 
 
//start the game
// gets game started

setTime(100);    
startGame();