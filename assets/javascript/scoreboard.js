
//variables to get the html attributes
var highScores = [];
var clear=document.querySelector(".reset");
var scoreTable=document.querySelector(".fl-table");

//store the localstore values to highscore array

function start(){
//adding the localstorage score value to new varible highscore
    if (localStorage.getItem("highScores") !== null) {
        highScores = JSON.parse(localStorage.getItem("highScores"));
    } 

    //getting the new score
var newScore=JSON.parse(localStorage.getItem("newScore"));
if (newScore !== null) {
    // addig new score to our variable
    highScores.push(newScore);
}
//updating the highscore in ls
localStorage.setItem("highScores", JSON.stringify(highScores));

console.log(highScores.length)
console.log(highScores);

//calling function to display the scoreboard
displyScore();
}

function displyScore(){
//sorting the high score 
    highScores.sort(function(a,b) {
        return b[1] - a[1];
    })

    console.log("inside display");
var j=1;
    //displaying the sorted score list iin table
for(var i=0;i< highScores.length;i++)
{
    
    var score=highScores[i];
    
    console.log("val:" +score[0]);
    console.log("val:" +score[1]);
        scoreTable.rows[j].cells[1].innerHTML = score[0];
        scoreTable.rows[j].cells[2].innerHTML = score[1];
        j++;
 }
//removing newscore from l to make place for the new score
 localStorage.removeItem("newScore");
}

clear.addEventListener("click", function() {
    // clear everything
    //scoreTable.hidden=true;
    for(var i=1;i<9;i++)
    {
        scoreTable.rows[i].cells[1].innerHTML = "";
        scoreTable.rows[i].cells[2].innerHTML = "";
    }
    localStorage.removeItem("highScores");
})

start();
