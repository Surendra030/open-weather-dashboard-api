# Weather Dashboard

This is a simple weather dashboard application built with React. It allows users to search for a city and view the current weather conditions along with a five-day weather forecast. The data is fetched from the OpenWeatherMap API.

## Features

- Search for any city to get the current weather.
- View a five-day weather forecast.
- Responsive design for better usability across devices.

## Folder Structure

The project Component structure is organized as follows:

weather-api-task/
└── src/
    ├── App.css                # Styles for the main application
    ├── App.jsx                # Main application component
    ├── index.css              # Global styles
    ├── main.jsx               # Entry point of the application
    └── components/            # Folder for React components
            ├── Forecast.jsx       # Component displaying weather forecast
            ├── ForecastDay.jsx     # Component for individual forecast days
            ├── SearchBox.jsx       # Component for the search input
            ├── WeatherDashboard.jsx # Main component that handles fetching weather data
            └── WeatherInfo.jsx      # Component displaying current weather information




### Explanation of Components

- **App.jsx**: 
  - The main application component that renders the `WeatherDashboard`.

- **WeatherDashboard.jsx**: 
  - This is the main component that contains the application logic. It manages the state for current weather data, forecast data, and the city being searched.
  - **State Variables**:
    - `Data`: Holds the current weather data fetched from the API.
    - `forecastData`: Stores the five-day weather forecast data.
    - `city`: The city name entered by the user.
  - **Functions**:
    - `fetchData(city_name)`: Fetches current weather data for the specified city and calls `fetchForecast` to get the forecast.
    - `fetchForecast(city_name)`: Fetches the five-day weather forecast data for the specified city.
  - **Lifecycle Method**:
    - `useEffect`: Calls `fetchData` with "London" as the default city when the component mounts.

- **SearchBox.jsx**: 
  - Provides an input field for users to enter a city name and a button to trigger the search. It manages the city state and calls the `handleSearch` function passed from the `WeatherDashboard`.

- **WeatherInfo.jsx**: 
  - Displays the current weather information, including temperature, humidity, wind speed, and weather conditions. It receives the weather data as a prop.

- **Forecast.jsx**: 
  - Displays the five-day weather forecast, showing the weather for each day at noon. It receives the forecast data as a prop and presents it in a user-friendly format.

- **ForecastDay.jsx**: 
  - This component handles the rendering of individual forecast days, displaying the weather data for each day.

## Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-dashboard.git
   cd weather-dashboard
