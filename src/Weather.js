import React, { useState } from 'react'


const Weather = () => {
    const [city, setCity] = useState('')

    // State to store weather data
    const [weatherData, setWeatherData] = useState(null);

    const handleInput = (e) => {
        setCity(e.target.value)
    }

    const getWeather = () => {
        // Replace YOUR_API_KEY with your actual OpenWeatherMap API key
        const apiKey = '4229bcee1f0a5052aac6376c5aabfa06';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Update weather data in the state
                setWeatherData(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    };

    return (

        <div>
            <h2>Weather App</h2>
            <label htmlFor="cityInput">Enter City:</label>
            <input
                type="text"
                id="cityInput"
                value={city}
                onChange={handleInput}
                placeholder="e.g., New York"
            />
            <button onClick={getWeather}>Get Weather</button>

            {weatherData && (
                <div>
                    <h3>Weather Information</h3>
                    <p>City: {weatherData.name}</p>
                    <p>Temperature: {weatherData.main.temp} °C</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                </div>
            )}
        </div>
    );
}

export default Weather