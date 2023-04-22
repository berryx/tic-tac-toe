import './css/main.css';

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

    const getBoard = () => _board;

    const getEmptyField = () => {
        let currentBoard = gameBoard.getBoard();

        let emptyField = [];

        for (let i = 0; i < 9; i++) {
            if (currentBoard[i] === null || currentBoard[i] === undefined) {
                emptyField.push(i);
            }
        }
        return emptyField;
    };

    return {getField, setField, reset, getBoard, getEmptyField};
})();

const gameController = (() => {
    const playerX = Player('X', 'Player 1');
    let player0;
    let _round = 0;

    let currentPlayer = playerX;
    const winCondition = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [6, 4, 2]
    ];

    const init = (playerSelect) => {
        if (playerSelect === "ai") {
            player0 = aiController.getAiPlayer();
        } else if (playerSelect === "human") {
            player0 = Player("O", "Player 2");
        }
        displayController.updatePlayerElement(currentPlayer);
    };
    const playerRound = (index) => {

        if (!gameBoard.getField(index)) {
            gameBoard.setField(index, currentPlayer.getSign());
            if (checkWinner()) {
                displayController.displayResult(currentPlayer);
            }
            nextPlayer();
            displayController.updatePlayerElement(currentPlayer);
        }
        _round++;
        if (_round === 9 && !checkWinner()) {
            displayController.displayResult("tie");
        }
    };

    const nextPlayer = () => {
        currentPlayer === playerX ? currentPlayer = player0 : currentPlayer = playerX;
        if (currentPlayer.getName() === "ai" && !checkWinner()) {
            playerRound(aiController.aiPlay());
        }
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
    let _resetBtn = document.getElementById("resetBtn");


    const initMenu = () => {
        displayTitleScreen();
    };
    const initGame = (playerSelect) => {
        displayController.enableBoard();
        if (playerSelect === "ai") {
            _playerTwo.textContent = playerSelect.toUpperCase();
        }
        gameController.init(playerSelect);

        _resetBtn.onclick = nextRound;
        let parent = _boxes[0].parentElement;
        _resetBtn.style.marginLeft = `${(parent.offsetWidth -_resetBtn.offsetWidth).toString()}px`;
    };

    const enableBoard = () => {
        _boxes.forEach((box) => {
            box.addEventListener("click", interactiveBox);
        });
    };

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
        for (let box of _boxes) {
            box.addEventListener("click", interactiveBox);
        }
        for (let box of _boxes) {
            box.classList.remove("x", "o");
        }

        _resultTemplate.classList.remove("flex");
        _resultTemplate.classList.add("hidden");
        _resultTemplate.remove();
    };

    const displayResult = (winner) => {

        _boxes.forEach((box) => {
            box.removeEventListener("click", interactiveBox);
        });


        let winnerName = _resultTemplate.querySelector("#winner");
        let title = _resultTemplate.querySelector("h2");
        let nextRoundBtn = _resultTemplate.querySelector("#nextRound");

        if (winner === "tie") {
            title.textContent = "It's a tie !";
            winnerName.textContent = "Try again ?";
        } else {
            title.textContent = "The winner is";
            winnerName.textContent = winner.getName();
        }


        nextRoundBtn.onclick = nextRound;

        _resultTemplate.classList.remove("hidden");
        _resultTemplate.classList.add("flex");
        let main = document.querySelector("main");
        main.appendChild(_resultTemplate);
    };

    const interactiveBox = (e) => {
        gameController.playerRound(e.currentTarget.dataset.index);
        updateBoard();
    };

    const displayTitleScreen = () => {
        const titleScreen = document.getElementById("mainMenu").content.cloneNode(true).firstElementChild;
        const playerSelect = titleScreen.querySelector("#playerSelect");
        const playHumanBtn = titleScreen.querySelector("#human");
        const playAiBtn = titleScreen.querySelector("#ai");
        console.log();
        playHumanBtn.addEventListener("click", (e) => {
            document.body.querySelector("main").removeChild(titleScreen);
            initGame("human");
        });
        playAiBtn.addEventListener("click", (e) => {
            document.body.querySelector("main").removeChild(titleScreen);
            initGame("ai");
        });
        document.body.querySelector("main").appendChild(titleScreen);
    };

    return {initMenu, initGame, displayResult, updatePlayerElement, updateBoard, enableBoard};
})();

const aiController = (() => {
    const _aiPlayer = Player("O", "ai");

    const getAiPlayer = () => _aiPlayer;

    const aiPlay = () => {
        let emptyIndex = gameBoard.getEmptyField();
        return emptyIndex[Math.floor(Math.random() * emptyIndex.length)];
    };
    return {aiPlay, getAiPlayer};
})();

displayController.initMenu();
