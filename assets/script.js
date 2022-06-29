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

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('getStarted');

    //TODO:show questions
     function showQuestions(quizQuestions){
        var output=[];
        var options;

        for(var i=0; i < quizQuestions.length; i++)
        {
            //reset options array for each question-options
            options=[];

            //create options with radio buttons for each questions
            
        for(let element in quizQuestions[i].options)
                {
               options.push(
                '<label>'+
                '<input type="radio" value="question '+i+'" value="'+element+'">'
                +element+ ':' +quizQuestions[i].options[element] + '</label>'
               );
            }
            console.log(options);
        }
        
        //get the questions and above options joined

        

        //add question nd option

     }

     showQuestions(quizQuestions);
//TODO:show results on submit button
    //TODO:find selected answer and and compare with defined correct answer
    //TODO:save the count of correct and wrong nswers
//TODO:Show the overall results on timer end
//TODO:put a timer for quiz
//TODO:Manage edge cases:
    //TODO:User starts the quiz inbetween
    //TODO:quiz should halt at timer stop 
    