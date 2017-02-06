import React from 'react'
import Answers from './Answers'

const ScoreBoard = ({answers}) => {
  return (
    <div className='flex flex-column' style={{height: '100%'}}>
      <div className='flex headers mb2'>
        <div className='word'>
          Word
        </div>
        <div className='score'>
          Score
        </div>
      </div>
      <Answers answers={answers} />
    </div>
  )
}

export default ScoreBoard
