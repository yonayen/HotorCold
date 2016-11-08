$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

// New Attempt
// event listners for keydown and button click


// Model --> dummest part of the project --- just houses the data
// --> or "STRUCTURE"
// var Item = function (name){
//     this.name = name;
// }

// throw in the controller (referring to the model: commonjs or script file appears before this one)
// require('')
// Item.prototype.computePrice = function(argument){
     // body...  

     // get motivated --- let me steal the idea
     // goting with the flow
// };

// instance of the model used in the Controller (usually)
// var tomatoes = new Item("Tomatoes");


var finalAnswer = Math.floor((Math.random() * 100) + 1);
var guesses = [];
var gameEnded = false;

$(".new").on("click",function()
{
    resetGame();
});

$("#guessButton").on("click",function()
{
    if( false == gameEnded)
    {
        guess( $("#userGuess").val() );
    }
});

function guess(number)
{
    if(isNumber(number))
    {
        if(hasNotBeenGuessed(number))
        {
            guesses.push(number);
            addGuessToGuessList(number);
            hotOrCold(number);
        }
        else
        {
            alert("You have already tried this number!");
        }
    }
    else
    {
        alert("Please enter a number");
    }
}


// CONTROLLER --> logical parts of the project (if X, then Y)

function hotOrCold(number)
{
    var distance = Math.abs( finalAnswer - number );

    var feedbackText = "";

    if(10 > distance )
    {
        feedbackText = "Hot!!";
    }

    if(10 <= distance )
    {
        feedbackText = "Cold!!";
    }

    if(0 == distance)
    {
        feedbackText = "Congratulations!";
        gameEnded = true;
    }

    $("#feedback").text(feedbackText);
}


// paints the PAGE --> very good view
function addGuessToGuessList(number)
{
    $("#guessList").append('<li>'+number+'</li>');
}

//returns true if the number does not exist in the guesses array.
function hasNotBeenGuessed(number)
{
    if(-1 == guesses.indexOf(number))
    {
        return true;
    }
    else
    {
        return false;
    }
}

function isNumber(val) {
    if(Number(parseInt(val))==val)
    {
        return parseInt(val); //Return the number value of val
    }
    else
    {
        return false; //Not a Number
    }
};

function resetGame()
{
    answer = Math.floor((Math.random() * 100) + 1);
    guesses = [];
    gameEnded = false;
    $("#guessList").empty();
}




















