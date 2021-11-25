const p1 = {
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
    score: 0
}
const p2 = {
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
    score: 0
}


const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto')
let winningScore = 3;
let isGameOver = false;


function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;

    }
}



p1.button.addEventListener('click', function () {
    updateScores(p1, p2)

})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})

function resetScore() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.button.disabled = false;
        p.display.classList.remove('has-text-success', 'has-text-danger');
    }
}
resetButton.addEventListener('click', resetScore)


winningScoreSelect.addEventListener('change', function () {
    winningScore = +this.value;
    resetScore();
})