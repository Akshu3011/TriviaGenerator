var highScores = [];
var scores = document.querySelector(".scores");
var clear = document.querySelector(".reset");


var scoreVal=JSON.parse(localStorage.getItem("newScore"));

console.log(scoreVal);


var scoreTable=document.querySelector(".fl-table");

scoreTable.rows[1].cells[1].innerHTML = scoreVal[0];



var clear=document.querySelector(".reset");
clear.addEventListener("click", function() {
    // clear everything
    scoreTable.hidden=true;
    localStorage.removeItem("scoreVal");
})
