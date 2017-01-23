
/*
W12D1 - Tic Tac Toe
Make a command line tic-tac-toe game from scratch for two players. 
Expected features
===============
* Minimal UI that redraws the board and makes clear whose turn it is, each turn.
* Players can submit moves (assume, admittedly unrealistically, that both players are sitting at the same keyboard).
* Win detection - detect and display who won

Bonus / stretch goals (any or all of the following)
=======================================
* Structure your code such that the UI can be turned easily into a native mobile app (iOS say) without having to rewrite the core game logic.
* Implement win detection with a functional rather than iterative style.
* Between moves, rotate the board 90 degrees counter-clockwise. The moves "fall" due to "gravity", post-rotation.

Implementation instructions
=======================
* Create the project from scratch. Don't just clone an existing project.
* This includes writing configuration files for any dependencies and test framework setup.
* You should have a reasonably thorough suite of unit tests using a real unit test framework.
* Use the editor of your choice.
* Init a git repo for this project.
* Push the repo up to github.
* Make small commits as you go to illustrate your thought process and be able to back out changes easily.
* Don't forget to push your final solution up to Github.
* Add a professional-looking README file with installation and usage instructions.

Try your best to work on this challenge without referring to outside resources. However, if you have to look things up online, go ahead. 

Submission instructions
====================
Upon completion of your work, submit a link to the repository via this form.

* Required
*/
class Board {
  constructor() {
    this.board = [[' ', ' ', ' '], 
                  [' ', ' ', ' '], 
                  [' ', ' ', ' ']]
  }

  updateDateBoard(x, y, symbol) {
    this.board[x, y] = symbol
    this.displayBoard()
  }

  rotateAndFall() {
    this.board //rotate board 
    //and fall
    this.displayBoard()
  }

  displayBoard () {
  }
}

class Player {
  constructor (name, symbol) {
    this.name = name
    this.symbole = X
  }
}

class Game {
  constructor(playerName1, playerName2, symbol) {
    this.board = new Board()
    this.gameOver = false
    this.winner = ''
  }

  checkWin() {
  }

  checkDraw() {
  }

  checkBoard() {
    checkWin()
    checkDraw()
  }
  
  promptName() {
    this.player1 = new Player(playerName1, symbol1)
    this.player2 = new Player(playerName2, symbol2) 
  }
  promptMove(playerName) {
    //command line ask player 1 for 
    this.
    return move 
  } 
  
  playGame() {
    this.board.displayBoard()
    this.promptName()
    while (this.gameOver === false) {
      var move = this.promptMove(playerName1)
      this.board.updateDateBoard(move, player1.symbol)
      this.checkBoard()
      var move = this.promptMove(playerName2)
      this.board.updateDateBoard(move, player2.symbol)
      this.checkBoard()
    }
  }
}





