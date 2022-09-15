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
  [0, 7, 14, 21], [7, 14, 21, 28],
  [14, 21, 28, 35], [1, 8, 15, 22],
  [8, 15, 22, 29], [15, 22, 29, 36],
  [2, 9, 16, 23], [9, 16, 23, 30], 
  [16, 23, 30, 37], [3, 10, 17, 24],
  [10, 17, 24, 31], [17, 24, 31, 38],
  [4, 11, 18, 25], [11, 18, 25, 32],
  [28, 25, 32, 39], [5, 12, 19, 26],
  [12, 19, 26, 33], [19, 26, 33, 40],
  [6, 13, 20, 27], [13, 20, 27, 34],
  [20, 27, 34, 41], [21, 15, 9, 3],
  [28, 22, 16, 10], [22, 16, 10, 4],
  [35, 29, 23, 17], [29, 23, 17, 11],
  [23, 17, 11, 5], [36, 30, 24, 18], 
  [30, 24, 18, 12], [24, 18, 12, 6],
  [37, 31, 25, 19], [31, 25, 19, 13],
  [38, 32, 26, 20], [3, 11, 19, 27], 
  [2, 10, 18, 26], [10, 18, 26, 34], 
  [1, 9, 17, 25], [9, 17, 25, 33], 
  [17, 25, 33, 41], [0, 8, 16, 24],
  [8, 16, 24, 32], [16, 24, 32, 40], 
  [7, 15, 23, 31], [15, 23, 31, 39],
  [14, 22, 30, 38]
]

/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner

/*------------------------ Cached Element References ------------------------*/

const spaceEls = document.querySelectorAll('section > div')
const messageEl = document.querySelector('#message')
const resetBtnEl = document.querySelector('#reset-btn')
const lightDarkBtn = document.querySelector('#light-dark-btn')
const body = document.querySelector('body')
const titleEl = document.querySelector('#title')


/*----------------------------- Event Listeners -----------------------------*/

spaceEls.forEach((space) => {
  space.addEventListener('click', handleClick)
})
resetBtnEl.addEventListener('click', init)

lightDarkBtn.addEventListener('click', toggleLightDark)



/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  titleEl.className = "";
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
  titleEl.className = "animate__animated animate__lightSpeedInLeft"
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
  if (!winner) {
    messageEl.innerText = `It's ${turn === 1 ? "😎" : "🤓"}'s turn!`
  } else if (winner === 'T') {
    messageEl.innerText = `Tie!`
  } else {
    messageEl.innerText = `${winner === 1 ? "😎" : "🤓"} wins!!!`
    confetti.start(2000)
  }
}

function handleClick(evt) {
  let spIdx = parseInt(evt.target.id.replace('sp', ''))
  if (board[spIdx] || winner) {
    return
  }
  const corrIdx = handlePlacement(spIdx)
  board[corrIdx] = turn
  turn *= -1
  winner = getWinner()
  render()
}

function handlePlacement(spIdx) {
  let opnPos = spIdx + 35 
  if (board[opnPos] !== null) {
    opnPos = (spIdx + 28)
  }
  if (board[opnPos] !== null) {
    opnPos = (spIdx + 21)
  }
  if (board[opnPos] !== null) {
    opnPos = (spIdx + 14)
  }
  if (board[opnPos] !== null) {
    opnPos = (spIdx + 7)
  }
  if (board[opnPos] !== null) {
    opnPos = (spIdx)
  }
  return opnPos
}

function getWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    if (Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]] + board[winningCombos[i][3]]) === 4) 
    return board[winningCombos[i][0]]
  }
  if (board.includes(null)) {
    return null
  } else {
    return 'T'
  }
}

function toggleLightDark() {
  body.className = body.className === 'dark' ? '' : 'dark'
}


function play() {
  let audio = document.getElementById('audio')
  audio.volume = .03
  audio.play()
}

function pause() {
  let audio = document.getElementById('audio')
  audio.pause()
  audio.currentTime = 0;
}