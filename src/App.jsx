import './App.css'
import NavBar from "./components/NavBar/NavBar";
import Weather from "./components/Weather/Weather";
import ThemeProvider from "./components/ThemeProvider/ThemeProvider";
import { getWeather } from './utils/getWeather';
import { categoriseWeather } from "./utils/categoriseWeather";
import { updateTheme } from './utils/updateTheme';
import { COORDINATES } from './utils/coordinates';
import { API_KEY } from './utils/api_key';
import { useEffect, useState } from 'react';

function App() {
  const [temp, setTemp] = useState();
  const [category, setCategory] = useState('Loading');
  const [location, setLocation] = useState('MELBOURNE');

  const handleNavClick = (location) => {
    setLocation(location);
  };

  useEffect(() => {
    getWeather(COORDINATES[location], API_KEY)
      .then((weather) => {
        setTemp(weather.temperature);
        setCategory(categoriseWeather(weather));
      })
      .catch(e => console.log(e));
  }, [location]);

  useEffect(() => {
    updateTheme(category)
  }, [category]);

  return (
    <ThemeProvider weatherCategory={category}>
      <NavBar handleNavClick={handleNavClick}/>
      <Weather 
          temperature={temp} 
          description={category}
          location={location}
      />
    </ThemeProvider>
  )
}

export default App
