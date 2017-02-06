import React from 'react'
import TotalScore from './TotalScore'

const Answer = ({word, score}) => {
  return (
    <div className='flex mb2' key={word}>
      <div className='word'>
        {word}
      </div>
      <div className='score'>
        {score}
      </div>
    </div>
  )
}

const Answers = ({answers}) => {
  let totalScore = 0
  let answerArray = []
  
  for (var [key, value] of answers) {
    answerArray.unshift([key, value])
    totalScore = totalScore + value
  }

  let results = answerArray.map(([word, score]) => {
    return (
      <Answer word={word} score={score} key={word}/>
    )
  })

  return (
    <div className='flex flex-auto flex-column'>
      <div className='flex-auto scores mb2'>
        {results}
      </div>
      <TotalScore score={totalScore} />
    </div>
  )

}

export default Answers
