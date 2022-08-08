import React from "react";

const CityCard = ({ city }) => {
  function getDayOfWeek(date) {
    const dayOfWeek = new Date(date * 1000).getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[dayOfWeek];
  }
  return (
    <div className="city-card">
      {city.list.map((item, index) => (
        <div className="city-info" key={index}>
          <p className="date">{getDayOfWeek(item.dt)}</p>
          <img
            className="weather-icon"
            src={`https://raw.githubusercontent.com/ismailcet/React-Weather-App/master/src/Images/${item.weather[0].icon}.png`}
            alt={item.weather[0].main}
          />
          <p className="celcius">
            {item.temp.day.toFixed(0)}
            <span>°C</span> / {item.temp.night.toFixed(0)}
            <span>°C</span>
          </p>

          <p className="description">{item.weather[0].main}</p>
        </div>
      ))}
    </div>
  );
};

export default CityCard;
