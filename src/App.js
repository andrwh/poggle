import logo from '../public/poggle.png'
import React from 'react'

// styles
import './index.css'

// modules
import PoggleBoard from './components/PoggleBoard'
import CurrentWord from './components/CurrentWord'
import ScoreBoard from './components/ScoreBoard'

// config
import config from './config'

// utils/helpers
import {
  randomNumber,
  createRandomBoard,
  resetBoard,
  getExistingLetterIndex,
  getNeighbors
} from './utils'

class PoggleApp extends React.Component {
  constructor() {
    super()
    this.state = {
      board: createRandomBoard(config.dice),
      letters: [],
      answers: new Map(),
    }
  }

  handleDiceClick = (row, col) => {
    const { board, letters } = this.state
    const guess = {
      letter: board[row][col],
      row: row,
      col: col,
    }

    const lastLetter = letters[letters.length - 1]

    // check if there is no tile set
    if (!letters.length) {
      this.setState({
        letters: letters.concat([guess]),
      })
      return
    }

    // check if clicking on first letter
    // const firstLetter = letters[0]
    // if (row === firstLetter.row && col === firstLetter.col) {
    //   this.setState({
    //     letters: [],
    //   })
    //   return
    // }

    // check if existing letter in guesses
    const letterIndex = getExistingLetterIndex(letters, row, col)
    // allow for any letter if (letterIndex !== -1) { }
    if (letterIndex === letters.length - 1) {
      // only allow removing the previous letter
      this.setState({
        letters: letters.slice(0, letterIndex)
      })
      return
    }

    const neighbors = getNeighbors(board, lastLetter)
    if (neighbors.some(n => n.row === row && n.col === col)) {
      if (letters.filter(l => l.row === row && l.col === col).length === 0) {
        this.setState({
          letters: letters.concat([guess])
        })
      }
    }

  };

  handleSubmit = () => {
    const word = this.getWord()
    if (!word.length ) { return }
    if (this.state.answers.get(word, false)) {
      return
    }

    let score
    let l = word.length
    if (l <= 8) {
      score = config.points[l]
    } else {
      score = 6
    }

    this.setState({
      answers: this.state.answers.set(word, score),
      letters: [],
    })

  };

  getWord = () => {
    return this.state.letters.map(x => x.letter.value).join('')
  };

  render() {
    return (
      <div className='container'>
        <img className='logo' src={logo} height="100"/>
        <div className='sections'>
          <div className='left'>
            <PoggleBoard
              board={this.state.board}
              letters={this.state.letters}
              onSelect={this.handleDiceClick}/>
              <CurrentWord letters={this.state.letters} />
              <button className='button' onClick={this.handleSubmit}>Submit Word</button>
            </div>
          <div className='right'>
            <ScoreBoard answers={this.state.answers} />
          </div>
        </div>
      </div>
    )
  }
}

export default PoggleApp
