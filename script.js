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