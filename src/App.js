import "./App.css";

function App() {
  const url =
    "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?countryIds=TR&namePrefix=hatay";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6327be9192msh3c60375df64e7ddp1b4b20jsn1dfdf5dbaf50",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));
  return <div className="App"></div>;
}

export default App;
