var strToType = "if (writing('betterCode') == better.Results) {";
var newString = "";
var stillTrue = true;
var cursorBool = true;
// set number of milliseconds to start with
var secNum = 275;
// counter for the two print functions
var counterNum = 0;
// the html element that holds the printed text
var textElement = document.getElementById("typeWriterSpan");
// html element that makes the 'cursor' blink
var cursor = document.getElementById("cursor");
// html element of the typing sound
var typeSound = document.getElementById("keystroke");
// html element for fading effect
var fadeElement = document.getElementById("fade-area");


// Blinking cursor and typewriter effect
function typeWriter() { 
    window.setInterval(function() {
        if (cursorBool === true) {
            cursor.setAttribute('style', 'display:inline');
            cursorBool = false;
        } else {
            cursor.setAttribute('style', 'display:none');
            cursorBool = true;
        }
    }, 500)

    // print the string with varying frequency so it looks like real typing
    for (i = 0; i < strToType.length; i++) {
        setTimeout(writeText, secNum); 
        secNum = secNum + randomNum(50, 275);
    }
  }
// -----------------------------------------------------------------------


// this function writes out the string to a span tag in the html, and starts the typing sound
function writeText() {
    typeSound.play();
    newString = newString + strToType[counterNum];
    textElement.textContent = newString;
    counterNum += 1;
    // when string is done printing, call fade in function from 'fadeContent.js', and stop typing sound
    if (counterNum == strToType.length) {
        typeSound.pause();
        setTimeout(fadeFunction, 1000);
    }
}
// -----------------------------------------------------------------------

// generates a number in a range of two numbers, thanks W3schools!
function randomNum(min, max) {  
    return Math.round(Math.random() * (max - min) + min); 
} 
// -----------------------------------------------------------------------

// fade the screen in after typing effect (and button hover effects)
function fadeFunction() {

    document.getElementById("body-tag").style.backgroundColor = "white";

    fadeElement.style.display = "block";   
    
    d3.selectAll(".button")
        .on("mouseover", function() {
            stillTrue = false;
            textElement.textContent = this.id;
        })
        .on("mouseout", function() {
            textElement.textContent = stupidJokes();
        });
}
// -----------------------------------------------------------------------

// Joke Function
function stupidJokes() {
    let jokes = [
        'Hello Wor...just kidding ;)', 
        'Two types of people: 1.Folks who can extraploate from incomplete data',
        'Documentation: Coming Soon',
        'A SQL query goes into a bar, walks up to 2 tables and asks, "Can I join you?"',
        'I mustache you a question, can eyebrows your file structure?',
        'A clean house is the sign of a broken computer.',
        "Don't you find the F5 key to be so refreshing?!?",
        "It's ok computer, I go to sleep after 20 minutes of inactivity too.",
        'A TV can insult your intelligence, but nothing rubs it in like a computer.',
        "The 90s were great. I didn't have to look at anyone's selfies."
    ];
    let numJoke = randomNum(0, jokes.length-1);
    return jokes[numJoke];
}

// set up a listener to catch keytroke to "Initialize" my silly typing function
document.addEventListener("keyup", typeWriter);
