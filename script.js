// const (constant, never changes)
// let (let me change)

// WEB-API
const grid = document.querySelector('.grid');
const scoreCounter = document.querySelector('.score-counter');
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
cell.classList.add(cell);
grid.appendChild(cell);
}
