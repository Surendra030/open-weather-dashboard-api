import React, { useEffect, useState } from 'react';
import SearchBox from './SearchBox';
import WeatherInfo from './WeatherInfo';
import Forecast from './Forecast';

export default function WeatherDashboard() {
  const [Data, setData] = useState({});
  const [forecastData, setForecastData] = useState([]);
  const [city , setCity] = useState("London");

  async function fetchData(city_name) {

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apiKey}&units=metric`);
    let api_data = await res.json();
    setData(api_data);
    fetchForecast(city_name);


  }

  async function fetchForecast(city_name) {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    let res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&appid=${apiKey}&units=metric`);
    let api_data = await res.json();
    const dailyData = api_data.list.filter((reading) => reading.dt_txt.includes("12:00:00"));
    setForecastData(dailyData);

  }

  useEffect(() => {
    fetchData("London");
  }, []);

  const handleSearch = () => {
    if (city) {
      fetchData(city);
    } else {
      alert("Please enter a city name.");
    }
  };

  return (
    <div className="container weather-dashboard max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <SearchBox city={city} setCity={setCity} handleSearch={handleSearch} />
      {Data.main && <WeatherInfo Data={Data} />}
      {forecastData.length > 0 && <Forecast forecastData={forecastData} />}
    </div>
  );
}
