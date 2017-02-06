import React from 'react'
const PoggleDice = ({value, onSelect, isSelected}) => {
  return (
    <div className={`dice ${isSelected ? 'selected': ''}`} onClick={onSelect}>
      {value}
    </div>
  )
}

export default PoggleDice
