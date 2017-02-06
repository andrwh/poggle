import React from 'react'

const CurrentWord = ({letters}) => {
  const word = letters.map(l => l.letter.value)
  return (
    <div className={`current-word ${word.length === 0 ? 'hidden' : ''}`}>
      <h4>Current Word</h4>
      {word}
    </div>
  )
}

export default CurrentWord
