import React from 'react';
import ForecastDay from './ForecastDay';

export default function Forecast({ forecastData }) {
  return (
    <div className="forecast mt-6">
      <h3 className="text-lg font-semibold mb-4">5-Day Forecast</h3>
      <div className="forecast-grid grid grid-cols-5 gap-4">
        {forecastData.map((day, index) => (
          <ForecastDay key={index} day={day} />
        ))}
      </div>
    </div>
  );
}
