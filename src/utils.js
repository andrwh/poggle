import config from './config'
import _ from 'lodash'

export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const createRandomBoard = (dices) => {
  let randomDice = _.shuffle(dices).map(d => {
    const randomIndex = randomNumber(0,5)
    return {
       value: d[randomIndex] === 'q' ? 'qu' : d[randomIndex],
       selected: false
    }
  })
  return _.chunk(randomDice, 5)
}

export const resetBoard = (board) => {
  let nextBoard = board.slice(0)
  nextBoard.map(row => {
    row.map(letter => {
      letter.selected = false
    })
  })
  return nextBoard
}

export const getExistingLetterIndex = (letters, row, col) => {
  return letters.findIndex(l => l.row === row && l.col === col)
}

export const getNeighbors = (board, letter) => {
  const { row, col } = letter
  let positions = config.neighborPositions
  let results = []
  positions.forEach(p => {
    const x = row + p[0]
    const y = col + p[1]
    if (x >=0 && x < board.length) {
      if (y >=0 && y < board.length) {
        results.push({
          letter: board[x][y],
          row: x,
          col: y,
        })
      }
    }
  })
  return results
}
