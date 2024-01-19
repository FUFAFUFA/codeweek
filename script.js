const scoreCounter = document.querySelector(".score-counter")
const grid = document.querySelector(".grid")
const endGameScreen = document.querySelector(".end-game-screen")
const endGameText = document.querySelector(".end-game-text")
const playAgainButton = document.querySelector(".play-again")

const totalCells = 100;
const totalBombs = 6;
const maxScore = totalCells - totalBombs;
const bombsList = [];

let score = 0

function updateScore() {
    score++
    scoreCounter.innerText = score.toString().padStart(5, '0')

    if (score == maxScore) {
        endGame(true)
    }
}

function revealAllBombs() {
    const cells = document.querySelectorAll('.cell');
    for (let i = 1; i <= cells.length; i++) {
        const cell = cells[i - 1];

        if (bombsList.includes(i)) {
            cell.classList.add('cell-bomb');
        }
    }
}

function endGame(isVictory) {
    if (isVictory) {
        endGameText.innerHTML = 'YOU<br>WON'
        endGameScreen.classList.add('win')
    }
    revealAllBombs();
    endGameScreen.classList.remove('hidden')
}

for (let i = 1; i <= totalCells; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')

    cell.addEventListener('click', function () {
        if (bombsList.includes(i)) {
            cell.classList.add('cell-bomb')
            endGame(false)
        }
        if (cell.classList.contains('cell-clicked')) return
        cell.classList.add('cell-clicked')
        updateScore()
    })

    grid.appendChild(cell)
}

while (bombsList.length < totalBombs) {
    const randomNumber = Math.floor(Math.random() * totalCells) + 1

    if (!bombsList.includes(randomNumber)) {
        bombsList.push(randomNumber)
    }
}

playAgainButton.addEventListener('click', function() {
    window.location.reload()
})