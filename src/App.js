import "./App.css";
import { CityProvider } from "./Context/CityContext";
import Header from "./Components/Header";
import ShowingWeather from "./Components/ShowingWeather";
import Footer from "./Components/Footer";

function App() {
  // const url =
  //   "https://api.openweathermap.org/data/2.5/forecast/daily?q=adana&units=metric&cnt=7&appid=886705b4c1182eb1c69f28eb8c520e20";

  return (
    <CityProvider>
      <div className="app">
        <Header />
        <ShowingWeather />
        <Footer />
      </div>
    </CityProvider>
  );
}

export default App;
