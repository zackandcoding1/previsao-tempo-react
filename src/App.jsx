import { useState, useRef } from "react";
import axios from "axios";
import "./App.css";
import WeatherInfo from "./components/WeatherInfos/WeatherInfo";
import WeatherInfo5Days from "./components/WeatherInfos5Days/WeatherInfo5Days";

function App() {
  const [weather, setWeather] = useState();
  const [weather5Days, setWeather5Days] = useState();
  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "8ff9ed6055712358c8e62120cd340ce8";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    try {
      const apiInfo = await axios.get(url);
      const apiInfo5Days = await axios.get(url5Days);
      setWeather5Days(apiInfo5Days);
      setWeather(apiInfo.data);
    } catch (error) {
      console.error("Erro ao buscar o clima:", error);
    }
  }

  return (
    <div className="container">
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInfo weather={weather} />}
      {weather5Days && <WeatherInfo5Days weather5Days={weather5Days} />}
    </div>
  );
}

export default App;
