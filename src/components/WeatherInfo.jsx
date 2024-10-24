import React from 'react';

export default function WeatherInfo({ Data }) {
  return (
    <div className="weather-info bg-blue-100 p-4 rounded-lg text-center">
      <h2 className="text-lg font-semibold">Current Weather in <br/><br/><strong>{Data.name}</strong></h2>
      <div className="weather-details flex justify-between items-center mt-4">
        <div className="temperature">
          <span className="text-4xl font-bold">{Data.main.temp}°C</span>
          <p className="text-sm">{Data.weather[0].description}</p>
        </div>
        <div className="weather-icon">
          <img
            src={`http://openweathermap.org/img/wn/${Data.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </div>
      </div>
    </div>
  );
}
