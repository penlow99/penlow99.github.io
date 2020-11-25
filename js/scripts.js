var strToType = "var betterCode = better('results');";
var newString = "";
// set number of milliseconds to start with
var secNum = 500;
// counters for the two print functions
var counterNum1 = 0;
var counterNum2 = 0;
// the html element that holds the printed text
var textElement = document.getElementById("typeWriterSpan");
// html element of the typing sound
var typeSound = document.getElementById("keystroke");
var stillTrue = true;

function initButtonPress() {
    textElement = "To initialize, press [ENTER]"
}

function typeWriter() {
    // ###################################################################
    // Have to run these in order for some reason, couldn't put this in 
    // another function. Trying to time events in js is really finicky!
    // ###################################################################

    // make cursor blink for a few seconds
    for (i = 0; i < 5; i++) {
        setTimeout(cursorBlink, secNum) 
        secNum = secNum + 500;
    }
    // print the string with varying frequency so it looks like real typing
    for (i = 0; i < strToType.length; i++) {
        setTimeout(writeText, secNum) 
        secNum = secNum + randomNum(50, 200);
    }
    // blink some more for effect :) 
    for (i = 0; i < 1000; i++) {
        setTimeout(cursorBlink, secNum)   
        secNum = secNum + 500;
    }
  }

// this function makes the cursor blink (and start the typing sound)
function cursorBlink() {
    if (stillTrue === true) {
        counterNum1 += 1;
        if (counterNum1 == 5) {
            typeSound.muted = false;
            typeSound.play();
        }
        if (counterNum1 % 2 == 0) {
            textElement.textContent = newString + "";    
        } else { 
            textElement.textContent = newString + "_";
        }
    } else {
        return
    }
}

// this function writes out the string to a span tag in the html
function writeText() {
    newString = newString + strToType[counterNum2];
    textElement.textContent = newString + "_";
    counterNum2 += 1;
    // when string is done printing, call fade in function from 'fadeContent.js', and stop typing sound
    if (counterNum2 == strToType.length) {
        typeSound.pause();
        setTimeout(fadeFunction, 1000);
    }
}

// generates a number in a range of two numbers
function randomNum(min, max) {  
    return Math.round(Math.random() * (max - min) + min); 
} 

// have a brief delay before starting so that viewer has time to see blank "terminal"
//window.onload = setTimeout(typeWriter, 500);
//window.onload = setTimeout(fadeFunction, 12000);
document.addEventListener("keyup", typeWriter);
document.addEventListener("touchend", typeWriter);
