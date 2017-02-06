import React from 'react'

const TotalScore = ({score}) => {
  return (
    <div className='flex total-score'>
      Total Score
      <div className='ml-auto score'>
      {score}
      </div>
    </div>
  )
}

export default TotalScore
