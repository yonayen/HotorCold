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


// event listners for keydown and button click


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




















