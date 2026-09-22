const suma=(a, b) => {
    let c=a+b;
    return c;
}

const student={
    name: "Bogatu Alexei",
    age: 17,
    grade: 12,
    introduce: ()=>{console.log("Sunt " + student.name + " și am " + student.age + " ani.")}
}

const gameScore={
    player: 0,
    computer: 0,
    draws: 0,
}

let resultText = "";
const compare=(a, b)=>{
    if(a == b){
        gameScore.draws += 1;
        resultText = "It's a Draw";
    } else if((a == 0 && b == 1) || (a == 1 && b == 2) || (a == 2 && b == 0)){
        gameScore.player += 1;
        resultText = "Player Won";
    } else {
        gameScore.computer += 1;
        resultText = "PC Won";
    }
}

const getRandomInt=(max)=>{return Math.floor(Math.random() * max);}

const choices = [
    {
        name: "rock",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1WahFz1L0K_7iz7KA_dpnNyHCBzrP9X0iyNd5xsDDVA&s=10"
    },
    {
        name: "scissors",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkhNOoTgCMTwd1Sn_6GdfPBsaI9BJUIXmJwEcronxXA&s=10"
    },
    {
        name: "paper",
        image: "https://printworksmarket.com/cdn/shop/files/Printworks_refill-papper_white-large.jpg?v=1743596015"
    }
];

const playerSection = document.getElementById('playerChoice');
const pcSection = document.getElementById('pcChoice');

const RockPaperScissors=(a)=>{
    let PCSelect = getRandomInt(3);
    if(pcSection.getAttribute("class") === "hidden"){
        pcSection.setAttribute("class", "");
        pcSection.setAttribute("src", choices[PCSelect].image);
    } else {
        pcSection.setAttribute("src", choices[PCSelect].image);
    }
    console.log(a + " and " + PCSelect);
    compare(a, PCSelect);
    updateScore();
}

const rockSelect = document.getElementsByClassName('rock')[0];
rockSelect.addEventListener("click", (e)=>{
    if(playerSection.getAttribute("class") === "hidden"){
        playerSection.setAttribute("class", "");
        playerSection.setAttribute("src", choices[0].image);
    } else {
        playerSection.setAttribute("src", choices[0].image);
    }

    RockPaperScissors(0);
})

const paperSelect = document.getElementsByClassName('paper')[0];
paperSelect.addEventListener("click", (e)=>{
    if(playerSection.getAttribute("class") === "hidden"){
        playerSection.setAttribute("class", "");
        playerSection.setAttribute("src", choices[2].image);
    } else {
        playerSection.setAttribute("src", choices[2].image);
    }

    RockPaperScissors(2);
})

const scissorsSelect = document.getElementsByClassName('scissors')[0];
scissorsSelect.addEventListener("click", (e)=>{
    if(playerSection.getAttribute("class") === "hidden"){
        playerSection.setAttribute("class", "");
        playerSection.setAttribute("src", choices[1].image);
    } else {
        playerSection.setAttribute("src", choices[1].image);
    }

    RockPaperScissors(1);
})

const rounds = document.createElement('p');
rounds.setAttribute("class", "points");
rounds.innerText = "Rounds: " + (gameScore.player + gameScore.computer + gameScore.draws);

const playerScore = document.createElement('p');
playerScore.setAttribute("class", "points");
playerScore.innerText = "Player's score: " + gameScore.player;

const pcScore = document.createElement('p');
pcScore.setAttribute("class", "points");
pcScore.innerText = "PC's score: " + gameScore.computer;

const drawScore = document.createElement('p');
drawScore.setAttribute("class", "points");
drawScore.innerText = "Draws: " + gameScore.draws;

const result = document.createElement('result');
result.setAttribute("class", "result");

const scoreBoard = document.getElementById("score");
scoreBoard.appendChild(rounds);
scoreBoard.appendChild(playerScore);
scoreBoard.appendChild(pcScore);
scoreBoard.appendChild(drawScore);
scoreBoard.appendChild(result);

const updateScore = () => {
    rounds.innerText = "Rounds: " + (gameScore.player + gameScore.computer + gameScore.draws);
    playerScore.innerText = "Player's score: " + gameScore.player;
    pcScore.innerText = "PC's score: " + gameScore.computer;
    drawScore.innerText = "Draws: " + gameScore.draws;
    result.innerText = resultText;
}

