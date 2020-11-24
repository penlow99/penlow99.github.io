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
                            </div>
                            `;
    
} 