import React from 'react'
import Button from '../Button'

const Suggestions = ({ suggestions, handleSuggestionClick }) => {
  return (
    <div id='suggestions'>
      <h3>Escolha uma sugestão:</h3>
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
            <Button>{suggestion}</Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Suggestions
