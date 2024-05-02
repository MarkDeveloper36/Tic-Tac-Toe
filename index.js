const gameBoard = (() => {
    const rows = 3;
    const columns = 3;
    const board = [];

    for(let i = 0; i < rows; i++) {
        board.push([]);
        for(let j = 0; j < columns; j++) {
            board[i].push('*');
        }
    }

    return {board};
})();

function createPlayer(playerNum, playerName) {
    this.playerNum = playerNum;
    this.playerName = playerName;
    return {playerNum, playerName};
}

function gameController() {
    const player1 = createPlayer(1, 'Player One');
    const player2 = createPlayer(2, 'Player two');

    let activePlayer = player1;

    function switchPlayerTurn() {
        if(activePlayer === player1){
            activePlayer = player2;
        } else {
            activePlayer = player1;
        }
    };

    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        console.log(gameBoard.board);
        console.log(getActivePlayer().playerName + '\'s Turn.');
    }

    function getPlayerInput(player) {
        let choiceRow = prompt(player + ' row: ');
        let choicecol = prompt(player + ' column: ');
    }
    
    const playRound = (() => {
        printNewRound();
        getPlayerInput(getActivePlayer().playerName);

        switchPlayerTurn();
    })();
};

const game = gameController();