var fadeElement = document.getElementById("fade-area");
function fadeFunction() {
    document.getElementById("body-tag").style.backgroundColor = "white";
    fadeElement.innerHTML = `
                            <div class="animated fadeIn main-content">
                                <p class="brackets">
                                    {
                                    <img class="img-fluid" src="images/me_but_really_small.png" style="border-radius: 30px;">
                                    : ['Developer', 'Analyst']}
                                </p>
                                <div class="text-box">
                                  <p>
                                    <h2>My really cool phrase goes right here.</h2>
                                  </p>
                                </div>
                                <div class="flexbox-container">
                                    <div class="flexbox-item">
                                        <img class="content-icons" src="images/icons/puzzle2.svg">
                                        <span class="skill-span">
                                            <h4>Data Engineering</h4>
                                            <p>Finding the pieces of raw information and contructing a productive data pipeline.</p>
                                        </span>
                                    </div>
                                    <div class="flexbox-item">
                                        <img class="content-icons" src="images/icons/graph3.svg">
                                        <span class="skill-span">
                                            <h4>Data Analysis</h4>
                                            <p>Extrapolating meaning from the madness, gleaning the value from your data.</p>
                                        </span>
                                    </div>
                                </div>
                                <div class="flexbox-container">
                                    <div class="flexbox-item">
                                        <img class="content-icons" src="images/icons/dashboard2.svg">
                                        <span class="skill-span">
                                            <h4>Data Visualization</h4>
                                            <p>Leveraging an array of technologies to present analyses in dashboards, maps, and more.</p>
                                        </span>
                                    </div>
                                    <div class="flexbox-item">
                                        <img class="content-icons" src="images/icons/web_design.svg">
                                        <span class="skill-span">
                                            <h4>Front End Development</h4>
                                            <p>Allow the world to see all the good stuff you have to offer, with smooth and clean web applications.</p>
                                        </span>
                                    </div>
                                </div>
                                <div class="flexbox-container">
                                    <div class="flexbox-item">
                                        <img class="content-icons" src="images/icons/tools.svg">
                                        <span class="skill-span">
                                            <h4>Rapid Deployment</h4>
                                            <p>With the latest tools and technologies, constantly improving your business is a must these days.</p>
                                        </span>
                                    </div>
                                    <div class="flexbox-item">
                                        <img class="content-icons" src="images/icons/presentation2.svg">
                                        <span class="skill-span">
                                            <h4 class="skill-header">Team Collaboration</h4>
                                            <p>Bringing insight and resourcefullness to the group, with a smile (and sometimes donuts).</p>
                                        </span>
                                    </div>
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
                                    <a href="https://github.com/penlow99/" target="_blank">
                                        <button type="button" class="button" id="GitHub">
                                            <span class="iconify" data-icon="simple-icons:github" data-inline="false"></span>                   
                                        </button>
                                    </a>
                                    <span>&nbsp;&nbsp;</span>
                                    <a href="https://www.linkedin.com/in/patrick-enlow-tech/" target="_blank">
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