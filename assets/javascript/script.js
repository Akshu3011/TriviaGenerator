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
var score=0;
var queNum=0;
var quizContainer = document.getElementById('quiz');
var scoreboardContainer = document.getElementById('scoreboard');
var startQuizContainer = document.querySelector('.start-quiz');
var timerEl = document.querySelector('#timer');
var info= document.querySelector(".info");
var isAnswered=false;


//functions
    //Display questions with options based on question number parameter
     function showQuestions(queNum){
        document.querySelector(".result").hidden=true;
        //t questions div, displying question of index question number
        document.getElementById("question").textContent=quizQuestions[queNum].question;
        document.getElementById("button1").textContent= quizQuestions[queNum].options['a'];
        document.getElementById("button2").textContent= quizQuestions[queNum].options['b'];
        document.getElementById("button3").textContent= quizQuestions[queNum].options['c'];
        document.getElementById("button4").textContent= quizQuestions[queNum].options['d'];
        
        //checking the user's answer by sending each click to validate answer
        for(var i=1;i<=4;i++)
        {
            document
            .getElementById("button"+i).disabled=false;
            document
            .getElementById("button"+i)
            .addEventListener("click", function () {
              validate(this,queNum);
              
            });  
        }
        

    }
    
//Start of Game, it will load the questions on page    
    function startGame(){
   
    showQuestions(queNum);
    }



    function validate(userAnswer,queNum) {
        //if timer goes off, game ends
        if(secondsLeft===0)
            gameEnds();

        
            
        //if user's answer matches with the correct answer, button color changes to green and score variable is incremented
        
        if (userAnswer.textContent === quizQuestions[queNum].options[quizQuestions[queNum].correctAnswer]){
            document.querySelector(".result").hidden=true;
          userAnswer.setAttribute("style", "background-color: #94dd4d");

          //using setTimeout function to get back to the original button color, after 1s 
          setTimeout(function(){userAnswer.setAttribute("style", "background-color: #FFE81F")},1000);

          score++;
          for(var i=1;i<=4;i++)
        {
            document
            .getElementById("button"+i).disabled=true;
        }

        document.querySelector(".result").textContent=" ";
        }
         
        else
        {
         //if user's answer does not match with the correct answer, button color changes to red             
            userAnswer.setAttribute("style", "background-color: #d72323");

            //using setTimeout function to get back to the original button color, after 1s 

            setTimeout(function(){userAnswer.setAttribute("style", "background-color: #FFE81F")},1000);
            for(var i=1;i<=4;i++)
            {
                document
                .getElementById("button"+i).disabled=true;
            }
            
          /*  var answerDisplay=document.createElement("button");
            answerDisplay.className="answerDisplay";
            
            document.getElementById("choices").append(answerDisplay);
           */
            document.querySelector(".result").hidden=false;
            document.querySelector(".result").textContent=quizQuestions[queNum].options[quizQuestions[queNum].correctAnswer];

            setTimeout(function(){
                
                document.querySelector(".result").textContent=" ";
                
            },1000);
        }
        
        //increasing the question number count to get the next question
        queNum++;
        console.log(score);

        //game continues till all questions are over

        
       
        queNum ===quizQuestions.length ? setTimeout(function(){gameEnds()},1000) : setTimeout(function(){showQuestions(queNum)},1000);

    
      }



      function gameEnds()
      {
            // prevent negative timer
            if (secondsLeft < 0) {
              secondsLeft = 0;
            }
            // clears questions, buttons, and timer
            document.getElementById("choices").remove();
            document.getElementById("timer").remove();
            document.getElementById("question").remove();
            clearInterval(timerInterval);
            //disply score
            var scoreDisplay=document.createElement("h2");
            scoreDisplay.className="scoreDisplay"
            document.getElementById("main-container").append(scoreDisplay);
            if(score <=1)
            {
                scoreDisplay.textContent="Better Luck next time!!! you scored " + score + " points!";
                
            }
            else
            {
                scoreDisplay.textContent="Congrats, you scored " + score + " points!";

            }
            
        console.log("Game Over");
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
document.querySelector(".result").hidden=true;
setTime(12);    
startGame();