import React, { useContext, useState } from "react";
import CityContext from "../Context/CityContext";
const Header = () => {
  const { setCity } = useContext(CityContext);
  const [value, setValue] = useState("");

  return (
    <div className="Header">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="city-search"
      />
      <button
        className="btn-search"
        onClick={(e) => {
          e.preventDefault();
          setCity(value);
          console.log(value);
          setValue("");
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Header;
