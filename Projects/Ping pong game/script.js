var rod1 = document.getElementById("rod1");
var rod2 = document.getElementById("rod2");
var ball  =document.getElementById("ball");

localStorage.setItem("rod1_score",0);
localStorage.setItem("rod2_score",0);

const storeName = "";
const storeScore = "max_score";

let maxScore, movement, rod, ballSpeedX = 2, ballSpeedY = 2, gameStart= false, score ,windowHeight = window.innerHeight, windowWidth = window.innerWidth;

var measure_rod1 = rod1.getBoundingClientRect();
var measure_rod2  = rod2.getBoundingClientRect();

(function ()
{
    rod = localStorage.getItem(storeName);
    maxScore = localStorage.getItem(storeScore);
    if(localStorage.getItem("rod1_score")==0 && localStorage.getItem("rod2_score")==0)
    {
        alert("This is the first time you are playing this game. LET'S START");
        maxScore = 0;
        rod = "Rod 1";
    }
    else
    {
        alert(rod + " has maximum score of " + maxScore * 100);
    }

    resetBoard(rod)
}());

function resetBoard(rodName)
{
    rod1.style.left = (window.innerWidth - rod1.offsetWidth)/ 2 + 'px';
    rod2.style.left = (window.innerWidth - rod2.offsetWidth)/ 2 + 'px';
    ball.style.left = (window.innerWidth - ball.offsetWidth)/ 2 + 'px';
    
    // ball should goes to loosing player
    if(rodName == "Rod 1")
    {
        ball.style.top = (rod2.offsetTop - rod2.offsetHeight) + 'px';
        ballSpeedY = -2;
    }
    else if(rodName == "Rod 2")
    {
        ball.style.top = (rod1.offsetTop + rod1.offsetHeight) + 'px';
        ballSpeedY = 2;
    }
    
    gameStart = false;
    score = 0;
}

function storeWin(rod, score) {

    if (score > maxScore) {
        maxScore = score;
        localStorage.setItem(storeName, rod);
        localStorage.setItem(storeScore, maxScore);
    }

    clearInterval(movement);
    resetBoard(rod);

    alert(rod + " wins with a score of " + (score * 100) + ". Max score is: " + (maxScore * 100));

}

window.addEventListener("keypress",function(){
    let rodspeed = 20;
    
    var measure_rod = rod1.getBoundingClientRect();

    //sliding the rods
    if(this.event.code === "KeyD" && ((measure_rod.x  + rod1.offsetWidth) < window.innerWidth))
    {
        rod1.style.left = measure_rod.x + rodspeed + 'px';
        rod2.style.left = rod1.style.left;
        console.log(event.code);
    }
    if(this.event.code === "KeyA" && (measure_rod.x > 0))
    {
        rod1.style.left = (measure_rod.x) - rodspeed + 'px';
        rod2.style.left = rod1.style.left;
        console.log(event.code);
    }

    if(event.code === "Enter")
    {
        console.log(event.code);
        if (!gameStart) {
            gameStart = true;
            
            let ballRect = ball.getBoundingClientRect();
            let ballX = ballRect.x;
            let ballY = ballRect.y;
            let ballDia = ballRect.width;

            let rod1Height = rod1.offsetHeight;
            let rod2Height = rod2.offsetHeight;
            let rod1Width = rod1.offsetWidth;
            let rod2Width = rod2.offsetWidth;


            movement = setInterval(function () {
                // Move ball 
                ballX += ballSpeedX;
                ballY += ballSpeedY;

                rod1X = rod1.getBoundingClientRect().x;
                rod2X = rod2.getBoundingClientRect().x;

                ball.style.left = ballX + 'px';
                ball.style.top = ballY + 'px';


                if ((ballX + ballDia) > windowWidth || ballX < 0) {
                    ballSpeedX = -ballSpeedX; // Reverses the direction
                }

                // It specifies the center of the ball on the viewport
                let ballPos = ballX + ballDia / 2;

                // Check for Rod 1
                if (ballY <= rod1Height) {
                    ballSpeedY = -ballSpeedY; // Reverses the direction
                    score++;

                    // Check if the game ends
                    if ((ballPos < rod1X) || (ballPos > (rod1X + rod1Width))) {
                        storeWin("Rod 2", score);
                    }
                }

                // Check for Rod 2
                else if ((ballY + ballDia) >= (windowHeight - rod2Height)) {
                    ballSpeedY = -ballSpeedY; // Reverses the direction
                    score++;

                    // Check if the game ends
                    if ((ballPos < rod2X) || (ballPos > (rod2X + rod2Width))) {
                        storeWin("Rod 1", score);
                    }
                }

            }, 10);

        }
    }
})