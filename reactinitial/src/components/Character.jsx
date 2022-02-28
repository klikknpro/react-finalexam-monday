import React, { useState } from 'react'

const Character = ({character}) => {
  const [isShown, setIsShown] = useState(false);

  const toggleDetails = () => {
    setIsShown(!isShown);
  }

  return (
    <div>
      <h2>{character.name}</h2>
      <button onClick={toggleDetails}>Show more</button>
      {isShown && <p>{character.details}</p>}
    </div>
  )
}

export default Character
