import { useEffect, useState } from "react"
import Container from "./components/Container"
import FormContainer from "./components/FormContainer"
import WeatherCard from "./components/WeatherCard"
import ErrorMessage from "./components/ErrorMessage"
import Suggestions from "./components/Suggestions"

const apiKey = import.meta.env.VITE_API_KEY

function App() {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null);
  const [searchClicked, setSearchClicked] = useState(false);
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([
    'New York',
    'London',
    'Paris',
    'Tokyo',
    'Sydney',
    'Rio de Janeiro',
    'Berlin',
    'Rome',])

  const handleSearchClick = () => {
    setSearchClicked(true);
  }

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick()
    }
  }
  const handleSuggestionClick = (suggestion) => {
    setCity(suggestion);
    handleSearchClick()
  };

  const fetchWeatherData = async () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Cidade não encontrada');
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        console.error('Error fetching weather data:', error);
      });

    setCity('')
  }

  useEffect(() => {
    setWeatherData(null)
  }, [city])

  useEffect(() => {
    if (searchClicked && city.trim() !== '') {
      fetchWeatherData();
      setSearchClicked(false)
    }
  }, [searchClicked, city])

  return (
    <>
      <Container>
        <FormContainer
          city={city}
          setCity={setCity}
          handleClick={handleSearchClick}
          handleKey={handleKeyUp}
        />
        {error && <ErrorMessage />}
        {weatherData && <WeatherCard weather={weatherData} />}
        {suggestions.length > 0 &&
          weatherData === null &&
          <Suggestions
            suggestions={suggestions}
            handleSuggestionClick={handleSuggestionClick}
          />}
      </Container>
    </>
  )
}

export default App
