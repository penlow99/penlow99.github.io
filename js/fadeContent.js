var fadeElement = document.getElementById("fade-area"); 
function fadeFunction() {

    document.getElementById("body-tag").style.backgroundColor = "white";

    fadeElement.style.display = "block";

    d3.selectAll(".button")
        .on("mouseover", function() {
            stillTrue = false;
            textElement.textContent = this.id;
        })
        .on("mouseout", function() {
            newString = "var betterCode = better('results');";
            // blink some more for effect :)
            stillTrue = true;
            counterNum1 = 10;
            for (i = 0; i < 1000; i++) {
                setTimeout(cursorBlink, secNum)   
                //secNum = secNum + 800;
            }
        });
    
} 