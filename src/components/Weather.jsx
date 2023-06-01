/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [minWeather, setMinWeather] = useState("");
  const [minWeatherInput, setMinWeatherInput] = useState("");
  const [metics, setMetics] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [humidity, setHumidity] = useState("");
  const [maxWeather, setMaxWeather] = useState("");
  const [humidityPercent, setHumidityPercent] = useState("");
  const [humidityText, setHumidityText] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [windDegree, setWindDegree] = useState("");
  const [windDegreeText, setWindDegreeText] = useState("");
  const [fellsLike, setFellsLike] = useState("");
  const [fellsLikeText, setFellsLikeText] = useState("");
  const [windInfo, setWindInfo] = useState("");
  const [windInfoText, setWindInfoText] = useState("");
  const [sunriseTime, setSunriseTime] = useState("");
  const [sunsetTime, setSunsetTime] = useState("");

  const fetchWeather = () => {
    const options = {
      method: "GET",
      url: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather",
      params: { city: city },
      headers: {
        "X-RapidAPI-Key": "ab555b251bmsh441d7ff9b70daf8p141ca6jsn89722c122442",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };

    axios.request(options).then((res) => {
      setWeather(res.data.temp);
      setMinWeather(res.data.min_temp);
      console.log(res.data);
      console.log("hi");
      setMetics("°C");
      setInputCity(`Temperature is : ${res.data.temp}`);
      setMinWeatherInput(`Min Temperature is : `);
      setMaxWeather(res.data.max_temp);
      setHumidity(res.data.humidity);
      setHumidityText("Humidity is ");
      setHumidityPercent("%");
      setMaxTemp("Max Temperature is : ");
      setWindDegree(res.data.wind_degrees);
      setWindDegreeText(`Wind Degree is ${res.data.wind_degrees}°`);
      setFellsLike(res.data.feels_like);
      setFellsLikeText("Feels Like ");
      setWindInfo(`${res.data.wind_speed} km/hr`);
      setWindInfoText(`Wind Speed is ${res.data.wind_speed} km/hr`);
      const unixTimestamp = res.data.sunrise;
      const date = new Date(unixTimestamp * 1000);
      const formattedTime = date.toLocaleTimeString();
      setSunriseTime(`SunriseTime is ${formattedTime}`);
      const unixTimestampSunset = res.data.sunset;
      const dateSunset = new Date(unixTimestampSunset * 1000);
      const formattedTimeSunset = dateSunset.toLocaleTimeString();
      setSunsetTime(`Sunset Time is ${formattedTimeSunset}`);

      console.log(res.data);
    });
  };

  const inputValue = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="text-center md:mt-20 mt-8 w-full overflow-x-hidden">
      <h1 className="text-4xl mb-6 text-yellow-600">☁️ Weather App ☀️</h1>
      <input
        onChange={inputValue}
        className="py-2 px-6 outline-none border-red-500 border-4"
        type="text"
        placeholder="enter you city name"
      />
      <br></br>
      <button
        onClick={fetchWeather}
        className="px-6 md:mt-10 mt-8 py-2 text-white rounded-md bg-orange-500"
      >
        Search
      </button>
      <div className="md:mt-16 mt-6 flex items-center justify-center">
        <h1 className="md:text-4xl text-3xl font-bold text-rose-500 md:mb-0 mb-6">
          Weather For {city}
        </h1>
      </div>
      <div className="md:grid md:grid-cols-3 flex flex-col items-center md:mt-16 md:mx-32">
        <div className="md:w-[500px] md:h-[280px] w-[300px]  md:mb-0 mb-8 bg-gray-100 border-gray-200 border-2">
          <h1 className="text-4xl text-teal-500 mt-2 pb-2 mb-4 border-b-2">
            Temperatures
          </h1>
          <h1 className="mb-6 text-4xl text-amber-600">{`${weather}${metics}`}</h1>
          <p className="mb-3 text-lg text-gray-700">{`${inputCity}${metics}`}</p>
          <p className="mb-3 text-lg text-gray-700">{`${minWeatherInput}${minWeather}${metics}`}</p>
          <p className="mb-2 text-lg text-gray-700">{`${maxTemp}${maxWeather}${metics}`}</p>
        </div>
        <div className="md:w-[500px] h-[280px] w-[300px] md:mb-0 mb-8 bg-gray-100 border-gray-200 border-2">
          <h1 className="text-4xl text-pink-500 mt-2 pb-2 mb-4 border-b-2 ">
            Humidity Info
          </h1>
          <p className="mb-6 text-4xl text-blue-500">{`${humidity}${humidityPercent}`}</p>
          <p className="mb-3 text-lg text-gray-700">{`${windDegreeText}`}</p>
          <p className="mb-2 text-lg text-gray-700">{`${fellsLikeText}${fellsLike}${metics}`}</p>
          <p className="mb-6 text-lg text-gray-700">{`${humidityText} ${humidity}${humidityPercent}`}</p>
        </div>

        <div className="md:w-[500px] md:h-[280px] w-[300px]  md:mb-0 mb-8 bg-gray-100 border-gray-200 border-2">
          <h1 className="text-4xl text-green-500 mt-2 pb-2 mb-4 border-b-2">Wind Info</h1>
          <h1 className="mb-6 text-4xl text-red-500">{`${windInfo}`}</h1>
          <p className="mb-6 text-lg text-gray-700">{`${windInfoText}`}</p>
          <p className="mb-3 text-lg text-gray-700">{`${sunriseTime}`}</p>
          <p className="mb-3 text-lg text-gray-700">{`${sunsetTime}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
