import './FormContainer.css'
import Button from "../Button"

const FormContainer = ({ setCity, city, handleClick, handleKey }) => {

  const handleInputChange = (e) => {
    setCity(e.target.value)
  }

  return (
    <div className="form" >
      <h3>Confira o clima de uma cidade:</h3>
      <div className="form-input-container">
        <input
          type="text"
          placeholder="Digite o nome de uma cidade"
          onChange={handleInputChange}
          onKeyUp={handleKey}
          value={city}
        />
        <Button onclick={handleClick}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </Button>
      </div>
    </div>
  )
}

export default FormContainer
