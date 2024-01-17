// const (constant, never changes)
// let (let me change)

const grid = document.querySelector('.grid');
const scoreCounter = document.querySelector('.score');
const endGameScreen = document.querySelector('.end-game-screen');
const endGameText = document.querySelector('.end-game-text');
const playAgainButton = document.querySelector('.play-again');

// GAME
const totalCells = 100;
const totalBombs = 90;
const maxScore = 5;
const bombsList = [];

let score = 0;

function updateScore() {
    score++;
    scoreCounter.innerText = score.toString().padStart(5, '0');

    if (score === maxScore){
        endGame();
    }
}

const cell = document.createElement('div');
cell.classList.add('cell');

for (let i = 1; i <= 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    cell.addEventListener('click', function (){
        cell.classList.add('cell-clicked');
        updateScore();
    });

    grid.appendChild(cell);

}

while (bombsList.length < totalBombs) {
    const randomNumber = Math.floor(Math.random() * totalCells) + 1;

    if (!bombsList.includes(randomNumber)) {
        bombsList.push(randomNumber);
    }
}

function endGame(){
    endGameText.innerHTML = 'YOU<br>WON';
    endGameScreen.classList.add('win');
    endGameScreen.classList.remove('hidden');
}
