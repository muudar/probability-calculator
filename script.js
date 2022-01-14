let balls = []



function addBall(event){
    if(balls.length >= 50) return;
    color = event.target.classList[0];
    balls.push(color);
    const ballField = document.querySelector(".ballField");
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.classList.add(color);
    ball.textContent = balls.length;
    ballField.append(ball);
}


function draw(){
    if(balls.length == 0) return;
    const drawnBall = document.querySelector(".drawnBallField");
    drawnBall.innerHTML = "";
    let r = Math.floor(Math.random() * (balls.length));
    let randomBall = balls[r];
    let ball = document.createElement("div");
    ball.textContent = (r+1);
    ball.classList.add("ball");
    ball.classList.add(randomBall);
    drawnBall.append(ball);
    calculateProbability(randomBall);
}

function calculateProbability(ball){
    let same = 0;
    for(let i = 0; i < balls.length; i++){
        if(balls[i] == ball)
            same++;
    }
    const probabilityField = document.querySelector(".probability");
    let span1 = document.createElement("span");
    span1.textContent = ball + " = " + same + " / " + balls.length + " = " + (100*same/balls.length).toFixed(2) + "%";
    span1.style.color = ball;
    probabilityField.textContent = "The probability of the ball being ";
    probabilityField.append(span1);
}