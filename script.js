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
const bomsList = [];

let score = 0;

const cell = document.createElement('div');
cell.classList.add('cell');

for (let i = 1; i <= 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add(cell);

    cell.addEventListener('click', function (){
        console.log()
    })
    grid.appendChild(cell);
}
