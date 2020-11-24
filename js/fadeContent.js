var fadeElement = document.getElementById("fade-area");
function fadeFunction() {
    fadeElement.innerHTML = `
                            <div class="animated fadeIn main-content">
                                <p class="brackets">
                                    {
                                    <img class="img-fluid" src="images/me_but_really_small.png" style="border-radius: 30px;">
                                    : ['Developer', 'Analyst']}
                                </p>
                                <div class="text-box">
                                  <p>
                                    <h2>I write words mostly because you keep reading them.</h2>
                                    <br>
                                    <h3>If you stop reading, I'll stop typing.</h3>
                                    <br>
                                    <h4>Maybe.</h4>
                                  </p>
                                </div>
                                <div class="footer">
                                    <button type="button" class="button" id="Home Sweet Home">
                                        <a href="#">
                                            <span class="iconify" data-icon="vaadin:home" data-inline="false"></span>
                                        </a>
                                    </button>
                                    <span>&nbsp;&nbsp;</span>
                                    <button type="button" class="button" id="Code Projects">
                                        <a href="">
                                            <span class="iconify" data-icon="heroicons-solid:code" data-inline="false"></span>
                                        </a>
                                    </button>
                                    <span>&nbsp;&nbsp;</span>
                                    <a href="https://github.com/penlow99/">
                                        <button type="button" class="button" id="GitHub">
                                            <span class="iconify" data-icon="simple-icons:github" data-inline="false"></span>                   
                                        </button>
                                    </a>
                                    <span>&nbsp;&nbsp;</span>
                                    <a href="https://www.linkedin.com/in/patrick-enlow-tech/">
                                        <button type="button" class="button" id="LinkedIn ">
                                            <span class="iconify" data-icon="simple-icons:linkedin" data-inline="false"></span>                   
                                        </button>
                                    </a>
                                </div>
                            </div>
                            `;

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