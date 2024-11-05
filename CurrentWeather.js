const CurrentWeather = ({ weatherData }) => {
    if (!weatherData || !weatherData.current) {
      return <p>Loading weather data...</p>;
    }
  
    return (
      <div className="current-weather">
        <h2>{weatherData.location.name}</h2>
        <p>Temperature: {weatherData.current.temp_c}°C</p>
        <p>Humidity: {weatherData.current.humidity}%</p>
        <p>Wind Speed: {weatherData.current.wind_kph} kph</p>
      </div>
    );
  };
  
  export default CurrentWeather;
  