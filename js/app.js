/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
  [0, 1, 2, 3], [7, 8, 9, 10],
  [14, 15, 16, 17], [21, 22, 23, 24,],
  [28, 29, 30, 31], [35, 36, 37, 38],
  [1, 2, 3, 4], [2, 3, 4, 5],
  [3, 4, 5, 6], [8, 9, 10, 11],
  [9, 10, 11, 12], [10, 11, 12, 13],
  [15, 16, 17, 18], [16, 17, 18, 19],
  [17, 18, 19, 20], [22, 23, 24, 25],
  [23, 24, 25, 26], [24, 25, 26, 27],
  [29, 30, 31, 32], [30, 31, 32, 33],
  [31, 32, 33, 34], [36, 37, 38, 39],
  [37, 38, 39, 40], [38, 39, 40 ,41],
  [39, 40, 41, 42],
]

/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner

/*------------------------ Cached Element References ------------------------*/

const spaceEls = document.querySelectorAll('section > div')
const messageEl = document.querySelector('#message')

/*----------------------------- Event Listeners -----------------------------*/

spaceEls.forEach((space) => {
  space.addEventListener('click', handleClick)
})

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

function handleClick(evt) {
  let spIdx = parseInt(evt.target.id.replace('sp', ''))
  board[spIdx] = turn
  turn *= -1
  render()
}