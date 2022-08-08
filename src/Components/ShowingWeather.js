import React, { useContext, useEffect, useState } from "react";
import CityContext from "../Context/CityContext";
import CityCard from "./CityCard";
import axios from "axios";

const ShowingWeather = () => {
  const { city, setCity } = useContext(CityContext);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const key = `886705b4c1182eb1c69f28eb8c520e20`;
  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=7&appid=${key}`;

  useEffect(() => {
    axios(url)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
    console.log(data);
  }, [, city]);

  return (
    <div className="Weather">
      {loading ? (
        <h2 className="loading">Loading...</h2>
      ) : (
        <div className="weather-container">
          <h2 className="city-name">{city}</h2>
          <CityCard city={data} />
        </div>
      )}
    </div>
  );
};

export default ShowingWeather;
