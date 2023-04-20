import './css/main.css';
import {logPlugin} from '@babel/preset-env/lib/debug';

const Player = (sign, name) => {

    let _name = name;
    let _sign = sign;
    const getSign = () => _sign;
    let getName = () => _name;

    return {getSign, getName};
};

const gameBoard = (() => {
    let _board = new Array(9);
    const getField = (index) => _board[index];
    const setField = (index, sign) => _board[index] = sign;
    const reset = () => _board = new Array(9);

    const showBoard = () => _board.join('-');

    return {getField, setField, reset, showBoard};
})();

const gameController = (() => {
    const playerX = Player('X', 'Player 1');
    const playerY = Player('O', 'Player 2');
    let _round = 0;

    let currentPlayer = playerX;
    const winCondition = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 4], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [6, 4, 2]
    ];
    const init = () => {
        displayController.updatePlayerElement(currentPlayer);
    };
    const playerRound = (index) => {

        if (!gameBoard.getField(index)) {
            gameBoard.setField(index, currentPlayer.getSign());
            if (checkWinner()) {
                console.log(`${currentPlayer.getName()} won`);
                displayController.displayResult(currentPlayer);
            }
            nextPlayer();
            displayController.updatePlayerElement(currentPlayer);
        }
        _round++;
        if (_round === 9) {
            displayController.displayResult("tie");
        }
        console.log(_round);
    };

    const nextPlayer = () => {
        currentPlayer === playerX ? currentPlayer = playerY : currentPlayer = playerX;
    };

    const resetGame = () => {
        gameBoard.reset();
        currentPlayer = playerX;
        _round = 0;
        displayController.updatePlayerElement(currentPlayer);
    };


    const checkWinner = () => {
        const signs = ["X", "O"];
        for (const sign of signs) {
            if (winCondition.some(condition => condition.every(index => gameBoard.getField(index) === sign)))
                return true;
        }
        return false;
    };


    return {init, playerRound, resetGame};
})();

const displayController = (() => {
    let _boxes = document.querySelectorAll(".box");
    let _playerOne = document.getElementById("playerOne");
    let _playerTwo = document.getElementById("playerTwo");
    let _resultTemplate = document.getElementById("resultScreen").content.cloneNode(true).firstElementChild;

    _boxes.forEach((box) => {
        box.addEventListener("click", e => {
            gameController.playerRound(box.dataset.index);
            updateBoard();
        });
    });

    const updatePlayerElement = (currentPlayer) => {

        if (currentPlayer.getSign() === "X") {
            _playerOne.classList.add("playing");
            _playerTwo.classList.remove("playing");
        } else {
            _playerTwo.classList.add("playing");
            _playerOne.classList.remove("playing");
        }

    };

    const updateBoard = () => {
        for (let i = 0; i < _boxes.length; i++) {
            _boxes[i].textContent = gameBoard.getField(i);
            if (gameBoard.getField(i) === "X") {
                _boxes[i].classList.add("x");
            } else if (gameBoard.getField(i) === "O") {
                _boxes[i].classList.add("o");
            }
        }
    };

    const nextRound = (e) => {
        gameController.resetGame();
        updateBoard();

        _resultTemplate.classList.remove("flex");
        _resultTemplate.classList.add("hidden");
        _resultTemplate.remove();
    };

    const displayResult = (winner) => {

        let winnerName = _resultTemplate.querySelector("#winner");
        let title = _resultTemplate.querySelector("h2");
        let nextRoundBtn = _resultTemplate.querySelector("#nextRound");

        if(winner === "tie"){
            title.textContent = "It's a tie !"
           winnerName.textContent = "Try again ?";
        }else{
            title.textContent = "The winner is"
            winnerName.textContent = winner.getName();
        }


        nextRoundBtn.onclick = nextRound;

        _resultTemplate.classList.remove("hidden");
        _resultTemplate.classList.add("flex");
        let main = document.querySelector("main");
        main.appendChild(_resultTemplate);
    };

    return {displayResult, updatePlayerElement, updateBoard};
})();


