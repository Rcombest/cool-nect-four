/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner

/*------------------------ Cached Element References ------------------------*/

const spaceEls = document.querySelectorAll('section > div')
const messageEl = document.querySelector('#message')

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  board = [
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null
  ]
  turn = 1
  winner = null
  render() 
}

function render() {
  board.forEach((space, idx) => {
    spaceEls[idx].innerText = space;
    if (space === null) {
      spaceEls[idx].innerText = ''
    }
    if (space === 1) {
      spaceEls[idx].innerText = '😎'
    }
    if (space === -1) {
      spaceEls[idx].innerText = '🤓'
    }
  })
}