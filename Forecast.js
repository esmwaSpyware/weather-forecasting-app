const Forecast = ({ forecastData }) => {
    if (!forecastData || !forecastData.forecast) return null;
  
    return (
      <div className="forecast">
        <h3>5-Day Forecast</h3>
        <div>
          {forecastData.forecast.forecastday.map((day, index) => (
            <div className="forecast-day" key={index}>
              <p>{day.date}</p>
              <p>Temp: {day.day.avgtemp_c}°C</p>
              <p>Condition: {day.day.condition.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Forecast;
  