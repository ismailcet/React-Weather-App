import React, { useContext, useEffect, useState } from "react";
import CityContext from "../Context/CityContext";

const ShowingWeather = () => {
  const { city, setCity } = useContext(CityContext);
  const [info, setInfo] = useState({});
  const key = `886705b4c1182eb1c69f28eb8c520e20`;
  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=7&appid=${key}`;
  const fetchData = async () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(info);
  return (
    <div>
      <h2></h2>
    </div>
  );
};

export default ShowingWeather;
