 
import {  useState } from 'react'
import './App.css'
import WeatherDashboard from './components/WeatherDashboard'

function App() {

  const [StateName, setStateName] = useState("")

  
 
  return (
    <div>
      
      
      <WeatherDashboard setStateName={setStateName} />


    </div>
  )

}

export default App
