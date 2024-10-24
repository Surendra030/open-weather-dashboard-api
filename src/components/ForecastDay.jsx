import React from 'react';

export default function ForecastDay({ day }) {
  return (
    <div className="forecast-day text-center bg-gray-100 p-4 rounded-lg">
      {/* By using date time text it extracting day of week and converting to short for like - mon, tue ... */}
      <p>{new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'short' })}</p>
      
      <img
        src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
        alt="weather icon"
        className="mx-auto"
      />
      <p>High: {day.main.temp_max}°C</p>
      <p>Low: {day.main.temp_min}°C</p>
    </div>
  );
}
