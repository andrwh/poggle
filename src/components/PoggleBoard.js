import React from 'react'
import PoggleDice from './PoggleDice'

const PoggleBoard = ({board, letters, onSelect}) => {
  let b = board.map((row,rowIndex) => {
    return row.map((letter, colIndex) => {
      return (
        <PoggleDice
          key={colIndex}
          value={letter.value}
          isSelected={letters.some(g => g.row === rowIndex && g.col === colIndex)}
          onSelect={onSelect.bind(this, rowIndex, colIndex)} />
      )
    })
  })

  return (
    <div className='board'>
      {b}
    </div>
  )

}

export default PoggleBoard
